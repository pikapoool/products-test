import { Routes, Route, Navigate } from 'react-router-dom';
import { Details } from './pages/Details/Details';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Search } from './pages/Search/Search';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:productId" element={<Details />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
