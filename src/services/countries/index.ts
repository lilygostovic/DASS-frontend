import { useEffect, useState } from "react";
import type { Country } from "../../pages/Dashboard/types";

// /api/countries

/* PARAMS:
 * id: number
    - gets specific country by id
    - ex. /api/countries?id=1
 * name: string
    - gets specific country by id
    - in Danish and with capitals)
    - ex. /api/countries?name=Iran
 * min_id: number
    - default set to 1
    - ex. /api/countries?min_id=10
 * max_id: number
    - default set to infinity
    - ex. /api/countries?max_id=100
 */

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
        console.error('Error fetching data:', error);
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
}

export { getCountries };
