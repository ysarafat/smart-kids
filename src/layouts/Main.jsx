import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Notice from '../components/Notice/Notice';
import Footer from '../components/footer/Footer';

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
