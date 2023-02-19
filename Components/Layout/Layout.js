import React from 'react';
import Background from '../Backgroud/Background';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar ></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;