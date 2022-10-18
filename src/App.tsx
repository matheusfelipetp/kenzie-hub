import { GlobalStyle } from './styles/global';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './context';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <RoutesApp />
      </Providers>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable
        theme="dark"
      />
    </>
  );
};

export default App;
