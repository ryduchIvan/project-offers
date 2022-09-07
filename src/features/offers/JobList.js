import { JobItem } from "./JobItem";
import { useSelector } from "react-redux";
import { selectFiltres } from "../filtres/filteres-slice";
import { useDispatch } from "react-redux";
import { addFilter } from "../filtres/filteres-slice";
import { filtredOffers } from "./slice-offers";
function JobList(params) {
	const filtres = useSelector(selectFiltres);
	const offers = useSelector(store => filtredOffers(store, filtres));
	const dispatch = useDispatch();
	const addFilterForOffer = (filter) => {
		dispatch(addFilter(filter));
	};
	console.log(offers);
	return (
		<div className="job-list">
			{offers.map((offer) => (
				<JobItem
					key={offer.id}
					{...offer}
					addFilterForOffer={addFilterForOffer}
				/>
			))}
		</div>
	);
}

export { JobList };