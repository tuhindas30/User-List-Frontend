import { useRef } from "react";

interface UseInfiniteScrollProps {
  loading: boolean;
  root: HTMLElement | null;
  callback: IntersectionObserverCallback;
}

const useInfiniteScroll = ({
  loading,
  root,
  callback,
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver>();
  const observerOptions: IntersectionObserverInit = {
    root,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const nodeRef = (node: HTMLElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(callback, observerOptions);
    if (node) observer.current.observe(node);
  };
  return nodeRef;
};

export default useInfiniteScroll;
