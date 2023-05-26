import { Slot, Stack } from "expo-router";
import { Provider } from "../context/auth";

export default function Root() {
  return (
    <Stack>
      <Stack.Screen
        name="(auth)/sign-in"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)/sign-up"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>


    // <Provider>
    //   <Slot />
    // </Provider>
  );
}