import { z } from "zod";
import FormLayout from "../../../../components/Forms/FormLayout";
import GenericForm from "../../../../components/Forms/GenericForm";

const CreateAccForm = () => {
  const createAccountSchema = z
    .object({
      name: z.string().min(2, "You need add full name"),
      country: z.string().min(2, "You need add your country"),
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

  const fields = [
    { name: "name", label: "Full name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "country", label: "Country", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  const handleSubmit = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <FormLayout>
      <GenericForm
        schema={createAccountSchema}
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText={"Create Account"}
        btnType="submitSignin"
      />
    </FormLayout>
  );
};

export default CreateAccForm;
