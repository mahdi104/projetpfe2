import React,{useEffect} from 'react'
import {useDispatch, useSelector  } from "react-redux";
import { getProduct  } from "../../JS/action/product";
import ProductUser from "./ProductUser"
const GetProduct = () => {
    const products = useSelector((state) => state.productReducer.products);
    const loadProducts = useSelector((state) => state.productReducer.loadProducts );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());
    }, []);
    return (
        <div>
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
          products.map((el) => <ProductUser key={el._id} product={el}  />)
        )}
      </div>
        </div>
    )
}

export default GetProduct