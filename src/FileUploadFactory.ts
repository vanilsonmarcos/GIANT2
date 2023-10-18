import { Request } from 'express';
import multer from 'multer';
import { uploadImage, uploadDocument } from "./multer";
import { DocExtensions, ImageExtensions } from './entities/Ficheiro/Extensions';

class FileUploadFactory {
    private File: Express.Multer.File

    public constructor(file: Express.Multer.File) {
        this.File = file;
    }

    public create(req: Request, res: Response): multer.Multer {
        if (ImageExtensions.includes(this.File.mimetype)) {
            return uploadImage;
        }
        // this is a document
        return uploadDocument;
    }
}

export default FileUploadFactory;