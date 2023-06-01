import React from "react";

function AdmissionForm() {
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
        <input type="text" placeholder="Fill in your full name" />
        <h6>Phone number*</h6>
        <input type="text" /> <h6>Email address*</h6>
        <input type="text" />{" "}
        <h6>How many children do you want to register in Creche?</h6>
        <input type="text" />{" "}
        <h6>How many children do you want to register in Primary?</h6>
        <input type="text" />{" "}
        <h6>How many children do you want to register in Secondary?</h6>
        <input type="text" />
        <h5>Answer this security question to proceed</h5>
        <div className="flexy flexyM">
          <p>5 + 8 =</p>
          <input type="text" placeholder="Put your answer here" />
        </div>
        <center>
          <div className="col-md-6">
            <button className="app-btn">Start Registration</button>
            <p>
              Already signed in? <Link></Link>
            </p>
          </div>
        </center>
      </form>
    </div>
  );
}

export default AdmissionForm;
