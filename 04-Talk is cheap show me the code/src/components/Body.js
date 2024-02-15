import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../constants";

const Body = function () {
    return (
        <div className="body">
        { restaurants.map((rest)=>(
            <RestaurantCard resData={rest} key={rest.info.id}/>
            )) }
        </div>
    )
}

export default Body ;