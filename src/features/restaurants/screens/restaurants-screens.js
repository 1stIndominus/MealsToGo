import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animations/fadeAnimation";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient as TextGradien } from "../components/Gradient";
import { Spacer } from "../../../components/spacer/spacer-component";
import { SafeArea } from "../../../components/utility/safeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurantsContext";
import { FavoritesContext } from "../../../services/favorites/favoritesContext";
import { Search } from "../components/searchComponent";
import { FavoritesBar } from "../../../components/favorites/favoritesBarComponent";
import { RestaurantList } from "../components/restaurantListStyle";

const Gradient = styled(LinearGradient)`
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreens = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <Gradient colors={["#8EC5FC", "#E0C3FC"]}>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} />
          </LoadingContainer>
        )}

        <TextGradien />
        <Search
          onFavoritesToggle={() => setIsToggled(!isToggled)}
          isFavoritesToggled={isToggled}
        />

        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}

        <RestaurantList
          data={restaurants}
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </Gradient>
  );
};
