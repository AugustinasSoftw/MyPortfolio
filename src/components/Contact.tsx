import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_7lupm25";
    const templateID = "template_yujro8d";
    const publicKey = "vTwU-HrZqoPxUj0K6";

    const emailParams = {
      title: "New Contact Form Submission",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, emailParams, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setSubmitted(true);
        setError("");

        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.error("Email send failed:", error);
        setError("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
