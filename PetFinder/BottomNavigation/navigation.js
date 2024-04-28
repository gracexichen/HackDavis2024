import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import Listing from "../Listing/listing";
import Map from "../Map/map";
import Profile from "../Profile/profile";
import Sighting from "../Sighting/sighting";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Listing"
          component={Listing}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View style={{}}>
                <Image source={focused? require("../Listing/listing_highlighted.png") : require("../Listing/listing.png")} />
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
                  <Image source={focused? require("../Map/map_highlighted.png") : require("../Map/map.png")} />
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
                  <Image source={focused? require("../Sighting/sighting_highlighted.png") : require("../Sighting/sighting.png")} />
                </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View style={{}}>
                <Image source={require("../Profile/profile.png")} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container:{
        height: '500',
    }
})
export default Tabs;
