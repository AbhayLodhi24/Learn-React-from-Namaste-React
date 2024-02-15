import { IMG_URL } from "../constants";

const RestaurantCard = (props) =>{
    
    const {resData} = props ;
    const {cuisines, name , cloudinaryImageId , avgRatingString} = resData?.info ;
     return (
         <div className="card">
             <img src={IMG_URL + cloudinaryImageId} alt="pic"/>
             <h1> {name} </h1>
             <h3>{cuisines.join(",")}</h3>
             <h3>{avgRatingString}</h3>
         </div>
     );
 }

 export default RestaurantCard ;