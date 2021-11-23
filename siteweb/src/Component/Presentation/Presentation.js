import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { currentUser } from "../../JS/action/user";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Logo from "../../Assets/image/logo.png";
import "./Presentation.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 720,
  },
});

const Presentation = () => {
  const classes = useStyles();


  return (
    <div className="position">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Logo"
            width="10%"
            // height="140"
            image={Logo}
            title="Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
             À propos de Nous
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              component="p"
              className="stylepar"
            >
              Parce que chaque jour vous exigez un environnement propre et sain, {" "}
              <span>Brinet</span> conçoit, fabrique et distribue des solutions et
              des produits innovants d'entretien d'hygiène et de désinfection.
              <br />
              Nous vous proposons une sélection de produits et services destinés
              à vous simplifier l'hygiène et développer vos affaires.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Presentation;