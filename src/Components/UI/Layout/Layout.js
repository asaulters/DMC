import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './Layout.module.css'

const Layout = ({children}) => {
    const [extend, setExtend] = useState(false);

    const LinkExtend = () =>{
        setExtend((curr) => !curr)
    }


  return (
    <div className={classes.layoutWrapper}>
        <header className={classes.mainHeader}>
            <nav className={classes.mainNav}>
                <div className={classes.logoDiv}>
                    <h2>DMC</h2>
                </div>
                <div className={classes.links_full}>
                        <NavLink to='/' className={classes.navLinks_a}>Home</NavLink>
                        <NavLink to='/about' className={classes.navLinks_a}>About</NavLink>
                        <NavLink to='/services' className={classes.navLinks_a}>Services</NavLink>
                        <NavLink to='/' className={classes.navLinks_a}>Our Work</NavLink>
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
                            <NavLink to='/' className={classes.navLinks_b}>About</NavLink>
                            <NavLink to='/' className={classes.navLinks_b}>Services</NavLink>
                            <NavLink to='/' className={classes.navLinks_b}>Portfolio</NavLink>
                            <NavLink to='/' className={classes.navLinks_b}>Contact</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer className={classes.mainFooter}>
            <div className={classes.footerLogoDiv}>
                <h2>DMC</h2>
            </div>
            <div className={classes.footer_links}>
                <NavLink to='/' className={classes.footer_a}>Home</NavLink>
                <NavLink to='/' className={classes.footer_a}>About</NavLink>
                <NavLink to='/' className={classes.footer_a}>Services</NavLink>
                <NavLink to='/' className={classes.footer_a}>Portfolio</NavLink>
                <NavLink to='/' className={classes.footer_a}>Contact</NavLink>
            </div>
            <div className={classes.footer_copy}>
                <p>&#169; DMC</p>
                <p>All Rights Reserved</p>
                <p>Designed and Developed by Bull City Development</p>
            </div>

        </footer>
            
    </div>
  )
}

export default Layout