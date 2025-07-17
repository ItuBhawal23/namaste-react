import { CDN_RES_LINK } from "../utils/constants";

// ! One way of adding CSS Obj (AVOID using inline CSS)
const heading = {
  fontSize: "24px"
};

const RestaurantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    props.resData;
  return (
    <div className="res-card">
      <img
        src={CDN_RES_LINK + cloudinaryImageId}
        alt="res-image"
        className="res-image"
      />
      <div className="res-details">
        <h3 style={heading}>{name}</h3>
        <p style={{ fontSize: "16px" }}>{cuisines?.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} STARS</p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
