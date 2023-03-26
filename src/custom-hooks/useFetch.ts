import { useState, useEffect } from "react";
import IQuote from "../models/todo";
import ICatFact from "../models/cat_fact";
import axios from "axios";


const useFetch = (url: string) => {
    const [data, setData] = useState(new Array<IQuote>());

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;


export const useGetCatFacts = (url: string): any => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [url]);

  return [data];
};


export const useAxiosGet = (url: string): any => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
  }, [url]);

  return [data];
};

