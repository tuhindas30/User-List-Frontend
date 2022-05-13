import { Visitor } from "../../types/visitor.types";
import VisitorIdentity from "../VisitorIdentity";
import VisitorStatus from "../VisitorStatus";
import styles from "./Modal.module.css";

interface ModalProps {
  visitor: Visitor;
  onBackdropClick: () => void;
}

const Modal = ({ visitor, onBackdropClick }: ModalProps) => {
  return (
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalHeading}>Contact Details</h2>
        <div className={styles.modalHeader}>
          <VisitorIdentity visitor={visitor} />
          <VisitorStatus visitorId={visitor.id} />
        </div>
        <p className={styles.modalBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum
          recusandae minima harum nam repudiandae numquam, sequi a consectetur
          corporis ducimus laudantium unde fugit. Aspernatur debitis iusto est
          exercitationem. Modi!
        </p>
        <div className={styles.modalFooter}>
          <p className={styles.modalFooterText}>More Contact Details</p>
          <div className={styles.modalFooterBtnContainer}>
            <button className={`${styles.modalFooterBtn} ${styles.emailBtn}`}>
              Email
            </button>
            <button className={styles.modalFooterBtn}>Phone</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
