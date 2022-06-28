// In App.js in a new project

import * as React from 'react';
import {RootNavigator} from './src/navigation/RootNavigation';
import {AppProvider} from './src/providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
