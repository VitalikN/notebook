import { Route, Routes } from 'react-router-dom';
import { Tasks } from 'pages/Tasks/Tasks';
import { Home } from 'pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:userId" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
