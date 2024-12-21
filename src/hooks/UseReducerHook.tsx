import { useReducer } from "react";


type StateTypes = {
  firstName: string,
  lastName: string,
  mobileNumber: string,
  school: string
}

type ActionTypes =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_MOBILE_NUMBER"; payload: string }
  | { type: "SET_SCHOOL"; payload: string };


const reducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload }
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload }
    case "SET_MOBILE_NUMBER":
      return { ...state, mobileNumber: action.payload }
    case "SET_SCHOOL":
      return { ...state, school: action.payload }
  }
}

const UseReducerHook = () => {
  const [formData, setFormData] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    school: "",
  });


  return (
    <div>
      <input
        type="text"
        value={formData.firstName}
        placeholder="Enter first name"
        onChange={(e) => setFormData({ type: "SET_FIRST_NAME", payload: e.target.value })}
      />
      <br />

      <input
        type="text"
        value={formData.lastName}
        placeholder="enter last name"
        onChange={(e) => setFormData({ type: "SET_LAST_NAME", payload: e.target.value })}
      />
      <br />

      <input
        type="text"
        value={formData.mobileNumber}
        placeholder="enter mobile number"
        onChange={(e) => setFormData({ type: "SET_MOBILE_NUMBER", payload: e.target.value })}
      />
      <br />

      <input
        type="text"
        value={formData.school}
        placeholder="enter school"
        onChange={(e) => setFormData({ type: "SET_SCHOOL", payload: e.target.value })}
      />
      <br />

      <button onClick={() => console.log(formData)}>Set Form Data</button>
    </div>
  )
}

export default UseReducerHook