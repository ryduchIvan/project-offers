import { createSlice } from "@reduxjs/toolkit";

export const SliceFiltres = createSlice({
	name: "filter/",
	initialState: [],
	reducers: {
		addFilter: (state, { type, payload }) => {
			if (!state.includes(payload)) {
				state.push(payload)
			} else {
				return state
			}
		},
		removeFilter: (state, { type, payload }) => {
			return state.filter((filter) => filter !== payload)
		},
		clearFilter: (state, { type, payload }) => {
			return []
		}
	}
})

export const { addFilter, removeFilter, clearFilter } = SliceFiltres.actions;

export const filtresReducer = SliceFiltres.reducer;

export const selectFiltres = store => store.filtres;