import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";

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
      <div className="block-title">
        <strong id="block-customer-login-heading" role="heading" aria-level="2">
          Registered Customers
        </strong>
      </div>
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

        <div className="field">
          <a
            className="action remind"
            href="https://circuitcity.com/customer/account/forgotpassword/"
          >
            <span>Forgot Your Password?</span>
          </a>
        </div>

        <div className="actions-toolbar">
          <button type="button" className="create-acc-btn">
            <span>Create an Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
