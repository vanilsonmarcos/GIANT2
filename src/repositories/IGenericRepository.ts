interface IGenericRepository <T>{
    getAll(): Promise<T[]>;
    getByID(id: String): Promise<T|Boolean>;
    create(item: T):Promise<Boolean> ;
    update(id: string, item: T):Promise<Boolean>;
    delete(id: String): Promise<Boolean>;
}

export default IGenericRepository

