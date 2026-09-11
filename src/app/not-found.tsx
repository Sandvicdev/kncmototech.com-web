export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        404
      </h2>
      <p style={{ color: "#888" }}>Sayfa bulunamadı.</p>
      <a
        href="/"
        style={{
          marginTop: "1.5rem",
          color: "#e63946",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Ana Sayfaya Dön
      </a>
    </main>
  );
}
