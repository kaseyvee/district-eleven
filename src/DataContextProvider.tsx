"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getContentfulData } from "./api/getContentfulData";

const DataContext = createContext({});

export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const contentfulData: any = await getContentfulData();
        setData(contentfulData);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data ? { data } : {}}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext);