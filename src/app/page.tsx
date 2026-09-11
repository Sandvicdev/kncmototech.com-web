export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Arka plan dekoratif kırmızı daireler */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#e63946",
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          backgroundColor: "#e63946",
          opacity: 0.08,
        }}
      />

      {/* Üst küçük etiket */}
      <span
        style={{
          display: "inline-block",
          padding: "0.4rem 1rem",
          backgroundColor: "#fdecee",
          color: "#e63946",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          borderRadius: "999px",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Coming Soon
      </span>

      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          color: "#1a1a1a",
          position: "relative",
          zIndex: 1,
        }}
      >
        KNC <span style={{ color: "#e63946" }}>Mototech</span>
      </h1>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "linear-gradient(90deg, #e63946, #ff6b6b)",
          borderRadius: "2px",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      />

      <p
        style={{
          fontSize: "1.25rem",
          color: "#4a4a4a",
          marginBottom: "0.75rem",
          maxWidth: "500px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Sitemiz yakında açılıyor.
      </p>

      <p
        style={{
          fontSize: "0.95rem",
          color: "#888",
          maxWidth: "400px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Bizi takip etmeye devam edin.
      </p>

      {/* WhatsApp iletişim */}
      <a
        href="https://wa.me/905342368272?text=Merhaba%2C%20KNCMotoTech%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.85rem 2rem",
          backgroundColor: "#25D366",
          color: "#ffffff",
          fontSize: "0.95rem",
          fontWeight: 600,
          textDecoration: "none",
          borderRadius: "8px",
          transition: "all 0.2s ease",
          boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        Bize Ulaşın
      </a>

      {/* Alt bilgi */}
      <p
        style={{
          position: "absolute",
          bottom: "1.5rem",
          fontSize: "0.8rem",
          color: "#aaa",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} KNC Mototech
      </p>
    </main>
  );
}