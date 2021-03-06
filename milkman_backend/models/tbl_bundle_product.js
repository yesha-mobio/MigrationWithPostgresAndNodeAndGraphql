"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_bundle_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_bundle_product.belongsTo(models.tbl_bundle, {
        foreignKey: "bundle_id",
        as: "bundles",
      });
      tbl_bundle_product.belongsTo(models.tbl_product, {
        foreignKey: "product_id",
        as: "products",
      });
      // define association here
    }
  }
  tbl_bundle_product.init(
    {
      bundle_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbl_bundle_product",
    }
  );
  return tbl_bundle_product;
};
