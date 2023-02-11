import { useSelector } from "react-redux"

function TCompo() {
    const account = useSelector(state => state.account)
  return (
    <div>TCompo
        <h1>Result : {account}</h1>
    </div>
  )
}

export default TCompo