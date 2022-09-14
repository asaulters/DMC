import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './Layout.module.css';
import logo5 from '../../../assets/Layout/logoTransAlone.png'
import logo6 from '../../../assets/Layout/logoTrans1.png'

const Layout = ({children}) => {
    const [extend, setExtend] = useState(false);

    const LinkExtend = () =>{
        setExtend((curr) => !curr)
    };

    const BCDLink = () =>{
        window.open('bullcitydevelopment.com', '_blank', 'noopener,noreferrer')
    }


  return (
    <div className={classes.layoutWrapper}>
        <header className={classes.mainHeader}>
            <nav className={classes.mainNav}>
                <div className={classes.logoDiv}>
                    <img src={logo5} alt='MCC Logo' />
                </div>
                <div className={classes.links_full}>
                        <NavLink to='/' className={classes.navLinks_a}>Home</NavLink>
                        <NavLink to='/about' className={classes.navLinks_a}>About</NavLink>
                        <NavLink to='/services' className={classes.navLinks_a}>Services</NavLink>
                        <NavLink to='/work' className={classes.navLinks_a}>Portfolio</NavLink>
                        <NavLink to='/contact' className={classes.navLinks_a}>Contact</NavLink>
                    <button 
                        className={classes.burger} 
                        onClick={LinkExtend}
                        >&#8801;</button>
                </div>
                <div className={classes.extendedLinks}>
                    {extend && (
                        <div className={classes.extended_nav_links}>
                            <NavLink to='/' className={classes.navLinks_b}>Home</NavLink>
                            <NavLink to='/about' className={classes.navLinks_b}>About</NavLink>
                            <NavLink to='/services' className={classes.navLinks_b}>Services</NavLink>
                            <NavLink to='/work' className={classes.navLinks_b}>Portfolio</NavLink>
                            <NavLink to='/contact' className={classes.navLinks_b}>Contact</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>

        <main>
            <div>
                {children}
            </div>
        </main>
        <footer className={classes.mainFooter}>
            <div className={classes.footerLogoDiv}>
                <img src={logo6} alt='logo' />
            </div>
            <div className={classes.footer_links}>
                <NavLink to='/' className={classes.footer_a}>Home</NavLink>
                <NavLink to='/about' className={classes.footer_a}>About</NavLink>
                <NavLink to='/services' className={classes.footer_a}>Services</NavLink>
                <NavLink to='/portfolio' className={classes.footer_a}>Portfolio</NavLink>
                <NavLink to='/contact' className={classes.footer_a}>Contact</NavLink>
            </div>
            <div className={classes.footer_copy}>
                <p>&#169; MCC</p>
                <p>All Rights Reserved</p>
                <p>Designed and Developed by 
                <a onClick={() =>{
                    window.open('https://bullcitydevelopment.com')
                }}> Bull City Development</a>

                </p>
            </div>

        </footer>
            
    </div>
  )
};

export default Layout