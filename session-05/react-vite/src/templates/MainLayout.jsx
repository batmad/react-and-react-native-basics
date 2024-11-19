/* eslint-disable react/prop-types */
import { StrictMode } from 'react'
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => (
    <StrictMode>
        <Header/>
            {children}
        <Footer/>
    </StrictMode>
);

export default MainLayout;