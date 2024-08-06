import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import CreateProducts from './components/CreateProducts';
import FormProducts from './components/FormProducts';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/createtattoo" element={<CreateProducts />} />
          <Route path="" element={<FormProducts />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
