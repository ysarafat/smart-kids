import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Notice from '../components/Notice/Notice';

function Main() {
    return (
        <>
            <Notice />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Main;
