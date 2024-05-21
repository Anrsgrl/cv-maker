export interface IButton {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
  }