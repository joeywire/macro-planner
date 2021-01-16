import { useState } from 'react';

import { axiosNutrix } from '../utils/axiosNutrix';
import FoodCard from './FoodCard'

const SearchBox = () => {
  const [userInput, setUserInput] = useState('');
  const [searchRes, setSearchRes] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const clickSearch = e => {
    const searchStr = userInput.replace(/ /g, '%20');
    axiosNutrix().get(`/${searchStr}?fields=item_name,item_id,brand_name,nf_calories,nf_total_fat`)
      .then(res => {
        setSearchRes(res.data.hits)
        setUserInput("")
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className="search">
      <h2>Food Search:</h2>
      <input
        type="text"
        name="searchBox"
        value={userInput}
        onChange={handleChange}
      />
      <button onClick={clickSearch}>Search</button>
      {searchRes.map(food => (
        <div> 
          <FoodCard food={food} />
        </div>
      ))}
    </div>
  );
};

export default SearchBox;
