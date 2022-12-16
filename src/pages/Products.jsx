import { range } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Filter from '../components/Filter';
import WithUser from '../components/HOC/WithUser';
import Loading from '../components/Loading/Loading';
import ProductLists from '../components/products-list/ProductLists';
import { getProducts } from '../lib/Product-Data/productData';

const Products = () => {
  const [products, setProducts] = useState({});

  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || '';
  sort = sort || 'default';
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort === 'rating') {
        sortBy = 'rating';
      } else if (sort === 'low') {
        sortBy = 'price';
      } else if (sort === 'high') {
        sortBy = 'price';
        sortType = 'desc';
      }

      getProducts(sortBy, sortType, query, page).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  const onChnage = (value) => {
    setSearchParams({ ...params, query: value, page: 1 }, { replace: false });
  };

  const handleSortChange = (value) => {
    setSearchParams({ ...params, sort: value }, { replace: false });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Filter onChange={onChnage} sort={handleSortChange} />

      {products?.data?.length > 0 && <ProductLists products={products?.data} />}

      {products?.data?.length === 0 && <p>no product found</p>}

      {range(1, products?.meta?.last_page + 1).map((item) => (
        <Link
          key={item}
          to={'?' + new URLSearchParams({ ...params, page: item })}
          className={
            'p-2 m-1 ' + (item === page ? 'bg-red-500' : 'bg-indigo-700')
          }
        >
          {item}
        </Link>
      ))}
    </>
  );
};

export default WithUser(Products);
