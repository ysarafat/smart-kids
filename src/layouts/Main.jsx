import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Notice from '../components/Notice/Notice';
import { useAuthCheck } from '../hooks/useAuthCheck';

function Main() {
    const checkedAuth = useAuthCheck();
    return !checkedAuth ? (
        <div>Checking Auth...</div>
    ) : (
        <>
            <Notice />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Main;
