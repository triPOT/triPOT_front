import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListPage from '../screens/ChatListPage';
import HomePage from '../screens/HomePage';
import MyPage from '../screens/MyPage';
import PostingPage from '../screens/PostingPage';
import RestaurantListPage from '../screens/RestaurantListPage';
import SpotListPage from '../screens/SpotListPage';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
    return(
        <Tab.Navigator
            // tabBarOptions={{
            //     showlabel: false,
            //     style: {
            //         position: 'abloute',
            //         bottom:25,
            //         left: 20,
            //         right: 20,
            //         elevation: 0,
            //         backgroundColor: '#fff',
            //         borderRadius: 15,
            //         height: 90,
            //     }
            // }}
        >
            <Tab.Screen name="ChatList" component={ChatListPage}/>
            <Tab.Screen name="RestaurantList" component={RestaurantListPage}/>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Posting" component={PostingPage}/>
            <Tab.Screen name="SpotList" component={SpotListPage}/>
            <Tab.Screen name="MyPage" component={MyPage}/>
        </Tab.Navigator>
    );
}

export default Tabs;