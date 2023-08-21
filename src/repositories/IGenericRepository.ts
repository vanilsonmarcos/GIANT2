interface IGenericRepository <T>{
    getAll(): Promise<T[]>;
    getByID(id: String): Promise<T | Boolean>;
    create(item: T):Promise<T | Boolean> ;
    update(id: string, item: T):Promise<T | Boolean>;
    delete(id: String): Promise<Boolean>;
}

export default IGenericRepository

