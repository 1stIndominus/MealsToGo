import React from "react";
import { SettingScreen } from "../../features/settings/screens/settingScreen";
import { FavoriteScreen } from "../../features/settings/screens/favoriteScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="Setting"
        component={SettingScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavoriteScreen} />
    </SettingStack.Navigator>
  );
};
