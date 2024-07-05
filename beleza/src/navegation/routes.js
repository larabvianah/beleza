import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/home';
import Login from '../screens/login';
import RouteTabs from './routeTabs';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen
                name="Routes"
                component={RouteTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Routes;