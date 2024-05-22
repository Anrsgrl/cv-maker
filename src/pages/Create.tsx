// Create.tsx
import React from "react";
import Stepper from "../components/Stepper";
import { steps } from "../mocks/steps";

const Create: React.FC = () => {
  return (
    <div>
      <div className="p-8">
        <Stepper steps={steps} />
      </div>
    </div>
  );
};

export default Create;
