import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Todo = React.lazy(() => import('./pages/Todo'));
const Hockey = React.lazy(() => import('./pages/Hockey'));
const Skull = React.lazy(() => import('./pages/Skull'));
const JimChapman = React.lazy(() => import('./pages/JimChapman'));
const GithubFinder = React.lazy(() => import('./pages/GithubFinder'));
const FiftyinFifty = React.lazy(() => import('./pages/FiftyInFifty'));
const Updraft = React.lazy(() => import('./pages/Updraft'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='todo' element={<Todo />} />
        <Route path='hockey' element={<Hockey />} />
        <Route path='skull' element={<Skull />} />
        <Route path='jim-chapman' element={<JimChapman />} />
        <Route path='github-finder' element={<GithubFinder />} />
        <Route path='fifty-in-fifty' element={<FiftyinFifty />} />
        <Route path='updraft' element={<Updraft />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
