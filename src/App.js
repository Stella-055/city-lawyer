import './App.css';
import Home from './Home';
import Navitems from './Navitems';
import Services from './Services';
import Contacts from './Contacts';
function App() {
  return (
    <div className="App">
      <Navitems/>
      <Home/>
      <Services/>
      <hr className='laini'></hr>
<Contacts/>
    </div>
  );
}

export default App;
