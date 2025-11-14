import { usePersonalExtraDataStore } from "@/core/store/usePersonalExtraDataStore";
import PlansCardsSecondary from "./components/molecule/PlansCardsSecondary"
import './scss/_plans.scss'
import { useEffect } from "react";
import { StepBack } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PlansPage = ()=>{
    const {personalExtraData, getPeronalExtraData} = usePersonalExtraDataStore();
    const navigate = useNavigate();

    useEffect(()=>{
        try {
            getPeronalExtraData()
        } catch (error) {
            console.log(error)
        }
    }, [getPeronalExtraData])

    return(
        <>
        <div className="plans-page">
            <div className='plans-card__back' onClick={() => navigate('/insurance')}>
                <StepBack className='plans-card__back-item'/><span>Volver</span>
            </div>
            <div className="plans-card__user">
                {<h1>{personalExtraData?.name} ¿Para quién deseas cotizar?</h1>}
                <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
            </div>
        </div>
        <PlansCardsSecondary></PlansCardsSecondary>
        </>
    )
}

export default PlansPage