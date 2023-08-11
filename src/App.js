import './App.css';
import EmailCard from './components/EmailCard';
import HeaderMain from './components/HeaderMain.js'
import { MdKeyboardArrowDown } from "react-icons/md";


function App() {
  return (  
    <div className="App">
      <HeaderMain/>
      <hr></hr>
      <div className="body">
        <div className="subHeader">
          <div className="subHeader-left">Unread</div>
          <div className="subHeader-right">3<MdKeyboardArrowDown/></div>
        </div>
        <div className="emailList">
          {[...Array(3)].map(num => (
            <EmailCard/>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default App;
