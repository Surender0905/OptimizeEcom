import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { getProductDetail } from '../lib/Product-Data/productData';

const ProductDetail = () => {
  const navigate = useNavigate();
  const id = +useParams().id;

  const [product, setProduct] = useState(null);

  const productDetail = async (id) => {
    const data = await getProductDetail(id);
    setProduct(data);
  };

  useEffect(() => {
    productDetail(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div onClick={handleBack} className="cursor-pointer">
            {'<--back'}
          </div>
          {product && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.thumbnail}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4"></div>
                <p className="leading-relaxed mb-4">{product.description}</p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Link to={'/' + (id - 1)}>prev product</Link>
            <Link to={'/' + (id + 1)}>next product</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
