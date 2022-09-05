import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './Components/Pages/Home/Home';
import AboutPage from './Components/Pages/About/About';
import ServicesPage from './Components/Pages/Services/Services';
import DesignPage from './Components/Pages/DesignPage/Design';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/design' element={<DesignPage />} />

    </Routes>
  )
}

export default AppRoutes