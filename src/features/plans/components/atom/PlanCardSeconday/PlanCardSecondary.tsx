import Card from "@/components/ui/Card/Card";
import './_planCardSecondary.scss'
import Button from "@/components/ui/Button/Button";

interface PlanCardSecondayProps {
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  descriptions: string[];
  buttonText?: string;
  variant?: "primary" | "secondary" | "normal";
  size?: "sm" | "md";
  span?: boolean,
  icon?: React.ComponentType,
  onClick?: () => void;
}

const PlanCardSecondary = ({
  title,
  subtitle,
  price,
  period = "al mes",
  descriptions,
  buttonText = "Seleccionar Plan",
  variant = "normal",
  size = "md",
  span = true,
  icon: IconComponent,
  onClick 
}: PlanCardSecondayProps) => {
  return (
    <Card variant={variant} size={size} className="plan-card">
      <div className="plan-card__header">
        {span && <span>Plan Recomendado</span>}
        <div className="plan-card__sub-header">
          <h3 className="plan-card__title">{title}</h3>
          {IconComponent && <IconComponent/>}
        </div>
        {subtitle && <span className="plan-card__subtitle">{subtitle}</span>}
      </div>
      
      <div className="plan-card__price-section">
        <div className="plan-card__price">{price}</div>
        <div className="plan-card__period">{period}</div>
      </div>
      
      <ul className="plan-card__descriptions">
        {descriptions.map((description, index) => (
          <li key={index} className="plan-card__description">
            {description}
          </li>
        ))}
      </ul>
      
      <Button onClick={onClick} type="button" variant="secondary" size="sm" font="bold">
        {buttonText}
      </Button>
    </Card>
  );
};

export default PlanCardSecondary;