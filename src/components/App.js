import AuthPage from "pages/AuthPage";
import MainPage from "pages/mainPage";
import { Navigate, Route, Routes } from "react-router-dom";




export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
         <Route path="/welcome" element={<AuthPage />} />
        <Route
                path="/home"
                element={
                     <MainPage /> 
                }
              >
              </Route>
      </Routes>
    </div>
  );
};
