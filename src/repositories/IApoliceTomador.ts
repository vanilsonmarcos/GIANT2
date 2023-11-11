interface IApoliceTomador <T> {
    getTomadorByApoliceID(apoliceID: string): Promise<T>;
    removeTomadorByApoliceID(apoliceID: string, tomador_id:string): Promise<T>;
    AddTomadorByApoliceID(id: string, tomador:T):Promise<T>;
}

export default IApoliceTomador;