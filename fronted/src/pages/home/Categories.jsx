import React from 'react'
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import { Link } from 'react-router-dom'

export default function Categories() {
  const categories = [
    { name: "accessories", image: category1 },
    { name: "dress", image: category2 },
    { name: "jewellery", image: category3 },
    { name: "cosmetics", image: category4 },
  ];
  return (
    <>
      <div className="product__grid">
        {
          categories.map((category) => (
            <Link key={category.name} to={`/category/${category.name}`} className="categories__card">
              
                <img src={category.image} alt={category.name} />
                <h4>{category.name}</h4>
              
            </Link>
          ))
        }

      </div>

    </>
  )
}
