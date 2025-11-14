import "./_card.scss";

interface CardProps {
    children: React.ReactNode;
    size?: "sm" | "md";
    variant?: "primary" | "secondary" | "normal";
    className?: string;
}

const Card = ({children, size = "md", variant = "normal", className = "",
}: CardProps) => {
return (
    <div className={`card card--${variant} card--${size} ${className}`}>
    {children}
    </div>
);
};

export default Card;