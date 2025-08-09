import React, { useReducer } from "react";

// 1. Define State


type State = {
    name: string,
    age: number,
    address: {
        city: string,
        country: string;
    }
};

type Action = 
    | {type: 'UPDATE_NAME', payload: string}
    | {type: 'INCREMENT_AGE'}
    | {type: 'UPDATE_CITY', payload: string};

// create useReducer

const userReducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'UPDATE_NAME':
            return{...state, name: action.payload};
            break;
        case 'INCREMENT_AGE':
            return{...state, age: state.age + 1}
            break;
        case "UPDATE_CITY":
            return{...state,
                address: {
                    ...state.address,
                    city: action.payload,
                }
            };
            break;
        default:
            return state;
    }
}


const initialUserState: State = {
    name: 'Buyanaa',
    age: 22,
    address: {city: 'Ulaanbaatar', country: 'Mongolia'},
}

const ComplexUserProfile: React.FC = () => {
    // use reducer in your component
    const [state, dispatch] = useReducer(userReducer, initialUserState)

    return (
        <>
            <h3>Complex User profile</h3>
            <p>
                <strong>Name: </strong> {state.name}
            </p>
            <p>
                <strong>Age: </strong> {state.age}
            </p>
            <p>
                <strong>City: </strong> {state.address.city}
            </p>
            <hr />
            <input type="text"
            placeholder="New Name"
            onChange={(e) => {
                dispatch({
                    type: 'UPDATE_NAME',
                    payload: e.target.value
                })
            }}
            />
            <input type="text"
            placeholder="New City"
            onChange={(e) => {
                dispatch({
                    type: 'UPDATE_CITY',
                    payload: e.target.value,
                })
            }}
            />
            <button onClick={() => {
                dispatch({
                    type: 'INCREMENT_AGE',
                })
            }}>Increment Age</button>
        </>
    )
}

export default ComplexUserProfile;