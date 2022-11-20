import instance from '../axios';

export async function getProducts() {
  const data = await instance.get('/products');

  return data.data.products;
}
export async function getProductDetail(id) {
  const data = await instance.get(`/products/${id}`);

  return data.data;
}
