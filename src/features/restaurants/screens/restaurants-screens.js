import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import {LinearGradient} from 'expo-linear-gradient';
import { Gradient as TextGradien } from "../components/Gradient";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
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
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  </Gradient>
);
