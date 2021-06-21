import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { getProductByCategories } from "../../JS/action/product";
import ProductCategorie from "../ProductCategorie/ProductCategorie";


const GetProductyCategorie = () => {
    const products=useSelector((state)=>state.productReducer.products)
    const loadProducts = useSelector(
        (state) => state.productReducer.loadProducts
      );
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProductByCategories());
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
            }}>
                {loadProducts ? (
                <h2>loading</h2>
                ) : products.length == 0 ? (
                <h2>there is no data show</h2>
            ) : (
                
                products.map((el) => <ProductCategorie key={el._id} product={el}/>)
                )}
            </div>
        </div>
    )
}

export default GetProductyCategorie
