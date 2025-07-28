import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.714581&lng=88.428329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);

    const resData =
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(resData);
    setFilteredList(resData);
  };

  const onFilter = () => {
    const filterTopRatedRes = restaurantList.filter(
      (restaurantList) => restaurantList.info.avgRating > 4.4
    );
    setFilteredList(filterTopRatedRes);
  };

  const onSearch = () => {
    console.log("search", searchInput, restaurantList);

    const resList = [...restaurantList];

    const searchList = resList.filter((el) =>
      el.info.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    console.log("searchList", searchList);
    setFilteredList(searchList);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Ternary Condition rendering
  return !restaurantList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          placeholder="Search here"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => onSearch()}>Search</button>
      </div>

      <div className="top-rated-filter">
        <button onClick={() => onFilter()}>Top Rated Restaurant</button>
      </div>

      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
