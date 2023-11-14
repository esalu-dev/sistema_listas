import { LogInTeacher } from "./LogInTeacher";
import { LogInStudents } from "./LogInStudents";
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/teacher" element={<LogInTeacher />} />
        <Route path="/students" element={<LogInStudents />} />
      </Routes>
    </div>
  );
}

export default App;
