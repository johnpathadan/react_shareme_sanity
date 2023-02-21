import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; //just the google logo
import shareVideo from "../assets/share.mp4";
import Logo from "../assets/logowhite.png";

function Login() {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoplay
          className="w-full h-full object-cover"
        />
      </div>
      {/* below div to cover the above div */}
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={Logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2xl">
          {/* need to get clientid from google authentication */}
          <GoogleLogin
            clientId=""
            render={(renderProps) => (
              <button type="button" className="bg-mainColor">
                <FcGoogle className="mr-4" />
                Sign in with Google
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
