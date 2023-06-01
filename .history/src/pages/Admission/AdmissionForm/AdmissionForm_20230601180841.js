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
        <h6>How many children do you want to register in Creche?</h6>
        <input type="text" />
      </form>
    </div>
  );
}

export default AdmissionForm;
