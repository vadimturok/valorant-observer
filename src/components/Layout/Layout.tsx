import React, {FC} from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './layout.module.scss'

interface LayoutProps{
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Navbar/>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    );
};

export default Layout;