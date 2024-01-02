import { LogInTeacher } from "./LogInTeacher";
import { LogInStudents } from "./LogInStudents";
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import { UserDashboard } from "./pages/UserDashboard";
import { TeacherDashboard } from "./pages/TeacherDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/teacher" element={<LogInTeacher />} />
        <Route path="/students" element={<LogInStudents />} />
        <Route path="/students/dashboard" element={<UserDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
