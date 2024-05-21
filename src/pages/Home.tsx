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
      <div className="clouds">
        {clouds.map((cloud, index) => (
          <img
            key={index}
            src={Cloud}
            alt={"cloud" + "-" + (index + 1)}
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
      </div>
      <div className="text-center flex items-center justify-center flex-col z-10">
        <img src={Logo} alt="Logo" />
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
