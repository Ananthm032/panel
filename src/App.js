import "./App.css"
import Review from "./Component/Review/Review";
import Reject from "./Component/Reject/Reject";
import Verified from "./Component/Verified/Verified";
import {Routes,Route} from "react-router-dom"
import Minitopbar from "./Minitopbar/Minitopbar";
function App() {
  return (
    <div className="app"> 
   <Routes>
    <Route path="/" element={<Minitopbar/>}/>
    <Route path="/review" element={<Review/>}/>
    <Route path="/verified" element={<Verified/>}/>
    <Route path="/reject" element={<Reject/>}/>
   </Routes>
   </div>
  
    
   
  );
}

export default App;
