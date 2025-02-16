import AccTitle from "../../../UX/AccTitle";
import LoginForm from "./SignInItems/LogInForm";

const SignIn = () => {
  return (
    <div className="signin-container">
      <AccTitle>Customer Login</AccTitle>
      <div className="signin-actions">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
