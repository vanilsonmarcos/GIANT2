import { Request, Response } from "express";
import Ficheiro from "../entities/Ficheiro/Ficheiro";
import FicheiroService from "../services/FicheiroService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import { uploadImage, uploadDocument } from "../multer";
import { DocExtensions, ImageExtensions } from "../entities/Ficheiro/Extensions";
import FileUploadFactory from "../FileUploadFactory";

class FicheiroController {

    private fService: FicheiroService;

    constructor(ficheiroService: FicheiroService) {
        this.fService = ficheiroService;
    }

    getAll(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        const parsedID = Identifier.safeParse(id);
        if (!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const safeId = parsedID.data.toString();

        try {
            const pessoa = await this.fService.getByID(safeId);
            const response = {
                code: 200,
                message: "Os ficheiros foram encontrados com sucesso",
                data: pessoa
            }
            res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Os ficheiros não foram encontrados usando o id definido",
                data: {},
                error: error
            }
            res.json(response);
        }
    }

    async criar(req: Request, res: Response) {
        // Validate/Sanitize file
        if (!req.file || req.file === undefined) {
            handleParsingError(res, new Error("Nenhum ficheiro carregado no servidor"))
        }
        const file = req.file!;
        try {
            if (file.fieldname === 'file' && ImageExtensions.includes(file.mimetype)) {
                // Handle image uploads
                uploadImage.single('file')(req, res, (error) => {
                    if (error) {
                        handleParsingError(res, error);
                    }
                    // Process the uploaded image (in memory)
                    const image = file;
                    const base64Data = image.buffer.toString('base64');

                    const f: Ficheiro = {
                        nome: image.filename,
                        ext: image.mimetype,
                        content: base64Data,
                        size: image.size
                    }

                    // salvar a imagem na base de dados

                    const response = {
                        code: 200,
                        message: "A imagem foi adicionada com sucesso",
                        data: f
                    }
                    return res.json(response);
                });  
            }

            if (file.fieldname === 'file' && DocExtensions.includes(file.mimetype)) {
                uploadDocument.single('file')(req, res, (error) => {
                    if (error) {
                        handleParsingError(res, error);
                    }
    
                    // Process the uploaded document (on disk)
                    const document = file;
                    
                    const f: Ficheiro = {
                        nome: document.filename,
                        ext: document.mimetype,
                        path: document.path,
                        size: document.size
                    }
                    // save the image in the database.

                    const response = {
                        code: 200,
                        message: "A imagem foi adicionada com sucesso",
                        data: f
                    }
                    return res.json(response);
                });
            }        
        } catch (error) {
            const response = {
                code: 500,
                message: "Ocorreu um erro ao carregar o ficheiro no servidor",
                data: {},
                error: error
            }
            return res.json(response);
        }
    }

    async remover(req: Request, res: Response) {
        const { id } = req.params;
        const parsedID = Identifier.safeParse(id);
        if (!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const safeId = parsedID.data.toString();

        try {
            const result = await this.fService.remover(safeId);

            if (result) {
                const response = {
                    code: 200,
                    message: "ficheiro removido com sucesso",
                    data: {}
                }
                return res.json(response);
            }

        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover o ficheiro",
                data: {},
                error: error
            }
            return res.json(response);
        }

    }

}


export default FicheiroController;