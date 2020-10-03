import React from "react"

import "./style.scss"

const EbookModal = ({ handleClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modelHeader">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Get Your Free Ebook</h2>
        </div>
        <form
          accept-charset="UTF-8"
          action="https://kj305.infusionsoft.com/app/form/process/d4569868b4e023b095350545c81b97e1"
          class="infusion-form"
          id="inf_form_d4569868b4e023b095350545c81b97e1"
          method="POST"
        >
          <input
            name="inf_form_xid"
            type="hidden"
            value="d4569868b4e023b095350545c81b97e1"
          />
          <input
            name="inf_form_name"
            type="hidden"
            value="Web Form submitted"
          />
          <input
            name="infusionsoft_version"
            type="hidden"
            value="1.70.0.275359"
          />
          <div class="infusion-field">
            <label for="inf_field_FirstName">First Name *</label>
            <input
              class="infusion-field-input"
              id="inf_field_FirstName"
              name="inf_field_FirstName"
              type="text"
            />
          </div>
          <div class="infusion-field">
            <label for="inf_field_Email">Email *</label>
            <input
              class="infusion-field-input"
              id="inf_field_Email"
              name="inf_field_Email"
              type="text"
            />
          </div>
          <div class="infusion-field">
            <label for="inf_field_Phone1">Phone Number *</label>
            <input
              class="infusion-field-input"
              id="inf_field_Phone1"
              name="inf_field_Phone1"
              type="text"
            />
          </div>
          <div>
            <div>&nbsp;</div>
          </div>
          <div class="infusion-submit">
            <button
              class="infusion-recaptcha"
              id="recaptcha_d4569868b4e023b095350545c81b97e1"
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
          src="https://kj305.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.275359-hf-202009101703"
        ></script>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit"
          async="async"
          defer="defer"
        ></script>
        <script
          type="text/javascript"
          src="https://kj305.infusionsoft.com/app/timezone/timezoneInputJs?xid=d4569868b4e023b095350545c81b97e1"
        ></script>
      </div>
    </div>
  )
}

export default EbookModal
