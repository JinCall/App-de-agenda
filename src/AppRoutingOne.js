import  { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import HomePage from "./pages/home/homePage";
import NotFoundPage from "./pages/404/notFoundPage";
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskPage from './pages/tasks/taskPage';
import TaskDetailedPage from './pages/tasks/taskDetailedPage';
import LoginPage from './pages/auth/loginPage';
import LoginFormik from './components/container/forms/LogInForm';


function AppRoutingOne() {

  const logged = false;

  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/">| Home |</Link>
            <Link to="/about">| About |</Link>
            <Link to="/about">| FAQs |</Link>
            <Link to="/any404">| Error 404 |</Link>
            <Link to="/login">| Login |</Link>
          </aside>
          <main>
            <Routes>
              <Route exact path="/" Component={ HomePage }/>
              <Route path='/login' Component={ LoginPage }/>
              <Route path='/about' Component={ AboutPage }/>
              <Route path='/profile' Component={ ProfilePage }>
                {
                    logged ? 
                    <HomePage/> 
                    : 
                    () => {
                      alert("You must login first")
                      return (<LoginPage to="/"/>)
                    }
                  }
              </Route>
              <Route path='/task' Component={ TaskPage }/>
              <Route path='/task/:id' Component={ TaskDetailedPage }/>
              <Route path='*' Component={ NotFoundPage }/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
