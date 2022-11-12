import Home from "./routes/Home"
import Header from "./components/Header";
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/post">
        <Route path=":id" element={<PostSingle />} />
      </Route>
      <Route path="/students" element={<Students />} />
      <Route path="/counter" element={<CounterView />} />
      <Route path="/pokedex" element={<Pokedex />} /> */}
    </Routes>
  </BrowserRouter>
  )
}
