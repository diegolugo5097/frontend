import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => {
  return (
    <div>
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className="mb-3"
        style={{ height: "180px", width: "286px" }}
      />
    </div>
  );
};

export default ShowImage;
