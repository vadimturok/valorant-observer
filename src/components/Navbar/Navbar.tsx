import React, {FC, useState} from 'react';
import styles from './navbar.module.scss'
import {Link, useLocation} from "react-router-dom";

const Navbar: FC = () => {
    const location = useLocation()
    return (
        <div className={styles.wrapper}>
            <ul className={styles.navbarList}>
                <Link to={'/'} className={'link'}>
                    <li className={`${styles.navbarItem} ${location.pathname === '/' && styles.active}`}>
                        Home
                    </li>
                </Link>
                <Link to={'patches'} className={'link'}>
                    <li className={`${styles.navbarItem} ${location.pathname === '/patches' && styles.active}`}>
                        Patches
                    </li>
                </Link>
                <Link to={'agents'} className={'link'}>
                    <li className={`${styles.navbarItem} ${location.pathname === '/agents' && styles.active}`}>
                        Agents
                    </li>
                </Link>
                <Link to={'maps'} className={'link'}>
                    <li className={`${styles.navbarItem} ${location.pathname === '/maps' && styles.active}`}>
                        Maps
                    </li>
                </Link>

            </ul>

        </div>
    );
};

export default Navbar;