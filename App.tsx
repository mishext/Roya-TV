import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import ApplicationContainer from './ApplicationContainer';
import configureStore from './redux/configreStore'


const { persistor, store } = configureStore();

declare const global: { HermesInternal: null | {} };

const App = () => {

  return (
   
    <Provider store={store} >

      <PersistGate persistor={persistor} loading={null} >
        <ApplicationContainer />
      </PersistGate>

    </Provider>
  );

};

export default App;
