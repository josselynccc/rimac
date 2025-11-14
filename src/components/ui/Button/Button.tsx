import "./_button.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    size?: "sm" | "md";
    font?: "normal" | "bold" | "semibold";
}

const Button = ({ children, onClick, type = "button", variant = "primary", size = "sm", font = "normal" }: ButtonProps) => {
  return (
    <button className={`btn btn--${variant} btn--${size} btn--${font}`} onClick={onClick} type={type}>
        {children}
    </button>
  );
};

export default Button;