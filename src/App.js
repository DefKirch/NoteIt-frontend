import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp } from "./pages";
import ProjectPage from "./pages/ProjectPage";
import ProjectOverview from "./pages/ProjectOverview";
import NewProjectForm from "./components/NewProjectForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <DndProvider backend={Backend}>
        <Navigation />
        <MessageBox />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprojects" element={<ProjectOverview />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/newproject" element={<NewProjectForm />} />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
