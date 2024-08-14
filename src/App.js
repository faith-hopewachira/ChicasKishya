import './App.css';
import Landing from './LandingPage';
import About from './About';
// import Navbar from './Navbar';
import WritingSection from './WritingSection';
import LoomVideos from './Loom';



function App() {
  return (
    <div>
      <Landing/>
      <About/>
      <LoomVideos/>
       <WritingSection/>
       </div>
  )
}
export default App;


// import './App.css';
// import Landing from './LandingPage';
// import About from './About';
// import Navbar from './Navbar';
// import WritingSection from './WritingSection';
// import LoomVideos from './Loom';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Landing/>
//       <Routes>
//       <Route path='/loom' element= {<LoomVideos/>}></Route>
//       <Route path='/blogs' element= {<WritingSection/>}></Route>
//       <Route path='/about' element= {<About/>}></Route>
//       </Routes>A
//     </Router>
//   );
// };
// export default App;