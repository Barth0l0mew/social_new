import './App.css';
import LayOut from './components/layOut/layOut';
import { UserPageContainer } from './container/userPageContainer/userPageContainer';

function App(props) {
  console.log (props)
  return (
    <div className="App">
      <LayOut></LayOut>
      {/* <UserPageContainer></UserPageContainer> */}
    </div>
  );
}

export default App;
