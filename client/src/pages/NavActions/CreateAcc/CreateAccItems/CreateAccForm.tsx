import { z } from "zod";
import FormLayout from "../../../../components/Forms/FormLayout";
import GenericForm from "../../../../components/Forms/GenericForm";

const CreateAccForm = () => {
  // Definišemo šemu za validaciju
  const createAccountSchema = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  // Definišemo polja za formu
  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  // Funkcija za obradu podataka forme
  const handleSubmit = (data) => {
    console.log("Form data submitted:", data);
    // Ovdje možete dodati logiku za slanje podataka na server ili dalju obradu
  };

  return (
    <FormLayout>
      <GenericForm
        schema={createAccountSchema}
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText={"Create Account"}
      />
    </FormLayout>
  );
};

export default CreateAccForm;
{
  /* <GenericForm
schema={contactUsSchema}
fields={[
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "text" },
  { name: "textarea", label: "Message", type: "textarea" },
]}
onSubmit={handleSubmit}
submitButtonText={"Submit"}
btnType={"submitContact"}
/> */
}
