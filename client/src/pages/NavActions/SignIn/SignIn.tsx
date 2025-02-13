import LoginForm from "./SignInItems/LogInForm";
import LogInSocial from "./SignInItems/LogInSocial";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Customer Login</h2>
      <div className="signin-actions">
        <LogInSocial />
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
