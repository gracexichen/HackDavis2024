import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Listing from "../Listing/listing";
import Map from "../Map/map";
import Profile from "../Profile/profile";
import Sighting from "../Sighting/sighting";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Listing"
          component={Listing}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View style={{}}>
                <Image source={focused? require("../Listing/assets/listing_highlighted.png") : require("../Listing/assets/listing.png")} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <View style={{}}>
                  <Image source={focused? require("../Map/assets/map_highlighted.png") : require("../Map/assets/map.png")} />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name="Sighting"
          component={Sighting}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <View style={{}}>
                  <Image source={focused? require("../Sighting/assets/sighting_highlighted.png") : require("../Sighting/assets/sighting.png")} />
                </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
            <View style={{}}>
                <Image source={focused? require("../Profile/assets/profile_highlighted.png") : require("../Profile/assets/profile.png")} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
