interface IGenericRepository <T>{
    getAll(): Promise<T[]>;
    getByID(id: string): Promise<T>;
    create(item: T):Promise<T> ;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}

export default IGenericRepository

