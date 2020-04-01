import React, { useContext } from 'react';
import Login from './login/login'
import myContext from './context/context'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
const Index = () => {
    let { state } = useContext(myContext)
    let { islogin, name } = state
    return (
        <BrowserRouter>
            {
                islogin ? <h1>欢迎：{name}</h1> : <Login />
            }
        </BrowserRouter>
    );
};
export default Index;