
import multer, { DiskStorageOptions, Multer, Options } from "multer";
import path from "path";

import { ImageExtensions } from "./entities/Ficheiro/Extensions";

const FILE_DEST = './storage/uploads';
const MAX_SIZE = 2 * 1000;

const diskStorageOptions: DiskStorageOptions = {
    destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => cb(null, FILE_DEST),
    filename: (req: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) => {
        const fileExtension = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + fileExtension);
    }
}

const documentStorage = multer.diskStorage(diskStorageOptions);

const uploadDocument = multer({ storage: documentStorage });

const imageStorage = multer.memoryStorage();

const uploadImage = multer({
    storage: imageStorage,
    fileFilter: (req, file, cb) => {
        if (!ImageExtensions.includes(file.mimetype)) {
            cb(new Error('Invalid file type. Only images are allowed.'));
            // Reject the file if it's not an image
        } else {
            cb(null, true);
            // Accept the file if it's an image
        }
    },
})

export { uploadDocument, uploadImage};