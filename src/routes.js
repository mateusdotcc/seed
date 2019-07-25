const express = require("express");
const authMiddleware = require("./middlewares/auth");

const routes = express.Router();

routes.use(authMiddleware);

const ProductController = require("./controllers/ProductController");
routes.get("/products", ProductController.list);
routes.post("/product", ProductController.create);
routes.get("/products/:id", ProductController.read);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
