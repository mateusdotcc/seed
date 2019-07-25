const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async list(req, res) {
    try {
      const { page = 1 } = req.query;
      const products = await Product.paginate({}, { page, limit: 10 });

      return res.json(products);
    } catch (error) {
      return res.status(400).send({ error: "Error loading Products" });
    }
  },

  async create(req, res) {
    try {
      const product = await Product.create(req.body);

      return res.json(product);
    } catch (error) {
      return res.status(400).send({ error: "Error creating new Product" });
    }
  },

  async read(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      return res.json(product);
    } catch (error) {
      return res.status(400).send({ error: "Error showing Product" });
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });

      return res.json(product);
    } catch (error) {
      return res.status(400).send({ error: "Error updating Product" });
    }
  },

  async destroy(req, res) {
    try {
      await Product.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (error) {
      return res.status(400).send({ error: "Error deleting Product" });
    }
  }
};
