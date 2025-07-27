import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [res, setRes] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.714581&lng=88.428329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);

    setRes(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onFilter = () => {
    const filterTopRatedRes = res.filter((res) => res.info.avgRating > 4.4);
    setRes(filterTopRatedRes);
  };

  // It takes two args, cb() func & dependency array []
  // cb() is called after the component is rendered
  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Conditional Rendering >>
  // if (!res?.length) {
  // !NOTE: Shimmer UI
  //   return <Shimmer />;
  // }

  // Ternary Condition rendering
  return !res?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input placeholder="Search here" />
        <button>Search</button>
      </div>

      <div className="top-rated-filter">
        <button onClick={() => onFilter()}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
