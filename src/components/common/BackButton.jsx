import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional icon lib

const BackButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      style={styles.button}
      aria-label="Go back"
    >
      <ArrowLeft size={22} />
    </button>
  );
};

const styles = {
  button: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "#2c2c2c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px",
    cursor: "pointer",
  },
};

export default BackButton;
