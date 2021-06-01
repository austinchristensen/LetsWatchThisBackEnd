import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    events: { type: [], required: true, default: [] },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const model = mongoose.model('Session', schema);

export default model;

export async function getAllProducts() {
  const test = await model.find({}).exec();
  return model.find({});
}

export function getOneProduct(id: string) {
  return model.findOne({ _id: id });
}

export function createProduct(data: { _id?: unknown; }) {
  return model.create(data);
}

export function updateProduct(id: string, data: { _id?: unknown; }) {
  return model.updateOne({ _id: id }, data);
}

export function deleteProduct(id: string) {
  return model.deleteOne({ _id: id });
}
