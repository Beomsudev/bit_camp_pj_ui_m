import userReducer from './usr/user.action'
import movieReducer from './mov/movie.action'
import ratingReducer from './rat/rating.action'
import reviewReducer from './rev/review.action'


import { combineReducers} from 'redux'
const rootReducer = combineReducers({
    userReducer, movieReducer, ratingReducer
})
export { default as userService} from './usr/user.service'