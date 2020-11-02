import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenShot from '../src/screen/ScreenShot';
import Download from '../src/screen/Download'
const AppNavigator = createStackNavigator({
    ScreenShot:{
      screen: ScreenShot,
      navigationOptions:({headerShown:false}),
    },
    Download:{
      screen: Download,
      navigationOptions:({headerShown:false}),
    }
})
export default createAppContainer(AppNavigator);