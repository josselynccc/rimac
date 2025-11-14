import * as z from "zod";

export const insuranceSchema = z.object({
  documentType: z.enum(["DNI", "CE"], {
    message: "Selecciona un tipo de documento válido"
  }),
  documentNumber: z
    .string()
    .min(1, "El número de documento es obligatorio")
    .regex(/^[0-9]+$/, "El número de documento solo debe contener números"),
  cellphone: z
    .string()
    .min(1, "El número de celular es obligatorio")
    .regex(/^[0-9]{9}$/, "El celular debe tener 9 dígitos"),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la Política de Privacidad"
  }),
  acceptCommercial: z.boolean(),
});

export type InsuranceFormData = z.infer<typeof insuranceSchema>;
