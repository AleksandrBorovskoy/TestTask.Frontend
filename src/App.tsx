import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {

    const [userName, setUsername] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://localhost:5171/api/users/getUser", {
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });

                const content = await response.json();
                setUsername(content.username);
                setName(content.name);
                setSurname(content.surname);
                setBirthdate(content.birthdate);
                setAddress(content.address);
            }
        )();
    });

  return (
      <div className="App">
          <BrowserRouter>
              <Nav name={userName} setName={setUsername} />
              <main className="form-signin w-100 m-auto">
              
                  <Routes>
                      <Route path="/" Component={() => <Home username={userName} name={name} surname={surname} birthdate={birthdate}
                          address={address} />} />
                      <Route path="/login" Component={() => <Login setName={setUsername} />} />
                      <Route path="/register" Component={Register} />
                  </Routes>
              
              </main>
          </BrowserRouter>
      </div>
  );
}

export default App;
