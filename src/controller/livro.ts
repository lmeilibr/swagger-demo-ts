import {Request, Response} from "express";
import {v4 as uuid} from 'uuid';


interface Livro {
    id: string;
    titulo: string;
    autor: string[];
}

let livros: Livro[] = [
    {
        id: "1f40d986-380a-41ae-845f-0b63c0c5bb56",
        titulo: "Programador Pragmático",
        autor: ['Andy Hunt','Dave Thomas'],
    }
]

export const findAll = (
    req: Request,
    res: Response,
) => {
    const exampleEndpointText = "This is an endpoint";
    console.log(exampleEndpointText);
    res.status(200).json(livros);
};

export const findLivro = (
    req: Request,
    res: Response,
) => {
    const livro = livros.filter(livro => {
        console.log(req.params.id)
        console.log(livro.id)
        return livro.id === req.params.id
    })
    res.status(200).json(livro);
};

export const addLivro = (
    req: Request,
    res: Response,
) => {
    try {
        const livro = {
            id: uuid(),
            ...req.body
        }
        livros.push(livro)
    } catch (error) {
        return res.status(500).send(error)
    }
    res.status(201).json({status: "ok"})
}