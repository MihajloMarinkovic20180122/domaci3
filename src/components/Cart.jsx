import React from 'react';
import SingleProduct from './SingleProduct';

function Cart({ products, onRemove }) {
  return (
    <>
      <div className="all-products">
        {products.map(
          (prod) => (
            (
              <SingleProduct
                product={prod}
                key={prod.id}
                inCart={1}
                onRemove={onRemove}
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default Cart;
