import React from "react"
import Modal from "react-bootstrap/Modal"

import "./style.scss"

const EbookModal = ({ displayModal, handleClose }) => {
  return (
    <Modal show={displayModal} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>SEGA Fitness Ebook</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          acceptCharset="UTF-8"
          action="https://kj305.infusionsoft.com/app/form/process/435b79da8bb459713b61183530c3cff4"
          className="infusion-form"
          id="inf_form_435b79da8bb459713b61183530c3cff4"
          method="POST"
        >
          <input
            name="inf_form_xid"
            type="hidden"
            value="435b79da8bb459713b61183530c3cff4"
          />
          <input
            name="inf_form_name"
            type="hidden"
            value="Web Form submitted"
          />
          <input
            name="infusionsoft_version"
            type="hidden"
            value="1.70.0.270527"
          />
          <div className="infusion-field">
            <label htmlFor="inf_field_FirstName">First Name *</label>
            <input
              required
              className="infusion-field-input"
              id="inf_field_FirstName"
              name="inf_field_FirstName"
              type="text"
            />
          </div>
          <div className="infusion-field">
            <label htmlFor="inf_field_Email">Email *</label>
            <input
              required
              className="infusion-field-input"
              id="inf_field_Email"
              name="inf_field_Email"
              type="text"
            />
          </div>
          <div className="infusion-field">
            <label htmlFor="inf_field_Phone1">Phone Number *</label>
            <input
              required
              className="infusion-field-input"
              id="inf_field_Phone1"
              name="inf_field_Phone1"
              type="text"
            />
          </div>
          <div className="infusion-submit">
            <button
              className="infusion-recaptcha"
              id="recaptcha_435b79da8bb459713b61183530c3cff4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <script
          type="text/javascript"
          src="https://kj305.infusionsoft.app/app/webTracking/getTrackingCode"
        ></script>
        <script
          type="text/javascript"
          src="https://kj305.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.270527-hf-202009010410"
        ></script>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit"
          async="async"
          defer="defer"
        ></script>
        <script
          type="text/javascript"
          src="https://kj305.infusionsoft.com/app/timezone/timezoneInputJs?xid=435b79da8bb459713b61183530c3cff4"
        ></script>
      </Modal.Body>
    </Modal>
  )
}

export default EbookModal
