import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient as TextGradien } from "../components/Gradient";
import { Spacer } from "../../../components/spacer/spacer-component";
import { SafeArea } from "../../../components/utility/safeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurantsContext";
import { Search } from "../components/searchComponent";

const Gradient = styled(LinearGradient)`
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreens = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <Gradient colors={["#0093e9", "#80d0c7"]}>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} />
          </LoadingContainer>
        )}

        <Search />
        <TextGradien />

        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
    </Gradient>
  );
};
