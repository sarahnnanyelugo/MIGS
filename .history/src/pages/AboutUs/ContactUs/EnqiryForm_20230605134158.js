import React from "react";

function EnqiryForm() {
  return (
    <div>
      <h6>Inquiry Form</h6>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Subject Title" />
        <textarea placeholder="" />
      </form>
    </div>
  );
}

export default EnqiryForm;
