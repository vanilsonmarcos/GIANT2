interface IGenericRepository <T>{
    getAll(): Promise<T[]>;
    getByID(id: String): Promise<T>;
    create(item: T):Promise<T> ;
    update(id: String, item: T):Promise<T>;
    delete(id: String): Promise<Boolean>;
}

export default IGenericRepository

