import FormLayout from "../../../components/Forms/FormLayout";
import AccTitle from "../../../UX/AccTitle";
import LoginForm from "./SignInItems/LogInForm";

const SignIn = () => {
  return (
    <div className="signin-container">
      <AccTitle>Customer Login</AccTitle>
      <FormLayout>
        <LoginForm />
      </FormLayout>
    </div>
  );
};

export default SignIn;
