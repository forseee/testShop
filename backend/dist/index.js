var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});
app.delete("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deleteProduct = yield prisma.product.delete({
            where: {
                id: +id,
            },
        });
        res.status(200).send(deleteProduct);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.query;
    try {
        const deleteProduct = yield prisma.product.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
        });
        res.status(200).send(deleteProduct);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.post("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, img, price } = req.body;
    try {
        const product = yield prisma.product.create({
            data: {
                name,
                img,
                price,
            },
        });
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
