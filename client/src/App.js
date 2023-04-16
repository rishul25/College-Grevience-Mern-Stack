import React from "react";
import Login from "./components/pages/Login";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Register from "./components/pages/Register";
import ErrorPage from "./components/ErrorPage";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Feature from "./components/pages/Feature";
import Admin from "./components/pages/Admin/Admin";
import User from "./components/pages/Users/User";
import UserInfo from "./components/pages/Admin/UserInfo";
import Resolver from "./components/pages/Resolver/Resolver";
import EditResolver from "./components/pages/Resolver/EditResolver";
import EditUser from "./components/pages/Users/EditUser";
import Teacher from "./components/pages/Teacher/Teacher";
import EditTeacher from "./components/pages/Teacher/EditTeacher";
import TeacherInfo from "./components/pages/Admin/TeacherInfo";
import EditTeachers from "./components/pages/Resolver/EditTeachers";








function App() {
  return (
    <>


    <Router>
       
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage/>} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/info/:id" element={ <UserInfo/>} />
          <Route path="/infos/:id" element={ <TeacherInfo/>} />
        

          {/* userEdit */}
          <Route path="/edits/:id" element={  <EditUser />} />
          <Route path="/student" element={<User />} />

          {/* resolver */}
          <Route path="/resolver" element={ <Resolver />} />
          <Route path="/edit/:id" element={  <EditResolver/>} />
          <Route path="/editteachers/:id" element={<EditTeachers /> } />

          {/* teacher */}
          <Route path="/teacher" element={<Teacher /> } />
          <Route path="/editteacher/:id" element={<EditTeacher /> } />


            


        


          

            

         
          
          
        
          
         
        
       
        </Routes>



    </Router>
    </>
  );
}

export default App;
