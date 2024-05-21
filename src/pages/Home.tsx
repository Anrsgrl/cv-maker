import React from "react";
import Cloud from "../assets/cloud.svg";
import Logo from "../assets/3d.png";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { tw } from "twind";
import { clouds } from "../mocks/clouds";

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {clouds.map((cloud, index) => (
        <img
          key={index}
          src={Cloud}
          alt="Cloud"
          className={tw(
            "absolute opacity-70",
            cloud.top ? `top-${cloud.top}` : "",
            cloud.bottom ? `bottom-${cloud.bottom}` : "",
            cloud.left ? `left-${cloud.left}` : "",
            cloud.right ? `right-${cloud.right}` : "",
            `w-${cloud.width}`
          )}
        />
      ))}
      <div className="text-center z-10">
        <div className="text-4xl text-sky-600 mb-4">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className="text-4xl md:text-5xl text-black mb-2">
          Create Your Resume
        </h1>
        <p className="text-lg text-black mb-6">
          Easily build your professional resume in minutes.
        </p>
        <Button onClick={() => navigate("/create")}>Get Started</Button>
      </div>
    </div>
  );
};

export default App;
