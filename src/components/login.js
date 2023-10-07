import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const clientId =
  "596152504608-uvc6bs9qvultlec9sn67tpbc4r656b8l.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login success! res: ", res.credential);
  };

  const onFailure = (res) => {
    console.log("Login failed! res :", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
