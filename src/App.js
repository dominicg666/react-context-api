import './App.css';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from './context/app'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  const [appState, _] = useAppContext()
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes
        token={appState.token}
      />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
