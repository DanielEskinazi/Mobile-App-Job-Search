import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store'

import AppNavigation from './navigation/AppNavigation';
//import store from './store';

class App extends React.Component {
  render() {
    const { persistor, store } = configureStore();
    return(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    )

  }
}



const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default App;