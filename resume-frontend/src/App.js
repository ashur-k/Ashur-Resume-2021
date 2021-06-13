import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.page';
import SkillsPage from './pages/skills-page/skills.page';
import ProjectsPage from './pages/projects-page/projects.page';
import WorkExperiencePage from './pages/work-experience-page/workExperience.page';
import EducationPage from './pages/education-page/education.page';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/skills' exact component={SkillsPage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/work-expereince' exact component={WorkExperiencePage} />
        <Route path='/education' exact component={EducationPage} />
      </Switch>
    </Router>
  );
}

export default App;
