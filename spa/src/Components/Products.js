import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      pname: "Apples",
      desc: "Red Juicy Apples",
      price: "₹50",
      shipping: "₹3",
      img: "https://cdn.pixabay.com/photo/2022/09/16/16/09/harvest-7458975_960_720.jpg",
    },
    {
      id: 2,
      pname: "Bananas",
      desc: "Sweetest Organic Bananas",
      price: "₹40",
      shipping: "₹10",
      img: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
    },
    {
      id: 3,
      pname: "Grapes",
      desc: "Jumbo Grapes",
      price: "₹30",
      shipping: "₹5",
      img: "https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png",
    },
    {
      id: 4,
      pname: "Oranges",
      desc: "Packed With Vitamin C",
      price: "₹32",
      shipping: "₹0",
      img: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_960_720.jpg",
    },
  ]);
  return (
    <div>
      <ul>
        {products.map((prod) => {
          return (
            <li className="card">
              <Link
                to={`/products/${prod.id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={prod.img} />
                <div className="text">
                  <h3>{prod.pname}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet context={products} />
    </div>
  );
};
export default Products;
