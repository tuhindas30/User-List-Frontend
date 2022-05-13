import { forwardRef } from "react";
import Visitor from "./Visitor";
import { Visitor as IVisitor } from "../../types/visitor.types";
import styles from "./VisitorsList.module.css";

interface VisitorTableProps {
  visitors: IVisitor[];
  onModalOpen: (visitor: IVisitor) => void;
}

const VisitorTable = forwardRef<any, VisitorTableProps>(
  ({ visitors, onModalOpen }, ref) => {
    return (
      <table className={styles.visitorTable}>
        <thead>
          <tr>
            <th className={styles.tableRow}>Name</th>
            <th className={styles.tableRow}>Email</th>
            <th className={styles.tableRow}>Status</th>
            <th className={styles.tableRow}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => {
            if (visitors.length === index + 1) {
              return (
                <Visitor
                  key={visitor.id}
                  ref={ref}
                  visitor={visitor}
                  onModalOpen={(visitor) => onModalOpen(visitor)}
                />
              );
            }
            return (
              <Visitor
                key={visitor.id}
                visitor={visitor}
                onModalOpen={(visitor) => onModalOpen(visitor)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
);

export default VisitorTable;
