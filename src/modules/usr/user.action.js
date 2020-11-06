import React from 'react'
import { createAction, handleActions } from 'redux-action'
import {userService} from './user.Service'


export const userConstants = {
    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
    LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE',

}

let sessionUser = JSON.parse(sessionStorage.getItem('strUser'))
export const loginSuccess = createAction(userConstants.LOGIN_SUCCESS)
export const registerSuccess = createAction(userConstants.REGISTER_SUCCESS)

const initialState = {
    user: {},
    loggedIn: false

}

// Reducer

const userReducer = handleAction(
    { [userConstants.LOGIN_SUCCESS] : (state, action) => ({ loggedIn: true, user: action.user})} ,
    { [userConstants.REGISTER_SUCCESS] : (state, action) => ({ loggedIn: true, user: action.user})} ,
    initialState 
)

// Actions

export const userActions = {
    register, login
}

function register(user){
    return dispatch => {
        dispatch(request(user))

        userService.register(user)
            .then(
                user => {},
                error => {}
            )
    }
    function request(user) { return { type: UserConstants.REGISTER_REQUEST, user} }
    function success(user) { return { type: UserConstants.REGISTER_SUCESS, user} }
    function failure(error) { return { type: UserConstants.REGISTER_FAILURE, error} }
}

function login(user){
    return dispatch => {
        dispatch(request(user))

        userService.login(user)
            .then(
                user => {},
                error => {}
            )
    }
    function request(user) { return { type: UserConstants.LOGIN_REQUEST, user} }
    function success(user) { return { type: UserConstants.LOGIN_SUCESS, user} }
    function failure(error) { return { type: UserConstants.LOGIN_FAILURE, error} }
}
