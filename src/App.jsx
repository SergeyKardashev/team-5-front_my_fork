// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchContent } from './services/thunks/ambassadorThunk';
import AmbassadorsPage from './components/AmbassadorsPage/AmbassadorsPage';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import NewAmbassadorPage from './components/NewAmbassadorPage/NewAmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
// import SegmentedControl from './UI/SegmentedControl/SegmentedControl';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <HeaderSidebarLayout>
            <AmbassadorsPage />
          </HeaderSidebarLayout>
      )}
      />
      <Route path="/ambassador-page/:ambassadorId" element={<AmbassadorPage />} />
      <Route path="/new-ambassador" element={<NewAmbassadorPage />} />
    </Routes>
  );
}

export default App;
