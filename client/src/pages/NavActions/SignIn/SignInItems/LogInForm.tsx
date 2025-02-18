import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";
import Button from "../../../../UX/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="block-customer-login">
      <p className="block-title">Registered Customers</p>
      <p className="singin-title-description">
        If you have an account,{" "}
        <Link to="/createAccount">create an account</Link>
      </p>
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
    </div>
  );
};

export default LoginForm;
