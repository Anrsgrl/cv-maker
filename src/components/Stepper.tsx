// Stepper.tsx
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { StepperProps, IStep } from "../types/stepper";

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between mb-4">
        {steps.map((step: IStep, i) => {
          const isActive = currentStep === i + 1;
          const isComplete = i + 1 < currentStep || complete;

          return (
            <div
              key={i}
              className={`step-item flex flex-col items-center justify-center ${
                isActive ? "active text-sky-600" : "text-gray-500"
              } ${!isComplete ? "font-bold " : "complete"}`}
            >
              <div
                className={`step w-8 h-8 flex items-center justify-center rounded-full ${
                  isComplete && "complete"
                } ${isActive ? "active" : ""}`}
              >
                {isComplete ? <TiTick size={24} /> : step.icon}
              </div>
              <p className={`mt-2 ${isActive && "active"}`}>{step.title}</p>
            </div>
          );
        })}
      </div>
      {!complete && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => {
            if (currentStep === steps.length) {
              setComplete(true);
            } else {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
