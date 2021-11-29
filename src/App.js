import Categories from "./categories";
import AppBar from "./landingImage";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div>
            <div className="app">
            <AppBar />
            
            </div>
            <Categories />
          </div>
          

        }>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
