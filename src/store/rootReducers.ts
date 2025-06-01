import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from '@/store/slices/globalSlice';
import userReducer from '@/store/slices/userSlice';

const rootReducers = combineReducers({
	global: globalReducer,
	user: userReducer
});

export default rootReducers;
