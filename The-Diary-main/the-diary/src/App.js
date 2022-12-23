import React,{useState, useEffect} from 'react';
import './App.css';
import {auth} from './firebase';
import LandingPage from './components/LandingPage';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
 
  //user from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isNewUser, setIsNewUser] = useState(JSON.parse(localStorage.getItem('isNewUser')));
  const storedValueAsNumber = Number(localStorage.getItem("count"))
  const [state, setState] = useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);

  useEffect(() => {
    localStorage.setItem("count", String(state))
  }, [state]);
  useEffect(() =>{
    localStorage.setItem("isNewUser", isNewUser)
  },[isNewUser]);


  const signOut = async () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        window.location.href = '/';
        setState(0);
        setUser(null);
    }).catch((e) => {console.log(e)})
}

  return (
    <div className="App">
      {
        state === 0 ? 
        <LandingPage setState={setState}/>
        :
        !user ? 
        <Login setIsNewUser={setIsNewUser} setState={setState} setUser={setUser} user={user}/>
        :
        <Home setIsNewUser={setIsNewUser} isNewUser={isNewUser} user={user} setUser={setUser} signOut={signOut}/>
      }
    </div>
  );
}

export default App;
