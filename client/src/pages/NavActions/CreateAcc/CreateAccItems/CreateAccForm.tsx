import FormLayout from "../../../../components/Forms/FormLayout";
import GenericForm from "../../../../components/Forms/GenericForm";
import { useRegisterUserMutation } from "../../../../store/slices/apiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../UX/Loader";
import ErrorMessage from "../../../../UX/ErrorMessage";
import { createAccountSchema } from "../../../../schemas/schemas";
import { createAccFormFields } from "../../../../static/staticData";

const CreateAccForm = () => {
  const [addUser, { isLoading, isError }] = useRegisterUserMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const user = await addUser(data).unwrap();
      if (user) navigate("/customer/signin");
    } catch (error) {
      setErrorMessage(
        error.data?.message || "An error occurred during registration."
      );
    }
  };

  return (
    <FormLayout>
      {isLoading && <Loader />}
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <GenericForm
        schema={createAccountSchema}
        fields={createAccFormFields}
        onSubmit={handleSubmit}
        submitButtonText={"Create Account"}
        btnType="submitSignin"
      />
    </FormLayout>
  );
};

export default CreateAccForm;
