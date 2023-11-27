import { adenda, veiculo } from '@prisma/client';
interface IAdendaItems {
    adenda: adenda,
    items:veiculo[] 
}

export default IAdendaItems;