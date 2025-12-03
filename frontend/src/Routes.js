import { 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import OrderListScreen from './screens/admin/OrderListScreen';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} >
        <Route index={true} path="/" element={<HomeScreen />} /> 
        <Route path='/page/:pageNumber' element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />   
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/product/:id" element={<ProductScreen />}  />  
        <Route path="/cart" element={<CartScreen />}  /> 
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/shop/page/:pageNumber" element={<ShopScreen />} /> 
        <Route path="/shop/page/:pageNumber/:keywordd" element={<ShopScreen />} /> 

        {/* Registered users */}
        <Route path='' element={<PrivateRoute />} >

          <Route path="/shipping" element={<ShippingScreen />}  />
          <Route path="/payment" element={<PaymentScreen />}  />
          <Route path="/placeorder" element={<PlaceOrderScreen />}  />
          <Route path='/order/:id' element={<OrderScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
         {/* Admin users */}
         <Route path='' element={<AdminRoute />} >
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
           <Route path='/admin/userlist' element={<UserListScreen />} />     
           <Route path='/admin/user/:id/edit' element={<UserEditScreen />} /> 
            <Route path='/admin/productlist' element={<ProductListScreen />} />
            <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
          </Route>
    </Route>
    )
  );

  export default  router