import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../stores/actionCreators"

function UCompo() {
    const account = useSelector(state => state.account)
    const dispatch = useDispatch();
    const {add, remove} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>UCompo
        <h1>{account}</h1>
        <button onClick={() => add(50)}>Add</button>
        <button onClick={() => remove(50)}>Remove</button>
    </div>
  )
}

export default UCompo