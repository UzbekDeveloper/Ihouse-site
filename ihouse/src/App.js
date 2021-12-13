import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Header/bootstrap-nav/Navibar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Faq from './Components/Faq/Faq';
import Contacts from './Components/Contacts/Contacts';
import Login from './Components/Login/Login';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Suspense } from 'react';
// import AntdHeader from './Components/Header/bootstrap-nav/AntdHeader';
import Loader from './Loader';




function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
      <Router>
        {/* <Header /> */}
        <Navibar />
        {/* <AntdHeader /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="/faq" component={Faq} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
