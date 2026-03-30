const BASE_URL = "http://localhost:5000";
const FoodCard =({foods}) => {
    return (
        <div className="food-container">
            { foods.map((food)=> { return (
                <div className="food-card">
            <img src={BASE_URL + food.image} alt={food.name} />
            <p>{food.text}</p>
            <button type="button" >${food.price}.99</button>
        </div>)
            })}
        
        </div>
    )
}
export default FoodCard;