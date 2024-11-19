import { StrictMode } from 'react'
import MainLayout from '../templates/MainLayout';
import Containt from '../organisms/Containt';
const HomePage = () => (
    <StrictMode>
        <MainLayout>
            <Containt/>   
        </MainLayout>
    </StrictMode>
  );
  
  export default HomePage;
  