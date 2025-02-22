import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../../store/slices/apiSlice";
import Loader from "../../../../UX/Loader";
import ErrorMessage from "../../../../UX/ErrorMessage";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();
  const handleSubmit = async (data) => {
    try {
      const success = await loginUser(data).unwrap();
      if (success) navigate("/");
    } catch (error) {}
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
        fields={[
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ]}
        onSubmit={handleSubmit}
        submitButtonText="Sign In"
        btnType="submitSignin"
      />
      {isError && (
        <ErrorMessage>{"An error occurred during login."}</ErrorMessage>
      )}
    </div>
  );
};

export default LoginForm;
