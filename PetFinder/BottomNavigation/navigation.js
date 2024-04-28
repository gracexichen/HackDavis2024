import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import Listing from '../Listing/listing';
import Map from '../Map/map';
import Profile from '../Profile/profile';
import Sighting from '../Sighting/sighting';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Listing" component = {Listing}/>
                <Tab.Screen name = "Map" component= {Map}/>
                <Tab.Screen name = "Profile" component= {Profile}/>
                <Tab.Screen name = "Sighting" component= {Sighting}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs;