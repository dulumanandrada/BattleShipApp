import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRouteNames } from './route-names';
import { Text } from 'react-native';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import UserDetailsScreen from '../screens/UserDetails';

const AuthStack = createNativeStackNavigator()

const authRoutes = (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} options={{
            headerTitle: (props) => <Text {...props}>Login</Text>
            // headerShown: false
        }}/>
        <AuthStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
            headerTitle: (props) => <Text {...props}>Register</Text>
            // headerShown: false
        }}/>
        <AuthStack.Screen name={AuthRouteNames.DETAILS} component={UserDetailsScreen} options={{
            headerTitle: (props) => <Text {...props}>Profile</Text>
            // headerShown: false
        }}/>
    </AuthStack.Navigator>
)

export default authRoutes;