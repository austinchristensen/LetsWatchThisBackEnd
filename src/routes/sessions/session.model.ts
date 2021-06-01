import { Schema, model, connect } from 'mongoose';

interface Session {
  events: [];
  timestamps: { createdAt: Date; updatedAt: Date };
}

const schema = new Schema<Session>(
  {
    events: { type: [], required: true, default: [] },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const sessionModel = model<Session>('Session', schema);

export default sessionModel;

export async function getAllProducts() {
  const test = await sessionModel.find({}).exec();
  return sessionModel.find({});
}

export function getOneProduct(id: string) {
  return sessionModel.findOne({ _id: id });
}

export function createProduct(data: { _id?: unknown; }) {
  return sessionModel.create(data);
}

export function updateProduct(id: string, data: { _id?: unknown; }) {
  return sessionModel.updateOne({ _id: id }, data);
}

export function deleteProduct(id: string) {
  return sessionModel.deleteOne({ _id: id });
}
