import '../app/globals.css';
import { Provider } from "react-redux";
import store from "@/redux/store"; // Adjust the path to your store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
