
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Route } from './router/route';
import { theme } from './Theme/theme';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        <RouterProvider router={Route} />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
