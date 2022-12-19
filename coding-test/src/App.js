import React from 'react';
import './App.css';
import Login from './admin/auth/login/login';
import {Routes, Route} from 'react-router-dom';
import ForgotPassword from './admin/auth/forgot-password/forgot-password';
import NextForgotPassword from './admin/auth/forgot-password/next-forgot-password';
import SetPassword from './admin/auth/forgot-password/set-password';
import Register from './admin/auth/register/register';
import NextRegister from './admin/auth/register/next-register';
import Home from './admin/home/home';
import Sales from './admin/sales/sales';
import Inventory from './admin/inventory/inventory';
import Purchase from './admin/purchase/purchase';
import UserManagement from './admin/user-management/user-management';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
      <Route exact path="/next-forgot-password" element={<NextForgotPassword/>}/>
      <Route exact path="/set-password" element={<SetPassword/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/next-register" element={<NextRegister/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/sales" element={<Sales/>}/>
      <Route exact path="/inventory" element={<Inventory/>}/>
      <Route exact path="/purchase" element={<Purchase/>}/>
      <Route exact path="/user-management" element={<UserManagement/>}/>
    </Routes>
  );
}

export default App;
