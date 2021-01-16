import axios from 'axios';

export const axiosNutrix = () => {
  const apiKey = 'b308d6ec05msh44191db938d0c2fp1d660bjsn1b2589c7957f';

  return axios.create({
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
    },
    baseURL: 'https://nutritionix-api.p.rapidapi.com/v1_1/search',
  });
};
