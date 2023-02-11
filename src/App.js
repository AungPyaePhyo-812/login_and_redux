import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import TCompo from "./components/TCompo";
import UCompo from "./components/UCompo";
import { actionCreators } from './stores/actionCreators'

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const {add, remove} = bindActionCreators(actionCreators,dispatch);
  return (
      <>
        <h1>{account}</h1>
        <button  onClick={()=>add(50)}>Add</button>
        <button onClick={()=>remove(50)}>Remove</button>

        <TCompo />

        <UCompo></UCompo>
      </>
  );
}

export default App;
