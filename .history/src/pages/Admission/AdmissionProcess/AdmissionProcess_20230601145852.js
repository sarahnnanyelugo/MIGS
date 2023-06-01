import React, { useState } from "react";
import "./admission-process.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const AdmissionProcess = () => {
  return (
    <div className="faq-accordion-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>Entry Qualification and Eligibility</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              In M.I.S every Child’s welfare is paramount to us and we wish to
              maintain a balanced teacher: pupil ratio in our classrooms.
              Montessori International School no longer offers mid-stream
              admission for Nursery 2 to Primary 5 except when we have
              vacancies. Please visit our school administrative office for
              inquiries for admission into these classes.
            </p>
            <h6>Eligible Age ranges for Nursery and Primary</h6>
            <small>
              (If your child is not up to the desired age admission will not be
              granted)
            </small>
            <ol>
              <li>
                Early Years Foundation School (Pre-nursery and Creche): Child
                must be between 3months - 2 years and 5months.
                <div className="col-md-12">
                  <center>
                    <p>Admission into the EYFS is open for September 2023</p>
                    <Link>Apply now</Link>
                  </center>
                </div>
              </li>
              <li>
                Ladybird (Nursery 1): Child must be between 2 - 3 years by
                September. The admission Portal for Nursery one opens in
                September each year and closes in February of the next year.
              </li>
              <li>
                Bumble Bee (Nursery 2): Child must be between 3 - 4 years by
                September
              </li>
              <li>
                Honey Bee (Nursery 3): Child must be between 4 - 5 years by
                September
              </li>
              <li>
                Busy Bee (Primary 1): Child must be between 5 - 6 years by
                September
              </li>
              <li>Primary 2: Child must be between 6 - 7 years by September</li>
              <li>Primary 3: Child must be between 7 - 8 years by September</li>
              <li>Primary 4: Child must be between 8 - 9 years by September</li>
              <li>
                Primary 5: Child must be between 9 - 10 years by September
              </li>
              <li>Primary 6: Admission not opened</li>
              <small>
                * Kindly note that admission is not opened from Bumble Bee class
                to Primary 6 *
              </small>
              <h6>Requirements for admission into Junior Secondary</h6>
              <small>(Admission Portal is opened all year round)</small>

              <ol>
                <li>
                  Year 10:Student must be between 13 and 14 years by September.
                </li>
                <li>
                  Year 11: Student must be between 14 and 15 years by September.
                </li>
                <li>Year 12: Admission is not opened for this class</li>
              </ol>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>Registration process / Enrollment</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Getting your school enrolled is so easy. Click on signup to
              onboard your <br />
              school in seconds.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>How to use the admission portal</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is GDPR COMPLIANT. From day one, we built educare to help
              you manage your school efficiently. We
              <br /> do not share/sell your data. The educare software is
              optimize with end-to-end encription to ensure maximum <br />
              data security.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default AdmissionProcess;
