import BackButton from "./BackButton";

const PageWrapper = ({ children, showBack = false }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {showBack && <BackButton to="/citizen/dashboard" />}
      {children}
    </div>
  );
};

export default PageWrapper;

