import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreens } from "../../features/restaurants/screens/restaurantScreens";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerMode: "none",
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreens}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
