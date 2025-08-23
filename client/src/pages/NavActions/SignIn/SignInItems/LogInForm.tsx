import GenericForm from "../../../../components/Forms/GenericForm";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../../store/slices/apiSlice";
import Loader from "../../../../UX/Loader";
import ErrorMessage from "../../../../UX/ErrorMessage";
import { loginSchema } from "../../../../schemas/schemas";
import { loginFormFields } from "../../../../static/staticData";
import { useState } from "react";
import { setCurrentUser } from "../../../../store/slices/bestSellerReducer";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      const success = await loginUser(data).unwrap();
      console.log(success, "iz LogInForm-a");
      dispatch(setCurrentUser(success));
      if (success) navigate("/");
    } catch (error) {
      setErrorMessage(error.message || "An error occurred during login.");
    }
  };

  return (
    <div className="block-customer-login">
      <p className="block-title">Registered Customers</p>
      <p className="singin-title-description">
        If you have an account,{" "}
        <Link to="/createAccount">create an account</Link>
      </p>
      {isLoading && <Loader />}

      <GenericForm
        schema={loginSchema}
        fields={loginFormFields}
        onSubmit={handleSubmit}
        submitButtonText="Sign In"
        btnType="submitSignin"
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default LoginForm;
