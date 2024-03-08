import React from 'react';
import LanguageProvider from './src/context/LanguageProvider';
import Main from './src/main';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </Provider>
  );
}

export default App;
