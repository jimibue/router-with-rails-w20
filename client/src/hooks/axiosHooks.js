import { useState, useEffect } from "react";
import Axios from "axios";

export const useAxiosOnMount = (url) => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, loading, error, setData];
  // return { loading, error, data };
};

// demo useing array- order matters names don't

// // demo useing object- order matters names don't
// const {error:az, data:bd, loading:cd } = useAxiosOnMount('/api/asdf')
