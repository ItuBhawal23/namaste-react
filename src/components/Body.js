import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // NORMAL JS VARIABLE - with NO super power to automatically sync UI with DATA (whenever changes)
  let restaurantList = [];

  restaurantList = restaurantList.filter((res) => res.data.avgRating > 4.4);

  // Local StateVariable (with super powers) React keep tracks of the State variable -> As soon as it changes -> It re renders the component by comparing the old VirtualDOM ({}) with new Virtual DOM({}) [diff algorithm] and then UPDATES the UI auto magically - This whole process is Reconciliation Algorithm (now known as React Fiber - from React16)

  // NORMAL JS ARRAY Destructuring...
  // const [res, setRes] = useState(resList);

  // Without Array Destructuring
  const arr = useState(resList);

  const res = arr[0];
  const setRes = arr[1];

  const onFilter = () => {
    const filterTopRatedRes = resList.filter((res) => res.info.avgRating > 4.4);

    setRes(filterTopRatedRes);
  };

  return (
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
