export default function PageWrapper({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#eef2ff,#f8fafc)",
      padding: "30px"
    }}>
      {children}
    </div>
  );
}
