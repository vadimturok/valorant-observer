import React, {FC} from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './layout.module.scss'
import Footer from "../Footer/Footer";

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
            <Footer/>
        </div>
    );
};

export default Layout;