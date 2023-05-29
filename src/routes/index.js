import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Detail from "../pages/Detail";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Users'} component={Users} />
                <Stack.Screen name={'Detail'} component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
