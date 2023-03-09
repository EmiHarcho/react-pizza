import React, { Suspense } from 'react'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom";

const Card = React.lazy(() => import('./pages/Card'))//отложенная загрузка
const Home = React.lazy(() => import('./pages/Home'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/pizza/:id" element={<FullPizza/>}/>
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
