interface IAdendaCalculate<T> {
    sumAdendaPremio(adendaID: string): Promise<T>;
}

export default IAdendaCalculate;