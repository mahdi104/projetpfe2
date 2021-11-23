import React from "react";
import { useDispatch } from "react-redux";

import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./User.css";
import { update } from "../../JS/action/user";
const Product = ({  user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="style">
        <Card.Content>

          <Card.Header>{user.etablissement}</Card.Header>
          <Card.Meta>{user.firstname}</Card.Meta>
          <Card.Description>
            <strong>{ user.email}</strong>
          </Card.Description>
          <Card.Description>
            <strong>{ user.lastname}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         
          <div className="ui two buttons">
            {user.status === "active" ? (
              <Button
                color="black"
                onClick={() =>
                  dispatch(update(user._id, { status: "desactive" }))
                }
              >
                block
              </Button>
            ) : null}
            {user.status === "desactive" ? (
              <Button
                color="black"
                onClick={() => dispatch(update(user._id, { status: "active" }))}
              >
                Deblock
              </Button>
            ) : null}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Product;