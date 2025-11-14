import Card from '@/components/ui/Card/Card';
import { usePersonalExtraDataStore } from '@/core/store/usePersonalExtraDataStore';
import { useEffect } from 'react';
import { StepBack, Users } from 'lucide-react';
import { usePersonalDataStore } from '@/core/store/usePersonalDataStore';
import { usePlansStore } from '@/core/store/usePlansStore';
import './scss/summary.scss';
import { useNavigate } from 'react-router-dom';
const SummaryPage = ()=>{
    const {personalExtraData, getPeronalExtraData} = usePersonalExtraDataStore();
    const {personalData} = usePersonalDataStore();
    const {selectedPlan} = usePlansStore();
    const navigate = useNavigate();
    useEffect(()=>{
        try {
            getPeronalExtraData()
        } catch (error) {
            console.log(error)
        }
    }, [getPeronalExtraData])
    return(
        <div className='summary-page'>
            <div className='summary-page__back' onClick={() => navigate('/plans')}>
                <StepBack className='summary-page__icon-back'/><span>Volver</span>
            </div>
            <Card variant="normal" size="sm" className="summary-card">
                <div className="summary-card__header">
                    <h1>PRECIOS CALCULADOS PARA:</h1>
                    <div className="summary-card__user">
                        <Users />
                        {<h1>{personalExtraData?.name}</h1>}
                    </div>
                </div>
                
                <div className="summary-card__content">
                    <h2 className="summary-card__content-title">Responsable del pago</h2>
                    <p>DNI: <span>{personalData?.documentNumber}</span></p>
                    <p>Celular: <span>{personalData?.cellphone}</span></p>
                    <h2 className="summary-card__content-title">Plan Elegido</h2>
                    <p>{selectedPlan?.name}</p>
                    <p>Costo de plan: <span>S/ {selectedPlan?.price}.00</span></p>
                </div>
            </Card>
        </div>
    )
}

export default SummaryPage