import React from 'react';
import { Link } from 'react-router-dom';

const ProductLists = (props) => {
  const { products } = props;

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex justify-between items-center">
          <div className="flex flex-wrap -m-4">
            {products?.length > 0 &&
              products?.map((item) => {
                return (
                  <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link
                      to={`/${item.id}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.thumbnail}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">${item.price}</p>
                    </div>

                    <div>
                      Rating:
                      {item.rating}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLists;
