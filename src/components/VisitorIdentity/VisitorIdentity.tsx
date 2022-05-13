import { Visitor } from "../../types/visitor.types";
import styles from "./VisitorIdentity.module.css";

interface VisitorIdentityProps {
  visitor: Visitor;
  onVisitorNameClick?: (visitor: Visitor) => void;
}

const VisitorIdentity = ({
  visitor,
  onVisitorNameClick,
}: VisitorIdentityProps) => {
  return (
    <div className={styles.visitorIdentityContainer}>
      <img
        src={visitor.avatar}
        alt={`${visitor.first_name}'s Avatar`}
        className={styles.visitorAvatar}
      />
      <div>
        <p
          className={styles.visitorName}
          onClick={
            onVisitorNameClick ? () => onVisitorNameClick(visitor) : undefined
          }>
          {visitor.first_name} {visitor.last_name}
        </p>
        <p className={styles.visitorUsername}>
          @{visitor.first_name + visitor.last_name}
        </p>
      </div>
    </div>
  );
};

export default VisitorIdentity;
