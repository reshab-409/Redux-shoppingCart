import React from "react";
import Product from "./Product";
// import Dell from './images/Dell.avif';
// import Lenovo from './images/Lenovo.webp';
// import Acer from './images/Acer.jpg';
// import Hp from './images/Hp.jpg';
// import Mac from './images/Mac.jpg';
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
    price: 1199,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://cdn1.smartprix.com/rx-iU6WN3sSg-w1200-h1200/U6WN3sSg.jpg",
    price: 284,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=574&qlt=100,1&resMode=sharp2&size=574,402&chrss=full",
    price: 749,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://m.media-amazon.com/images/I/61LzPiqjg-L._SL1500_.jpg",
    price: 479,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://m.media-amazon.com/images/I/71pY7LZLnKS._SX450_.jpg",
    price: 643,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
