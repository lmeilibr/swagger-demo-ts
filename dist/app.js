"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const livro_route_1 = require("./routes/livro-route");
const app = (0, express_1.default)();
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "API REST de Livros",
            version: "1.0.0",
            description: "Documentação Swagger para API REST de Livros",
            contact: {
                name: "Leandro Meili",
                email: "leandro@example.com"
            }
        },
        schemes: ["http"],
        servers: [
            {
                url: "http://localhost:3000/v1",
                description: "Dev Server"
            },
            {
                url: "http://api.host.prod.com:3007/v1",
                description: "Prod Server"
            }
        ],
    },
    apis: [
        "./dist/routes/*.js",
    ],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(body_parser_1.default.json());
app.use("/v1", livro_route_1.livroRouter);
app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
