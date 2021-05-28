import Product from '../routes/products/entity';

export const getAllProducts = async () => {
  return Product.find({});
};

export const getOneProduct = async (id: string) => {
  return Product.findOne({ _id: id });
};

export const createProduct = async (data: { _id?: unknown }) => {
  return Product.create(data);
};

export const updateProduct = async (id: string, data: { _id?: unknown }) => {
  return Product.updateOne({ _id: id }, data);
};

export const deleteProduct = async (id: string) => {
  return Product.deleteOne({ _id: id });
};
