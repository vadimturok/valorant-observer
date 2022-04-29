import React, { useEffect } from "react";
import AppRouter from "./components/Routes/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import {useAppDispatch} from "./hooks";
import { fetchAgents } from "./redux/slices/ActionCreators";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
    AOS.init({ disable: window.innerWidth <= 800 });
    AOS.refresh();
  }, [dispatch]);


  return <AppRouter />;
};

export default App;
