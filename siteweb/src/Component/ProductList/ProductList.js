import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct, getProductByCategories } from "../../JS/action/product";
import Product from "../Product/Product";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.oneProduct);
const [categorie, setcategorie] = useState("Hygiène Des Cuisines")
  const loadProducts = useSelector(
    (state) => state.productReducer.loadProducts
  );
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByCategories(categorie));
  }, [categorie]);
  return (
    <div>
      <label for="pet-select">Catégorie:</label>

<select name="cat" id="cat" onChange={(e)=>{setcategorie(e.target.value)}}>
    <option value="">--Please choose an option--</option>
    <option value="Hygiène Des Cuisines">Hygiène Des Cuisines</option>
    <option value="cat">Cat</option>
</select>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "stretch",
          margin: "5%",
          padding: "5%",
        }}
      >
        {loadProducts ? (
          <h2>loading</h2>
        ) : products.length == 0 ? (
          <h2>there is no data show</h2>
        ) : (
          products.map((el) => <Product key={el._id} product={el} user={{}} />)
        )}
      </div>
    </div>
  );
};

export default ProductList;