function Hero() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
        Hi, I'm a Full Stack Developer 👋
      </h1>

      <p style={{ fontSize: "20px", color: "#94a3b8" }}>
        I build modern MERN stack applications
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#38bdf8",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View My Work
      </button>
    </div>
  );
}

export default Hero;