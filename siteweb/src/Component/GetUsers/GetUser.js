import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../JS/action/user";
import Product from "../Product/Product"

const GetUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
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
          {users.map((el) => (
            <Product key={el._id} product={[]} user={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetUsers;