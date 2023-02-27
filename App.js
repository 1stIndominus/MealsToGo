import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import * as firebase from "firebase/app";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";

const firebaseConfig = {
  apiKey: "AIzaSyDmz44JZo2uqW7vyLrzS6tuJY4RVZzQEbs",
  authDomain: "mealstogo-96ffa.firebaseapp.com",
  projectId: "mealstogo-96ffa",
  storageBucket: "mealstogo-96ffa.appspot.com",
  messagingSenderId: "800094890055",
  appId: "1:800094890055:web:4b464a6bb7189fb576e962",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
