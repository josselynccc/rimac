import "./_input.scss"
interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  size?: "sm" | "md";
  variant?: "normal"| "left" | "right";
}

const Input = ({variant = "normal", value, onChange, placeholder, type = "text", size = "sm"}: InputProps) => {
  return (
    <div className={`input-container input-container--${size}`}>
        <input
            className={`input input--${variant} input--${size}`}
            value={value}
            onChange={onChange}
            type={type}
        />
        <label className="input-label">{placeholder}</label>
    </div>
  );
};

export default Input;