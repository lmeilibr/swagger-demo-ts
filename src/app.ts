import express from "express";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {livroRouter} from "./routes/livro-route";


const app = express();

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

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());

app.use("/v1", livroRouter);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));