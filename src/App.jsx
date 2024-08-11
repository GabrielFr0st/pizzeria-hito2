import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import RegisterPage from './components/registerpage';
import LoginPage from './components/loginpage';

const App = () => (
  <div>
    <Navbar />
    {/* <Home /> */}
    {/* <RegisterPage /> */}
    <LoginPage />
    <Footer />
  </div>
);

export default App;
