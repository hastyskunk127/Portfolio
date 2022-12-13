import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import NoPage from './components/NoPage';
import MapProjectPage from './components/MapProjectPage';
import ResponsiveProjectPage from './components/ResponsiveProjectPage';
import IterativeProjectPage from './components/IterativeProjectPage';
import DevelopmentProjectPage from './components/DevelopmentProjectPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
           <Route path="/Portfolio" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="About" element={<AboutPage/>}/>
            <Route path="Chomp" element={<MapProjectPage/>}/>
            <Route path="Iterative" element={<IterativeProjectPage/>}/>
            <Route path="Responsive" element={<ResponsiveProjectPage/>}/>
            <Route path="Development" element={<DevelopmentProjectPage/>}/>
            <Route path="About/" element={<AboutPage/>}/>
            <Route path="Chomp/" element={<MapProjectPage/>}/>
            <Route path="Iterative/" element={<IterativeProjectPage/>}/>
            <Route path="Responsive/" element={<ResponsiveProjectPage/>}/>
            <Route path="Development/" element={<DevelopmentProjectPage/>}/>
            <Route path="*" element={<NoPage/>} />
          </Route>
          <Route path="/Portfolio/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="About" element={<AboutPage/>}/>
            <Route path="Chomp" element={<MapProjectPage/>}/>
            <Route path="Iterative" element={<IterativeProjectPage/>}/>
            <Route path="Responsive" element={<ResponsiveProjectPage/>}/>
            <Route path="Development" element={<DevelopmentProjectPage/>}/>
             <Route path="About/" element={<AboutPage/>}/>
            <Route path="Chomp/" element={<MapProjectPage/>}/>
            <Route path="Iterative/" element={<IterativeProjectPage/>}/>
            <Route path="Responsive/" element={<ResponsiveProjectPage/>}/>
            <Route path="Development/" element={<DevelopmentProjectPage/>}/>
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
