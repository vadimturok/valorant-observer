import React, {useEffect} from 'react';
import AppRouter from "./components/Routes/AppRouter";
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({disable: window.innerWidth <= 800})
        AOS.refresh();
    }, [])
    return <AppRouter/>
};

export default App;