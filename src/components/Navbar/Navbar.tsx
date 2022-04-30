import React, {FC} from 'react';
import styles from './navbar.module.scss'
import {Link, useLocation} from "react-router-dom";

const Navbar: FC = () => {
    const location = useLocation()
    return (
        <div className={styles.wrapper}>
            <div className={styles.navbarList}>
                <Link to={'/'} className={'link'}>
                    <div className={`${styles.navbarItem} ${location.pathname === '/' && styles.active}`}>
                        Home
                    </div>
                </Link>
                <Link to={'patches'} className={'link'}>
                    <div className={`${styles.navbarItem} ${location.pathname === '/patches' && styles.active}`}>
                        Patches
                    </div>
                </Link>
                <Link to={'agents'} className={'link'}>
                    <div className={`${styles.navbarItem} ${location.pathname === '/agents' && styles.active}`}>
                        Agents
                    </div>
                </Link>
                <Link to={'maps'} className={'link'}>
                    <div className={`${styles.navbarItem} ${location.pathname === '/maps' && styles.active}`}>
                        Maps
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default Navbar;