import Categories from "./categories";
import AppBar from "./landingImage";
import { HashRouter, Routes, Route } from "react-router-dom";
import UploadImage from "./uploader";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact  path="/" element={
          <div>
            <div className="app">
            <AppBar />
            
            </div>
            <Categories />
          </div>   
        } />

        <Route path="/upload" element={<UploadImage />} />
            
      </Routes>
    </HashRouter>    
  );
}

export default App;
