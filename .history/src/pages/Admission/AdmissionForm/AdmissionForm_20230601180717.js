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
        <h6></h6>
      </form>
    </div>
  );
}

export default AdmissionForm;
