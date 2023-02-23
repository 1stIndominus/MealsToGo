import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import {LinearGradient} from 'expo-linear-gradient';
import { Gradient as TextGradien } from "../components/Gradient";
import { Spacer } from "../../../components/spacer/spacer-component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
`;

export const RestaurantsScreens = () => (
  <Gradient colors={['#0093e9', '#80d0c7']}>
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <TextGradien />

      <FlatList 
        data={[{ name: 1}, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
      
    </SafeArea>
  </Gradient>
);
