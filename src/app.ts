import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import {livroRouter} from "./routes/livro-route";

import swaggerDocumentation from "./swagger.json"

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

app.use(bodyParser.json());

app.use("/v1", livroRouter);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));