import "../../css/customerauthcss/customerregister.css";

const CustomerRegisterComponent = ({ onToggle }) => {
  return (
    <div className="customer-register-component flex-col">
      <div className="crc-heading flex">
        <h1>REGISTER</h1>
      </div>
      <div className="crc-inputs flex-col">
        <div className="crc-input-div flex-col-left">
          <label>First Name</label>
          <input type="email" placeholder="First Name" />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Last Name</label>
          <input type="email" placeholder="Last Name" />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Password</label>
          <input type="email" placeholder="Enter Password" />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Confirm Password</label>
          <input type="email" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="crc-buttons flex">
        <button>Register</button>
      </div>
      <span className="crc-sign-section">
        I have an account <span className="crc-sign-in-action" onClick={onToggle}>Sign In</span>
      </span>
    </div>
  );
};

export default CustomerRegisterComponent;
