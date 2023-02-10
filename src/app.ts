import express from "express";
import bodyParser from "body-parser";
import {livroRouter} from "./routes/livro-route";

const app = express();

app.use(bodyParser.json());

app.use("/v1", livroRouter);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));