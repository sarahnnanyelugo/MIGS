import React from "react";

export const EnqiryForm = () => {
  return (
    <div>
      <h6>Inquiry Form</h6>
      <form className="enquiry-form">
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Subject Title" />
        <textarea placeholder="Enter your message" row={6} />
      </form>
    </div>
  );
};
