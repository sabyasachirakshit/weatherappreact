// import axios from 'axios';
// import React, {useEffect, useState} from 'react';

// function WeatherCondition() {

//     const [rainyCountries, setRainyCountries] = useState(null);
//     let array=[]
//     useEffect(() => {
//         countries.map((location, index) => {
//             return axios.get(
//                 `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`
//             )
//                 .then((response) => {
//                     console.table(response.data);
//                     if (response.data.current.condition.text === "rainy") {
//                         array.push(location);
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         });
//         setRainyCountries(array);
//     }, [countries, array]);

//   return (
//       <div>
//           {rainyCountries && rainyCountries.map((item, index) => {
//               return {
//                   <div> {item}</div>
//               }
//           })}
//     </div>
//   )
// }

// export default WeatherCondition

import axios from "axios";
import React, { useEffect, useState } from "react";

function WeatherCondition() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
  ];
  const [rainyCountries, setRainyCountries] = useState(null);

  useEffect(() => {
    const promises = countries.map((location) => {
      return axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`
        )
        .then((response) => {
          console.table(response.data);
          if (response.data.current.condition.text === "rainy") {
            return location;
          }
          return null;
        })
        .catch((error) => {
          console.error(error);
          return null;
        });
    });

    Promise.allSettled(promises).then((results) => {
      const rainyCountries = results
        .filter(
          (result) => result.status === "fulfilled" && result.value !== null
        )
        .map((result) => result.value);
      setRainyCountries(rainyCountries);
    });
  }, [countries]);

  return (
    <div>
      {rainyCountries &&
        rainyCountries.map((item, index) => {
          return <div key={index}> {item}</div>;
        })}
    </div>
  );
}

export default WeatherCondition;
