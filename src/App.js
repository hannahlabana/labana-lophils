import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import EmailCard from './components/EmailCard';
import HeaderMain from './components/HeaderMain.js'
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
  const emails = useSelector(state => state.email.value)
  const dispatch = useDispatch()

  return (  
    <div className="App">
      <HeaderMain/>
      <hr></hr>
      <div className="body">
        <div className="subHeader">
          <div className="subHeader-left">Unread</div>
          <div className="subHeader-right">{emails.length}<MdKeyboardArrowDown size='10px'/></div>
        </div>
        <div className="emailList">
          {
            emails.map( (email, index) => {
              return(
                
                <EmailCard email={email} key={email.id} index={index}/>
              )
            })
          }
        </div>
      </div>
    </div>
    
  );
}

export default App;
