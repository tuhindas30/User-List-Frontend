import { useEffect, useState } from "react";
import { Visitor as IVisitor } from "../types/visitor.types";
import { getUsers } from "../services/visitors.service";

const useFetch = (page: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<IVisitor[]>([]);
  const [hasMoreData, setHasMoreData] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getUsers(page);
        setData((state) => [
          ...new Map(
            [...state, ...response.data].map((item) => [item["id"], item])
          ).values(),
        ]);
        setHasMoreData(response.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return { loading, error, data, hasMoreData };
};

export default useFetch;
