import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux'
import { store } from './stores'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/dashboard'} element={<Home />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
