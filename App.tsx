import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {indyVdrReactNative} from 'indy-vdr-test-react-native';

const App = () => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{indyVdrReactNative.version()}</Text>
  </SafeAreaView>
);

export default App;
