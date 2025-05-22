export interface IButtonProps {
  type?: "button" | "submit";
  text?: string;
  textSelect?: "Все";
  icon?: React.ReactNode;
  iconOpened?: React.ReactNode;
  iconClosed?: React.ReactNode;
  color?: "primary" | "secondary" | "link";
  variant?: "theme" | "add" | "text_and_icon" | "delete" | "edit" | "none";
  isOpen?: boolean;
  options?: string[];
  handleSelect?: (option: string) => void;
  onClick?: () => void;
}