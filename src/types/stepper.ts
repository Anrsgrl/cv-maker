import { ReactElement } from "react";

export interface StepperProps {
    steps: IStep[];
}

export interface IStep {
    title: string;
    icon: ReactElement;
}