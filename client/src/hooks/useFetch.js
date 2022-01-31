import { useEffect } from "react";

export default function useFetch(url, setState) {
  return useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(data.bicycles));
  }, [url, setState]);
}
