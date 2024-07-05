import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import Search from '../screens/search';


const Tab = createBottomTabNavigator();

const RouteTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                }}
                navigationKey='Home'
                navigationName='Home'
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Feather name="search" size={24} color="black" />
                    ),
                }}
                navigationKey='Search'
                navigationName='Search'
            />
        </Tab.Navigator>
    );
}

export default RouteTabs;