import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserTop } from '../../features/user/UserTop'
import { UserNested } from '../../features/user/UserNested'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator<{
  userTop: undefined
  userNested: undefined
}>()

function UserScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userTop"
        component={UserTop}
        options={{
          title: 'User Top',
        }}
      />
      <Stack.Screen
        name="userNested"
        component={UserNested}
        options={{
          title: 'User Nested',
        }}
      />
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator<{
  home: undefined
  user: undefined
}>()

export const TabStacks = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // lazy: false, // toggle this to be able to jumpto nested screen
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="user" component={UserScreens} />
    </Tab.Navigator>
  )
}
