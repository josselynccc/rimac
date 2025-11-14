import Card from "@/components/ui/Card/Card";
import "./_plansCardSecondary.scss";

interface PlansCardSecondayProps {
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  variant?: "primary" | "secondary" | "normal";
  size?: "sm" | "md";
}

const PlansCardSecondary = ({
  title,
  subtitle,
  price,
  period = "al mes",
  features,
  buttonText = "Seleccionar Plan",
  variant = "normal",
  size = "md",
}: PlansCardSecondayProps) => {
  return (
    <Card variant={variant} size={size} className="plans-card">
      <div className="plans-card__header">
        <h3 className="plans-card__title">{title}</h3>
        {subtitle && <span className="plans-card__subtitle">{subtitle}</span>}
      </div>
      
      <div className="plans-card__price-section">
        <div className="plans-card__price">{price}</div>
        <div className="plans-card__period">{period}</div>
      </div>
      
      <ul className="plans-card__features">
        {features.map((feature, index) => (
          <li key={index} className="plans-card__feature">
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="plans-card__button">
        {buttonText}
      </button>
    </Card>
  );
};

export default PlansCardSecondary;