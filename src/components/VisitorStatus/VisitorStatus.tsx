import styles from "./VisitorStatus.module.css";

interface VisitorStatusProps {
  visitorId: number;
}

const VisitorStatus = ({ visitorId }: VisitorStatusProps) => {
  const getVisitorStatus = () => {
    if (visitorId % 2 === 0) {
      return "Active";
    }
    if (visitorId % 3 === 0) {
      return "Inactive";
    }
    if (visitorId % 5 === 0) {
      return "Removed";
    }
    return "Unknown";
  };

  const getVisitorStatusStyles = () => {
    if (visitorId % 2 === 0) {
      return {
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        color: "rgb(0, 128, 0)",
      };
    }
    if (visitorId % 3 === 0) {
      return {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: "rgb(0, 0, 0)",
      };
    }
    if (visitorId % 5 === 0) {
      return {
        backgroundColor: "rgba(251, 191, 36, 0.2)",
        color: "#f59e0b",
      };
    }
    return {
      backgroundColor: "#fff",
      color: "rgba(0, 0, 0, 0.5)",
    };
  };

  return (
    <p style={getVisitorStatusStyles()} className={styles.statusPill}>
      {getVisitorStatus()}
    </p>
  );
};

export default VisitorStatus;
