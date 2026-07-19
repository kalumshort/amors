// Drop-in credit tag. Import and place inside your site's footer.
export default function WebopiaTag() {
  return (
    <a
      href="https://webopia.co.uk/?solarclean.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="wbp-tag"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 22px 12px 16px",
        background: "#fff4ef",
        border: "3px solid #3b0764",
        borderRadius: 14,
        boxShadow: "3px 3px 0 #ec4899",
        textDecoration: "none",
        color: "#3b0764",
        fontFamily:
          '"Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1.1,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#6d28d9",
            marginBottom: 4,
          }}
        >
          DESIGNED &amp; BUILT BY
        </span>
        <span
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "#3b0764",
            letterSpacing: "-0.01em",
          }}
        >
          Webopia
        </span>
      </span>
      <style>{`
        .wbp-tag:hover,
        .wbp-tag:focus-visible {
          transform: translate(-1px, -1px);
          box-shadow: 10px 10px 0 #ec4899 !important;
          outline: none;
        }
      `}</style>
    </a>
  );
}
