import "./contact.css";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import InputText from "../../components/InputText/InputText";
import { useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const formReducer = (formData, action) => {
  if (action.type === "SET_VALUE")
    return { ...formData, [action.name]: action.value };

  if (action.type === "SET_ERROR")
    return { ...formData, errors: { [action.field]: action.error } };

  if (action.type === "RESET_ERROR") return { ...formData, errors: {} };
};

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useReducer(formReducer, {
    name: "",
    message: "",
    email: "",
    errors: {},
  });

  const [submitButtonText, setSubmitButtonText] = useState("Submit");

  const formRef = useRef();

  console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
  console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
  console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

  function handleChange(e) {
    setFormData({
      type: "SET_VALUE",
      name: e.target.name,
      value: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const status = validate();

    if (!status) return;

    setSubmitButtonText("Submitting...");

    try {
      const res = await sendEmail();
      setSubmitButtonText("Submitted");
      console.log("Message has been send successfully: ", res);
    } catch (error) {
      setSubmitButtonText("Submit");
      console.log("Error while sending email", error);
    }
  }

  function validate() {
    // Reset the errors

    setFormData({
      type: "RESET_ERROR",
    });

    if (formData.name.trim() === "") {
      setFormData({
        type: "SET_ERROR",
        field: "name",
        error: "Name is required",
      });
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormData({
        type: "SET_ERROR",
        field: "email",
        error: "Invalid email",
      });
      return false;
    }

    if (formData.message.split(" ").length < 10) {
      setFormData({
        type: "SET_ERROR",
        field: "message",
        error: "Message must be 10 words long",
      });
      return false;
    }

    return true;
  }

  async function sendEmail() {
    return emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    });
  }

  return (
    <div className="form-container">
      <div className="left">
        <form onSubmit={handleSubmit} ref={formRef}>
          <InputText
            placeholder={"Enter your name"}
            name="name"
            onChange={handleChange}
            value={formData.name}
            error={formData.errors.name}
          />
          <InputText
            placeholder={"Enter your email"}
            name="email"
            onChange={handleChange}
            value={formData.email}
            error={formData.errors.email}
          />
          <InputText
            placeholder={"Enter your message"}
            name="message"
            onChange={handleChange}
            value={formData.message}
            error={formData.errors.message}
          />

          {submitButtonText != "Submitted" && (
            <button type="submit" className="submit-btn">
              {submitButtonText}
            </button>
          )}
          {submitButtonText === "Submitted" && <span>Submitted</span>}
        </form>
      </div>
      <div className="right">
        <div className="social-handles">
          <ul>
            <li>
              <div className="contact-card">
                <div className="icon phone">
                  <FaPhone />
                </div>
                <a className="phone-no" href="tel:6296181837">
                  +91 6296282837
                </a>
              </div>
            </li>
            <li>
              <div className="contact-card">
                <div className="icon email">
                  <MdEmail />
                </div>
                <a className="email-add" href="mailto:gorainanirban@gmail.com">
                  gorainanirban@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="contact-card">
                <div className="icon linkedin">
                  <FaLinkedin />
                </div>
                <a href="">Linkedin</a>
              </div>
            </li>
            <li>
              <div className="contact-card">
                <div className="icon instagram">
                  <FaSquareInstagram />
                </div>
                <a href="">Instagram</a>
              </div>
            </li>
            <li>
              <div className="contact-card">
                <div className="icon facebook">
                  <FaFacebookF />
                </div>
                <a href="">Facebook</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
