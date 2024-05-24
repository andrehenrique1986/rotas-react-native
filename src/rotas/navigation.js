import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/Home/index.js';
import Login from '../paginas/Login/index.js';
import Cadastro from "../paginas/Cadastro/index.js";

const Stack = createStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTitle: '',
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}