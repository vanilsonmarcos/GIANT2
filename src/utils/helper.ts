import moment from "moment";
import CustomError from "./CustomError";
import { adenda, apolice_fracionamento, preco_cilindrada, veiculo } from "@prisma/client";
import prisma from "../repositories/PrismaClient";


function JsDateToYYYMMDD(date: Date): string {
  // Extract year, month, and day
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  const day = ('0' + date.getDate()).slice(-2);

  // Format the date as YYYY-MM-DD
  const formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
}

function isValidDateFormat(dateStr: string): boolean {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(dateStr);
}


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


function isBefore(data_inicio: Date, data_fim: Date) {
  const m_data_inicio = moment(data_inicio);
  const m_data_fim = moment(data_fim);
  return m_data_inicio.isBefore(m_data_fim)
}


async function calculatePremio(adenda: adenda, item: veiculo, fc: apolice_fracionamento): Promise<number> {
  const preco_cilindrada = await prisma.preco_cilindrada.findFirst({
    where: {
      VEICULO_CATEGORIA_ID: item.VEICULO_CATEGORIA_ID,
      CILINDRADA_MAX: { lte: item.CILINDRADA },
    }
  });
console.log(preco_cilindrada)
  if (preco_cilindrada === null || preco_cilindrada === undefined) {
    throw new CustomError("Não foi possivel encontrar uma categoria do veículo para precificar o Prémio");
  }
  
  switch (fc.NO_FRACOES) {
    case 1:
      return preco_cilindrada.PREMIO_ANUAL.toNumber()!;
    case 2:
      return preco_cilindrada.PREMIO_SEMESTRAL.toNumber()!;
    default:
      return preco_cilindrada.PREMIO_TRIMESTRAL.toNumber()!;
  }
}


function isArrayEmpty<T>(array: T[]): boolean {
  return array.length === 0;
}

export {
  JsDateToYYYMMDD,
  isDateWithinIntervals,
  validateAdendaDates,
  calculatePremio,
  isArrayEmpty,
  isBefore as isValidInterval,
  isValidDateFormat
}