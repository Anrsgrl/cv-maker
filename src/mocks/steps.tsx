import { IStep } from "../types/stepper";
import { MdPerson, MdEditDocument } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
export const steps: IStep[] = [
  {
    title: "Personal",
    icon: <MdPerson size={24} />,
  },
  {
    title: "Experiences",
    icon: <MdEditDocument size={24} />,
  },
  {
    title: "Templates",
    icon: <CgTemplate size={24} />,
  },
];
