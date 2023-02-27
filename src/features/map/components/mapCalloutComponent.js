import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compactRestaurantComponent";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
