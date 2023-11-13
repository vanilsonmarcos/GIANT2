interface IAdendaSegurado<T> {
    getAllSeguradoByApoliceID(apoliceID: string): Promise<T[]>;
    getAllSeguradoByAdendaID(adendaID: string): Promise<T[]>;

    removeSeguradoByApoliceID(apoliceID: string, seguradoID:string): Promise<T>;
    removeSeguradoByAdendaID(adendaID: string, seguradoID:string): Promise<T>;

    addSeguradosByAdendaID(adendaID: string, segurados: T[]): Promise<T[]>;
    addSeguradosByApoliceID(apoliceID: string, segurados: T[]): Promise<T[]>;

    removeSeguradosByAdendaID(adendaID: string, segurados: T[]): Promise<T[]>;
    removeSeguradosByApoliceID(apoliceID: string, segurados: T[]): Promise<T[]>;
}

export default IAdendaSegurado;