import React from "react";
import "./_input.scss"

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder?: string;
  type?: "checkbox" | "number"| "text" | "password" | "email";
  size?: "sm" | "md";
  variant?: "normal"| "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "normal", placeholder, type = "text", size = "sm", ...rest }, ref) => {
    if (type === "checkbox") {
      return (
        <input
          ref={ref}
          type="checkbox"
          className="input-checkbox-only"
          {...rest}
        />
      );
    }

    return (
      <div className={`input-container input-container--${size}`}>
        <input
          ref={ref}
          className={`input input--${variant} input--${size}`}
          type="text"
          placeholder=" "
          inputMode={type === "number" ? "numeric" : undefined}
          pattern={type === "number" ? "[0-9]*" : undefined}
          {...rest}
        />
        <label className="input-label">{placeholder}</label>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;