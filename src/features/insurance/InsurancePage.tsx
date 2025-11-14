import Button from "@/components/ui/Button/Button"
import Input from "@/components/ui/Input/Input"
import insurance__img from "@/assets/insurance__img.png"
import { useForm } from "react-hook-form";
import { insuranceSchema, type InsuranceFormData } from "./schema/insuranceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import './scss/insurance.scss'
import { useNavigate } from "react-router-dom";
const InsurancePage = ()=>{
    const navigate = useNavigate()
    const [isLoadingProfile, setIsLoadingProfile] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors},
        reset
    } = useForm<InsuranceFormData>({
        resolver: zodResolver(insuranceSchema),
        mode: "onChange"
    });

    const onSubmit = (formData: InsuranceFormData) => {
        setIsLoadingProfile(true)
        console.log(formData)
        reset({
            documentType: "DNI",
            documentNumber: "",
            cellphone: "",
            acceptPrivacy: true,
            acceptCommercial: false,
        })
        setIsLoadingProfile(false)
        navigate('/plans')
    };
    return(
        <div className="insurance-page">
            <div className="insurance-page__image">
                <img src={insurance__img} alt="insurance__img" />
            </div>
            <div className="insurance-page__space"></div>
            <div className="insurance-page__content">
                <div className="insurance-page__text">
                    <div className="insurance-page__header-mobile">
                        <div className="insurance-page__text-content">
                            <span>Seguro Salud Flexible</span>
                            <h1 className="insurance-page__title">Creado para ti y tu familia</h1>
                        </div>
                        <img src={insurance__img} alt="insurance__img-mobile" />
                    </div>
                </div>
                <form className="insurance-page__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="insurance-page__row">
                        <select {...register("documentType")}>
                            <option value="DNI">DNI</option>
                            <option value="CE">CE</option>
                        </select>
                        <Input
                            {...register("documentNumber", {
                                setValueAs: (v) => v === "" ? "" : String(v)
                            })}
                            placeholder="Nro. de documento"
                            type="number"
                            size="md"
                            variant="left"
                        />
                    </div>
                    {errors.documentNumber && <span>{errors.documentNumber.message}</span>}
                    <Input
                        {...register("cellphone", {
                            setValueAs: (v) => v === "" ? "" : String(v)
                        })}
                        placeholder="Celular"
                        type="number"
                        size="md"
                        variant="normal"
                    />
                    {errors.cellphone && <span>{errors.cellphone.message}</span>}

                    <div className="insurance-page__policy">
                        <label>
                            <Input
                                type="checkbox"
                                {...register("acceptPrivacy")}
                            />
                            Acepto la Política de Privacidad
                        </label>
                        <label>
                            <Input
                                type="checkbox"
                                {...register("acceptCommercial")}
                            />
                            Acepto la Política Comunicaciones Comerciales
                        </label>
                    </div>
                    <span>Aplican Términos y Condiciones.</span>
                    <Button type="submit" variant="primary" size="md" font="bold">{isLoadingProfile? "Cargando" :"Cotiza aquí"}</Button>
                </form>
            </div>
        </div>
    )
}

export default InsurancePage