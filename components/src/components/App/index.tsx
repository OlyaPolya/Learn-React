import React from 'react';
import './styles.css';
import Search from '../../pages/Search';
import About from '../../pages/About';
import NotFoundPage from '../../pages/NotFound';
import Header from '../Header';
import { Route, Routes } from 'react-router-dom';
import Reviews from '../../pages/Reviews';
import Photo from '../../pages/Photo';
import { Provider } from 'react-redux';
import { setupStore } from 'store/slice';
import { LINKS, Paths } from '../../constants';

const store = setupStore();

const App: React.FC = () => (
  <div className="App">
    <Provider store={store}>
      <Header links={LINKS} />
      <Routes>
        <Route path={Paths.home} element={<Search />} />
        <Route path={Paths.getPhotoPath('*')} element={<Photo />} />
        <Route path={Paths.about} element={<About />} />
        <Route path={Paths.reviews} element={<Reviews />} />
        <Route path={Paths.notFound} element={<NotFoundPage />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
