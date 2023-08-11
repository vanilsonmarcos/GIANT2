interface IGenericRepository <T>{
    getAll(): Promise<T[]>;
    getByID(id: String): Promise<T>;
    create(item: T): Promise<T>;
    update(id: string, item: T):Promise<T>;
    delete(id: String): Promise<T>;
}

export default IGenericRepository

