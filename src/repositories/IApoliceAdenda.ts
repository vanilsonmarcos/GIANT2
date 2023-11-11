interface IApoliceAdenda<T> {
    getAllApoliceAdenda(apoliceID: string): Promise<T[]>
    getFirstAdenda(apoliceID: string) : Promise<T>
    getLatestAdenda(apoliceID: string): Promise<T>
}

export default IApoliceAdenda;