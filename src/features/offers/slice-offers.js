import { createSlice } from "@reduxjs/toolkit";

export const SliceOffers = createSlice({
	name: "offers/",
	initialState: [],
	reducers: {
		addOffers: (state, { type, payload }) => {
			return payload;
		}
	}
})

export const offersReducer = SliceOffers.reducer;

export const selectOffers = store => store.offers;
export const filtredOffers = (state, filtres) => {
	if (filtres.length === 0) {
		return state.offers;
	}
	return state.offers.filter((offer) => {
		const offersBadges = [].concat(
			offer.role,
			offer.level,
			...offer.tools,
			...offer.languages
		);
		return filtres.every((filter) => offersBadges.includes(filter));
	});
}
export const { addOffers } = SliceOffers.actions;