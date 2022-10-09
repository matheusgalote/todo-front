import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  const request = async (url, options) => {
    const resp = await fetch(url, options);
    const json = await resp.json();

    setData(json);
    setStatus(resp.status);

    return { resp, json };
  };

  return {
    data,
    request,
    status
  };
};

export default useFetch;
