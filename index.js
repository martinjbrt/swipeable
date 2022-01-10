// We need to add react-native-gesture-handler as the first import for React Native 0.61 or greater
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

// We need to wrap our entry point in gestureHandlerRootHOC for Android to work
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
