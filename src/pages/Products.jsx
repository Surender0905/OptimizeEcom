import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Loading from '../components/Loading/Loading';
import ProductLists from '../components/products-list/ProductLists';
import { getProducts } from '../lib/Product-Data/productData';
import NotFound from './NotFound';

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState('');

  const [sort, setSort] = useState('default');

  const allProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    allProducts();
  }, []);

  let data = products.filter((product) => {
    let lowerCaseTitle = product.title.toLowerCase();

    let search = query.trim().toLowerCase();

    return lowerCaseTitle.indexOf(search) !== -1;
  });

  const onChnage = (value) => {
    setQuery(value);
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  if (sort === 'low') {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  }
  if (sort === 'high') {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  if (sort === 'rating') {
    data.sort(function (x, y) {
      return y.rating - x.rating;
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Filter onChange={onChnage} query={query} sort={handleSortChange} />

      {data.length > 0 && <ProductLists products={data} />}

      {data.length === 0 && <p>no product found</p>}
    </>
  );
};

export default Products;
