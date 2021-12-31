import Sidebar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import {useSelector} from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App(){
  const user = useSelector(state => state.user.currentUser);
      return (
        <BrowserRouter>
          <Topbar />
          <div className="container">
            <Sidebar />
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="users" element={<UserList />} />
               <Route path=":id" element={<User />} />
               <Route path="/newuser" element={<NewUser />} />
               <Route path="products" element={<ProductList />} />
               <Route path=":productId" element={<Product />} />
               <Route path="/newproduct" element={<NewProduct />} />

             </Routes>
          </div>
        </BrowserRouter>
    )
}

export default App;