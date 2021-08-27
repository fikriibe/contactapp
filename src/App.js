import { createTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from "./configs/redux/store";
import MainRoute from './configs/router';

const theme = createTheme({
  palette: {
    primary: {
      main: "#090c02"
    },
    secondary: {
      main: "#bbc5aa",
      1: "#dde2c6",
      2: "#e6eed6"
    },
    ascent: {
      main: "#a72608"
    }
  },
})


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>

    </Provider>)
}

export default App;
