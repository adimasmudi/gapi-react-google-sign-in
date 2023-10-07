import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LoginButton from "./components/login";
// import LogoutButton from "./components/logout"
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId = process.env.CLIENT_ID;

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);

    console.log("gapi", gapi.credential);
  });

  return (
    <div className="App">
      <LoginButton />
      {/* <LogoutButton /> */}
    </div>
  );
}

export default App;
