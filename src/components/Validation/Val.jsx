import * as yup from "yup";

export const yupSchema = yup.object({
    name: yup.string().min(3,"name min 3").required("required"),  ///przerobić error
    surname: yup.string().min(3).required("surname min 3"),
    street: yup.string().min(5).required("street min 5"),
    code: yup.string().matches(/^[0-9]{2}-[0-9]{3}/, "Nie pasuje regex"),
    city: yup.string().min(3).required("city min 3"),
    region: yup.string().min(3,"min 3 letters"), 
    imageURL: yup.string().min(5).required("image"),
    // number: yup.string().includes("+11").required("DO +11"),
  });
  