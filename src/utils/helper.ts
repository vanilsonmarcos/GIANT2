import moment from "moment";
import CustomError from "./CustomError";
import { apolice_fracionamento, veiculo } from "@prisma/client";
import prisma from "../repositories/PrismaClient";

function isDateWithinIntervals(startDate: moment.Moment, endDate: moment.Moment, intervals: number[],) {
  // Calculate the difference in months between the start and end dates
  const monthsDiff = endDate.diff(startDate, 'months');

  // Check if the difference is one of the allowed intervals specified by developer such as (3, 6, or 12 months)
  return intervals.includes(monthsDiff);
}


function validateAdendaDates(data_inicio: Date, data_fim: Date) {
  const m_data_inicio = moment(data_inicio);
  const m_data_fim = moment(data_fim);

  if (m_data_inicio.isAfter(m_data_fim)) {
    throw new CustomError("A data de inicio deve ser inferior à data do fim da adenda");
  }

  if (!isDateWithinIntervals(m_data_inicio, m_data_fim, [3, 6, 12])) {
    throw new CustomError("O intervalo das datas deve ser de 3, 6 ou 12 meses");
  }
}

async function calculatePremio(adendaID: string, item: veiculo, fc: apolice_fracionamento): Promise<number> {
  const pc = await prisma.preco_cilindrada.findFirst({
    include: {
      veiculo_categoria: {
        include: {
          veiculo: {
            where: {
              ID: item.ID
            }
          }
        }
      }
    }
  });

  if (pc == null) {
    throw new CustomError("Não fpi possivel encontrar uma categoria para precificar o Premio");
  }
  
  switch (fc.NO_FRACOES) {
    case 1:
      return 1 * pc.PREMIO_ANUAL.toNumber()!;
    case 2:
      return 1 * pc.PREMIO_SEMESTRAL.toNumber()!;
    default:
      return 1 * pc.PREMIO_TRIMESTRAL.toNumber()!;
  }
}


export {
  isDateWithinIntervals,
  validateAdendaDates,
  calculatePremio
}