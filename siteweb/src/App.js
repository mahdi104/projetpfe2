import './App.css';
import NavBar from './Component/NavBar/NavBar';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Presentation from './Pages/Presentation/Presentation';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './router/PrivateRoute';
import Profile from './Pages/Profil/Profile';
import SignIn from './Pages/SignIn';
import SignInAdmin from './Pages/SignInAdmin/SignInAdmin';
import PrivateRouteAdmin from './router/PrivateRouteAdmin';
import InterfaceAdmin from './Pages/Interfaceadmine/Interfaceadmine';
import AddProduct from './Component/AddProduct/AddProduct';
import ProductList from './Component/ProductList/ProductList';
import GetUsers from './Component/GetUsers/GetUser';
import GetProductyCategorie from './Component/GetProductByCategorie/GetProductyCategorie';
import GetProduct from './Component/GetProductUsers/GetProduct';
import Cart from "./Component/Cart/Cart";


function App() {
  return (
    <div className="App">
   <NavBar/>   
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/presentation" component={Presentation}/>
     <Route path="/signup" component={SignUp}/>
     <Route path="/signin" component={SignIn}/>
     <Route path="/signinadmin" component={SignInAdmin}/>
     <PrivateRoute path="/profile" component={Profile}/>
     <PrivateRouteAdmin path="/interfaceadmin" component={InterfaceAdmin}/>
     <PrivateRouteAdmin path={["/AddProduct","/edit/:id"]} component={AddProduct}/>
     <PrivateRouteAdmin path="/Get" component={ProductList}/>
     <Route path="/productlist" component={GetProduct}/>
     <Route path="/categorie" component={GetProductyCategorie}/>
     <PrivateRouteAdmin path="/listeUtilisateurs" component={GetUsers}/>
     <Route path="/cart/:id?" component={Cart}/>
   </Switch>
 </div>
  );
}

export default App;
