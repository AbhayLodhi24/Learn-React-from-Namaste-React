import RestaurantCard from "./RestaurantCard" // Default import
import { restaurants } from "../constants"; // Named Import
import SearchBar from "./SearchBar";

const Body = function () {
    return (
        <div className="body">
            <SearchBar />
            { restaurants.map((rest)=>(
                <RestaurantCard resData={rest} key={rest.info.id}/>
                )) }
        </div>
    )
}

export default Body ;