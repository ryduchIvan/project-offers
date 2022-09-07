import { configureStore } from "@reduxjs/toolkit";
import { offersReducer } from "./features/offers/slice-offers";
import { filtresReducer } from "./features/filtres/filteres-slice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	offers: offersReducer,
	filtres: filtresReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
	devTools: true
})

export const persistor = persistStore(store);