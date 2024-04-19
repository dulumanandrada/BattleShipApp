import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRouteNames, GameRouteNames } from './route-names';
import { Text } from 'react-native'
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import UserDetailsScreen from '../screens/UserDetails';
import LobbyScreen from '../screens/Lobby';
import TableScreen from '../screens/Table';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} options={{
            header: () => null,
        }}/>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
            headerTitle: (props) => <Text {...props}>Game</Text>
        }}/>
        <GameStack.Screen name={AuthRouteNames.DETAILS} component={UserDetailsScreen} options={{
            // headerTitle: (props) => <Text {...props}>My details</Text>
            header: () => null
        }}/>
        <GameStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} options={{
            // headerTitle: (props) => <Text {...props}>My details</Text>
            header: () => null
        }}/>
        <GameStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
            headerTitle: (props) => <Text {...props}></Text>
            // header: () => null
        }}/>
    </GameStack.Navigator>
)

export default gameRoutes;