import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Header from './Header/Header';
import TopContainer from './TopContainer/TopContainer';
import KeysChord from './Keys&Chord/KeysChord';
import Instruments from './Instruments/Instruments';


const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
	  
      <Header/>
      <TopContainer/>
      <KeysChord/>
      <Instruments/>
      
      
	  
    </>
  );
};

export default Dashboard;
