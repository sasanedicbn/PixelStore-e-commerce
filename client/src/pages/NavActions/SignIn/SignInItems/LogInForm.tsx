import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";
import Button from "../../../../UX/Button";

const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="block block-customer-login col-md-6 mx-auto mb-4 w-100">
      <div className="block-title">Registered Customers</div>
      <div
        className="block-content"
        aria-labelledby="block-customer-login-heading"
      >
        <div className="field note">
          If you have an account, sign in with your email address.
        </div>

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
        <Button type="submitSignin">Create an Account</Button>
      </div>
    </div>
  );
};

export default LoginForm;
