import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  FormWrap,
  //Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  ReCAPTCHADiv,
} from "./ContactUsElements";

// type FormState = {
//   name: string,
//   email: string,
//   message: string,
// };

const ContactUs = () => {
  const formId = "0QhYPmgR";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  //const recaptchaKey = "6LdqR3UfAAAAAKLUnhuVquEC5f74if9kkZpUA_V2"; local
  const recaptchaKey = "6LfxV3UfAAAAAF9wrKFD_wCWOkrBlk3fGBTreKha";
  const recaptchaRef = useRef();

  const [submitting, setSubmitting] = useState(false);

  const serviceMessage = {
    class: "",
    text: "",
  };

  const [message, setMessage] = useState(serviceMessage);
  const [recaptchaToken, setRecaptchaToken] = useState();

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "ha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-green-red",
        text: "Sorry, there was a problem.  Please try again.",
      });
    }
  };

  // eslint-disable-next-line no-restricted-globals
  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id;
    const updateFormState = { ...formState };
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };
  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/">BWM</Icon> */}
          <FormContent>
            <Form>
              <FormH1>Contact Us</FormH1>
              {message && (
                <div className={`my-4 text-white w-full p-4 ${message.class}`}>
                  {message.text}
                </div>
              )}
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                onChange={updateFormControl}
                type="text"
                id="name"
                value={formState.name}
                required
              />

              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput
                onChange={updateFormControl}
                type="email"
                id="email"
                value={formState.email}
                required
              />

              <FormLabel htmlFor="message">Message</FormLabel>
              <FormInput
                onChange={updateFormControl}
                type="text"
                id="message"
                value={formState.message}
              />
              <ReCAPTCHADiv>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaKey}
                  onChange={updateRecaptchaToken}
                  id="recaptcha"
                />
              </ReCAPTCHADiv>
              <FormButton
                disabled={submitting}
                type="button"
                onClick={submitForm}
              >
                {submitting ? "Submitting..." : "Submit"}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactUs;
