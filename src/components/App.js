import AuthPage from "pages/AuthPage";
import MainPage from "pages/mainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./welcomeForms/LoginFrom.js/LoginForm";
import WelcomePage from "pages/WelcomePage";
// import { RegisterForm } from "./welcomeForms/RegisterForm/RegisterForm";




export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
         <Route path="/welcome" element={<WelcomePage />} />
        <Route
                path="/home"
                element={
                     <MainPage /> 
                }
              >
        </Route>
         <Route
                path="/auth/:id"
                element={
                    <AuthPage />
                 
                }
              >
                <Route path="login" element={<LoginForm />} />
                {/* <Route path="register" element={<RegisterForm />} /> */}
              </Route>
      </Routes>
    </div>
  );
};
