import "../../css/customerauthcss/customersignin.css";

const CustomerSignInComponent = ({ onToggle }) => {
  return (
    <div className="customer-sign-in-component flex-col">
      <div className="csc-heading flex">
        <h1>SIGN IN</h1>
      </div>
      <div className="csc-inputs flex-col">
        <div className="csc-input-div flex-col-left">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="csc-input-div flex-col-left">
          <label>Password</label>
          <input type="email" placeholder="Enter Password" />
        </div>
      </div>
      <a className="forgot-password flex">forgot Password ?</a>
      <div className="csc-buttons flex">
        <button>Sign In</button>
      </div>
      <span className="register-section">
        Dont have an account ?{" "}
        <span className="register-action" onClick={onToggle}>
          Register
        </span>
      </span>
    </div>
  );
};

export default CustomerSignInComponent;
