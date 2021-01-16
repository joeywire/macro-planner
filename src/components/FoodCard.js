import styled from 'styled-components'; 

const FoodCard = ({food}) => {

  return (
    <div key={food._id}>
      <h3>{food.fields.item_name}</h3>
      <ul>
        <li>Calories: {food.fields.nf_calories}</li>
        <li>Brand: {food.fields.brand_name}</li>
      </ul>

    </div>
  )
}

export default FoodCard;