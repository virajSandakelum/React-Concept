import { useReducer, useState } from "react";


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
  | { type: "SET_SCHOOL"; payload: string }
  | { type: "SET_ARRAY", payload: StateTypes  };


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
      case "SET_ARRAY":
        return {...action.payload}
    default:
      return state
  }
}

const UseReducerHook = () => {
  const [formData, setFormData] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    school: "",
  });
  const [formDataArray, setFormDataArray] = useState<StateTypes[]>([]);

  const handleSubmitFormData = () => {
    setFormDataArray([...formDataArray, formData])
    setFormData({ type: "SET_ARRAY", payload: { firstName: "", lastName: "", mobileNumber: "", school: "" } });
  }


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

      <button onClick={handleSubmitFormData}>Set Form Data</button>


      <h3>Form Data Array:</h3>
      <ul>
        {formDataArray.map((data, index) => (
          <li key={index}>
            {data.firstName} {data.lastName}, {data.mobileNumber}, {data.school}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseReducerHook