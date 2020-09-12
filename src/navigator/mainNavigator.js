import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile100756Navigator from '../features/UserProfile100756/navigator';
import Tutorial100755Navigator from '../features/Tutorial100755/navigator';
import NotificationList100727Navigator from '../features/NotificationList100727/navigator';
import Settings100726Navigator from '../features/Settings100726/navigator';
import Settings100718Navigator from '../features/Settings100718/navigator';
import UserProfile100716Navigator from '../features/UserProfile100716/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile100756: { screen: UserProfile100756Navigator },
Tutorial100755: { screen: Tutorial100755Navigator },
NotificationList100727: { screen: NotificationList100727Navigator },
Settings100726: { screen: Settings100726Navigator },
Settings100718: { screen: Settings100718Navigator },
UserProfile100716: { screen: UserProfile100716Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
