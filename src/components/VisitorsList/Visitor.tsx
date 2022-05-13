import { forwardRef } from "react";
import VisitorIdentity from "../VisitorIdentity";
import VisitorStatus from "../VisitorStatus";
import { Visitor as IVisitor } from "../../types/visitor.types";
import { ReactComponent as VisibilityIcon } from "../../assets/icons/VisibilityIcon.svg";
import styles from "./VisitorsList.module.css";

interface StatusStyles {
  backgroundColor: string;
  color: string;
}

interface VisitorProps {
  visitor: IVisitor;
  visitorStatus?: string;
  visitorStatusStyles?: StatusStyles;
  onModalOpen: (visitor: IVisitor) => void;
}

const Visitor = forwardRef<HTMLTableRowElement, VisitorProps>(
  ({ visitor, onModalOpen }, ref) => {
    return (
      <tr key={visitor.id} ref={ref}>
        <td className={styles.tableRow}>
          <VisitorIdentity
            visitor={visitor}
            onVisitorNameClick={(visitor) => onModalOpen(visitor)}
          />
        </td>
        <td className={styles.tableRow}>{visitor.email}</td>
        <td className={styles.tableRow}>
          <VisitorStatus visitorId={visitor.id} />
        </td>
        <td className={styles.tableRow}>
          <VisibilityIcon className={styles.visibilityIcon} />
        </td>
      </tr>
    );
  }
);

export default Visitor;
