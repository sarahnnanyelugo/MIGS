import { useState } from "react";
import { Link } from "react-router-dom";
import "./admission-form.scss";
function AdmissionForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [crecheValue, setCrecheValue] = useState("");
  const [primaryValue, setPrimaryValue] = useState("");
  const [secondaryValue, setSecondaryValue] = useState("");
  function SubmitForm() {
    window.alert("Admission successfully submitted !");
  }
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };
  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
    console.log(phoneValue);
  };
  const handleCrecheChange = (event) => {
    setCrecheValue(event.target.value);
    console.log(crecheValue);
  };
  const handlePrimaryChange = (event) => {
    setPrimaryValue(event.target.value);
    console.log(primaryValue);
  };
  const handleSecondaryChange = (event) => {
    setSecondaryValue(event.target.value);
    console.log(secondaryValue);
  };
  return (
    <div className="form-container">
      <form>
        <center>
          <h3>Online Admission Portal</h3>
          <p>
            Please fill the form and proceed to payment to get started. ( ₦
            10,000 per child in all classes )
          </p>
        </center>
        <h6>Parent’s full name*</h6>
        <input
          type="text"
          placeholder="Fill in your full name"
          required
          value={nameValue}
          onChange={handleNameChange}
        />
        <h6>Phone number*</h6>
        <input
          type="text"
          required
          value={phoneValue}
          onChange={handlePhoneChange}
        />{" "}
        <h6>Email address*</h6>
        <input
          type="text"
          required
          value={emailValue}
          onChange={handleEmailChange}
        />{" "}
        <h6>How many children do you want to register in Creche?</h6>
        <input
          type="text"
          value={crecheValue}
          onChange={handleCrecheChange}
        />{" "}
        <h6>How many children do you want to register in Primary?</h6>
        <input
          type="text"
          value={primaryValue}
          onChange={handlePrimaryChange}
        />{" "}
        <h6>How many children do you want to register in Secondary?</h6>
        <input
          type="text"
          value={secondaryValue}
          onChange={handleSecondaryChange}
        />
        <h5>Answer this security question to proceed</h5>
        <div className="flexy flexyM">
          <p>5 + 8 =</p>
          <input type="text" placeholder="Put your answer here" />
        </div>
        <center>
          <div className="col-md-6">
            <button className="app-btn" onClick={SubmitForm}>
              Start Registration
            </button>
            <p>
              Already signed in? <Link className="apply-link">Log in</Link>
            </p>
            <p>Yet to make payment?</p>{" "}
            <Link className="apply-link">Proceed here</Link>
          </div>
        </center>
      </form>
    </div>
  );
}

export default AdmissionForm;
