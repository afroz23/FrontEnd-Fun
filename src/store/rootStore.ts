import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';
import globalReducer from './slices/globalSlice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer: any = combineReducers({
	user: userReducer,
	global: globalReducer
});

type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export { store, persistor, type RootState };
