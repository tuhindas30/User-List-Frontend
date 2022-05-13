import { useRef, useState } from "react";
import VisitorTable from "./VisitorTable";
import Modal from "../Modal";
import useFetch from "../../hooks/useFetch";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { Visitor as IVisitor } from "../../types/visitor.types";
import styles from "./VisitorsList.module.css";

const VisitorsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IVisitor>();
  const rootElement = useRef<HTMLDivElement | null>(null);

  const { loading, error, data: visitors, hasMoreData } = useFetch(currentPage);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMoreData) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const lastElementRef = useInfiniteScroll({
    loading: loading,
    root: rootElement.current,
    callback: handleObserver,
  });

  const handleModalOpen = (visitor: IVisitor) => {
    setIsModalOpen(true);
    setModalData(visitor);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(undefined);
  };

  return (
    <section className={styles.section}>
      <div className={styles.listHeader}>
        <h1 className={styles.listHeading}>Visitors</h1>
        <button className={styles.listHeaderBtn}>Add Visitor</button>
      </div>
      <div ref={rootElement} className={styles.tableContainer}>
        {loading && <p className={styles.message}>Loading...</p>}
        {error ? (
          <p className={styles.message}>
            No data to show. Please try reloading
          </p>
        ) : (
          <VisitorTable
            visitors={visitors}
            onModalOpen={(visitor) => handleModalOpen(visitor)}
            ref={lastElementRef}
          />
        )}
      </div>
      {isModalOpen && modalData && (
        <Modal visitor={modalData} onBackdropClick={handleModalClose} />
      )}
    </section>
  );
};

export default VisitorsList;
