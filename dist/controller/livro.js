"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLivro = exports.findLivro = exports.findAll = void 0;
const uuid_1 = require("uuid");
let livros = [
    {
        id: "1f40d986-380a-41ae-845f-0b63c0c5bb56",
        titulo: "Programador Pragmático",
        autor: ['Andy Hunt', 'Dave Thomas'],
    }
];
const findAll = (req, res) => {
    const exampleEndpointText = "This is an endpoint";
    console.log(exampleEndpointText);
    res.status(200).json(livros);
};
exports.findAll = findAll;
const findLivro = (req, res) => {
    // console.log(req.params.id)
    // console.log(livros)
    const livro = livros.filter(livro => {
        console.log(req.params.id);
        console.log(livro.id);
        return livro.id === req.params.id;
    });
    console.log(livro);
    res.status(200).json(livro);
};
exports.findLivro = findLivro;
const addLivro = (req, res) => {
    try {
        const livro = Object.assign({ id: (0, uuid_1.v4)() }, req.body);
        livros.push(livro);
    }
    catch (error) {
        return res.status(500).send(error);
    }
    res.status(201).json({ status: "ok" });
};
exports.addLivro = addLivro;
