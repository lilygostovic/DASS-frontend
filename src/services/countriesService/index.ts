import { useEffect, useState } from "react";

import type { Country } from "../../pages/Dashboard/types";

// This function performs the HTTP request that gets all the countries from the database.
const getCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  // HTTP request that gets a list of all country entries from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countries");
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        // eslint-disable-next-line
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Copy of list to avoid messing with "countries"
  const fetchedCountries = countries;

  // We sort the countries based on number of cases in decreasing order
  fetchedCountries.sort((a, b) => b.total - a.total);

  // Select the first 7 of the sorted countries as the default data
  const defaultCountries = fetchedCountries.slice(0, 7);

  // Return list of all countries, together with a list of default countries to display
  return [countries, defaultCountries];
};

export const countriesService = { getCountries };
