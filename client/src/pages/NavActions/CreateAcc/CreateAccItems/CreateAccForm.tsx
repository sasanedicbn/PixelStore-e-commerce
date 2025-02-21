import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import FormLayout from "../../../../components/Forms/FormLayout";
import GenericForm from "../../../../components/Forms/GenericForm";
import { RegisterUser } from "../../../../API/RegisterUser";

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

  const mutation = useMutation(RegisterUser, {
    onSuccess: (data) => {
      console.log("User registered successfully:", data);
      // Ovdje možete preusmjeriti korisnika ili prikazati poruku o uspjehu
    },
    onError: (error) => {
      console.error("Error registering user:", error);
      // Ovdje možete prikazati poruku o greški
    },
  });

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <FormLayout>
      <GenericForm
        schema={createAccountSchema}
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText={"Create Account"}
        btnType="submitSignin"
        isLoading={mutation.isLoading}
      />
    </FormLayout>
  );
};

export default CreateAccForm;
