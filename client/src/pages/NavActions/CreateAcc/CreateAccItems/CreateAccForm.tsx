import { z } from "zod";
import FormLayout from "../../../../components/Forms/FormLayout";
import GenericForm from "../../../../components/Forms/GenericForm";
import { useRegisterUserMutation } from "../../../../store/slices/apiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../UX/Loader";

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

  const [addUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const fields = [
    { name: "name", label: "Full name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "country", label: "Country", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  const handleSubmit = async (data) => {
    try {
      await addUser(data).unwrap();
      // Ako je registracija uspešna, preusmeri korisnika na drugu stranicu
      navigate("/login"); // Promenite "/login" na željenu rutu
    } catch (error) {
      setErrorMessage(
        error.data?.message || "An error occurred during registration."
      );
    }
  };

  return (
    <FormLayout>
      {isLoading && <Loader />}
      {isError && <p style={{ color: "red" }}>{errorMessage}</p>}
      {isSuccess && <p style={{ color: "green" }}>Registration successful!</p>}
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
