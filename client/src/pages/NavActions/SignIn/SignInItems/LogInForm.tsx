const LoginForm = () => {
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
        <form
          className="form form-login"
          action="https://circuitcity.com/customer/account/loginPost/"
          method="post"
          id="login-form"
          noValidate
        >
          <input name="form_key" type="hidden" value="VrQrX1lcaeDcI216" />
          <div className="field note">
            If you have an account, sign in with your email address.
          </div>
          <div className="field email required">
            <label className="label" htmlFor="email">
              <span>Email</span>
            </label>
            <div className="control">
              <input
                name="login[username]"
                autoComplete="off"
                id="email"
                type="email"
                className="input-text line-height-xl"
                title="Email"
                required
              />
            </div>
          </div>
          <div className="field password required">
            <label htmlFor="pass" className="label">
              <span>Password</span>
            </label>
            <div className="control">
              <input
                name="login[password]"
                type="password"
                autoComplete="off"
                className="input-text line-height-xl"
                id="pass"
                title="Password"
                required
              />
            </div>
          </div>
          <div className="field">
            <a
              className="action remind"
              href="https://circuitcity.com/customer/account/forgotpassword/"
            >
              <span>Forgot Your Password?</span>
            </a>
          </div>
          <div className="actions-toolbar">
            <button type="submit" className="btn-v-dark">
              <span>Sign In</span>
            </button>
            <button type="submit" className="btn-v-dark">
              <span>Create an Account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
