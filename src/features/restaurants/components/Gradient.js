import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import styled from "styled-components/native";


const Section = styled(View)`
  align-items: center;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Gradient = () => {
  return (
    <Section>
      <MaskedView
        maskElement={
          <Title style={{ backgroundColor: 'transparent' }}>
            Food that you can order
          </Title>
        }
      >
        <LinearGradient
          colors={['#FF3CAC', '#1345E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Title style={[{ opacity: 0 }]}>Food that you can order</Title>
        </LinearGradient>
      </MaskedView>
    </Section>
  )
}
