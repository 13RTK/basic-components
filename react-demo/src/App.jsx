import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import FloatingBubble from './components/FloatingBubble';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/floating-bubble" element={<FloatingBubble />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
