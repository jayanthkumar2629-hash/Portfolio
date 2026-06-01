import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://portfolio-backend-tp4d.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message ❌");
      }
    } catch (error) {
      console.log(error);
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "120px" }}
        />

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <p
          style={{
            marginTop: "15px",
            color: status.includes("success") ? "lightgreen" : "red",
          }}
        >
          {status}
        </p>
      )}
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "none",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#38bdf8",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
};

export default Contact;