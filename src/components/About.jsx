function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#38bdf8" }}>
        About Me
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "auto",
          lineHeight: "1.6",
          color: "#cbd5e1",
          fontSize: "18px",
        }}
      >
        I am a passionate Full Stack Developer who loves building modern,
        responsive, and user-friendly web applications using the MERN stack
        (MongoDB, Express, React, Node.js). I enjoy solving real-world problems
        and continuously improving my skills in web development.
      </p>
    </section>
  );
}

export default About;