import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  // createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  // updateProduct,
} from '../../models/index';
import { deleteProductSchema, listProductsSchema } from './schema';

export default function productHandler(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  server.get('/', { schema: listProductsSchema }, async (req, res) => {
    req.log.info('list products from db');
    const products = await getAllProducts();
    res.send(products);
  });

  server.get<{ Params: { _id: string } }>('/:_id', async (req, res) => {
    req.log.info('get one products from db');
    const id = req.params._id;
    const products = await getOneProduct(id);
    res.status(200).send(products);
  });

  // server.post('/', async (req, res) => {
  // 	req.log.info('Add products to db');
  // 	const products = await createProduct(req.body);
  // 	res.status(201).send(products);
  // });

  // server.put<{ Params: { _id: string } }>('/:_id', async (req, res) => {
  // 	req.log.info('Update product to db');
  // 	const id = req.params._id;
  // 	const products = await updateProduct(id, req.body);
  // 	res.status(200).send(products);
  // });

  server.delete<{ Params: { _id: string } }>(
    '/:_id',
    { schema: deleteProductSchema },
    async (req, res) => {
      req.log.info(`delete product ${req.params._id} from db`);
      const id = req.params._id;
      await deleteProduct(id);
      res.code(200).send('OK');
    }
  );

  done();
}
