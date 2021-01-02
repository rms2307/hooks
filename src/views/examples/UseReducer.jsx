import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login, logout } from "../../store/actions";


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user
                    ? (<span className='text'>{state.user.name}</span>)
                    : (<span className='text'>Não Logado</span>)}
            </div>
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'Robson de Moraes')}>Login</button>
                    <button className="btn"
                        onClick={() => logout(dispatch)}>Logout</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}> +2 </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}> x7 </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}> /25 </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberInt' })}> ParseInt </button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: 10 })}> Num N </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
