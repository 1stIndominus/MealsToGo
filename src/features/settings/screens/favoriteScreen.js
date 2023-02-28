import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favoritesContext";
import { Text } from "../../../components/typography/textComponent";
import { Spacer } from "../../../components/spacer/spacer-component";
import { SafeArea } from "../../../components/utility/safeAreaComponent";
import { RestaurantList } from "../../restaurants/components/restaurantListStyle";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card-component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
