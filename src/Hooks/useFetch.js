import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  const request = async (url, options) => {
    const resp = await fetch(url, options);
    const json = await resp.json();

    setData(json);

    return { resp, json };
  };

  return {
    data,
    request,
  };
};

export default useFetch;
