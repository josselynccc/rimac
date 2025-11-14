import { usePlansStore } from "@/core/store/usePlansStore"
import { useEffect } from "react";
import PlanCardSecondary from "../atom/PlanCardSeconday/PlanCardSecondary";
import './_plansCardsSecondary.scss'
import type { Plan } from "../../types/Plan";
import { useNavigate } from "react-router-dom";
const PlansCardsSecondary = ()=>{
    const { plans, loading, error, getPlans, selectPlan } = usePlansStore();
    const navigate = useNavigate();
    useEffect(()=>{
        try {
            getPlans();
        } catch (error) {
            console.log(error)
        }
    },[getPlans])

    const handleSelectPlan = (plan: Plan) => {
        selectPlan(plan);
        console.log('Plan seleccionado:', plan);
        navigate('/summary')
    };

    if (loading) {
        return (
            <p>Cargando planes...</p>
        );
    }
    if (error) {
        return (
            <p>Error Cargando planes...</p>
        );
    }
    return(
        <div className="plans-cards">
            {plans.map((plan, index) => (
                <div key={plan.name} className="plan-card-item">
                    <PlanCardSecondary
                        key={plan.name}
                        title={plan.name}
                        price={`S/ ${plan.price}`}
                        period="al mes"
                        descriptions={plan.description}
                        buttonText="Seleccionar Plan"
                        variant={index === 0 ? "primary" : "normal"}
                        size="md"
                        span={index === 1}
                        onClick={() => handleSelectPlan(plan)}
                    />
                </div>
                ))}
        </div>
    )
}

export default PlansCardsSecondary