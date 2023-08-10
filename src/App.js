import './App.css';
import EmailHeader from './components/EmailHeader';
import EmailBody from './components/EmailBody';
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
          <div className="emailCard">
            <EmailHeader/>
            <EmailBody/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
