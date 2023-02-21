import { Route, Routes } from 'react-router';
import './app.css';
import Step01 from './basic/Step01';
import Step02 from './basic/Step02';
import Step03 from './basic/Step03';

function App() {
  return (
    <Routes>
      <Route path="basic">
        <Route path="step01" element={<Step01 />} />
        <Route path="step02" element={<Step02 />} />
        <Route path="step03" element={<Step03 />} />
      </Route>
    </Routes>
  );
}

export default App;
