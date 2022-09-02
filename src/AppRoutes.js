import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './Components/Pages/Home/Home';
import AboutPage from './Components/Pages/About/About';
import ServicesPage from './Components/Pages/Services/Services'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />

    </Routes>
  )
}

export default AppRoutes