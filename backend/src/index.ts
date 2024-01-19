import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";

const prisma = new PrismaClient();

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.delete("/products/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteProduct = await prisma.product.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).send(deleteProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/products/", async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    const deleteProduct = await prisma.product.findMany({
      where: {
        name: {
          contains: search as string,
        },
      },
    });
    res.status(200).send(deleteProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/products", async (req: Request, res: Response) => {
  const { name, img, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        img,
        price,
      },
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT: any = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
