import instance from '../axios';

export async function getProducts(sortBy, sortType, search, page) {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (sortType) {
    params.sortType = sortType;
  }

  if (search) {
    params.search = search;
  }

  if (page) {
    params.page = page;
  }

  const data = await instance
    .get('/products', { params })
    .then((res) => res.data);

  return data;
}

export async function getProductDetail(id) {
  const data = await instance.get(`/products/${id}`);

  return await data.data;
}

export function getProductsByIds(ids) {
  const commaSepeartedIds = ids.join();
  return axios
    .get('https://myeasykart.codeyogi.io/products/bulk', {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

// {1: 3, 5: 9, 7: 13}
export function saveCart(cart) {
  return axios
    .post(
      'https://myeasykart.codeyogi.io/carts',
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    )
    .then(function (response) {
      return response.data;
    });
}

// {1: 3, 5: 9, 7: 13} // /bulk?ids=1,5,7
// [{product: {id: 1, title: "iPhone"}, quantity: 3 }, {product: {}, quantity: 9}]
export function getCart() {
  return axios
    .get('https://myeasykart.codeyogi.io/carts', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then(function (response) {
      return response.data;
    });
}
