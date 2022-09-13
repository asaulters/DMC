import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './Components/Pages/Home/Home';
import AboutPage from './Components/Pages/About/About';
import ServicesPage from './Components/Pages/Services/Services';
import DesignPage from './Components/Pages/DesignPage/Design';
import ContactPage from './Components/Pages/Contact/Contact';
import WorkPage from './Components/Pages/Work/Work';

import ScrollToTop from './Components/ScrollToTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/design' element={<DesignPage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/contact' element={<ContactPage />} />
    </Routes>
    </>
  )
}

export default AppRoutes