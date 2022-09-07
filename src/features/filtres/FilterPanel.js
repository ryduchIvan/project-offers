import { Badge } from "../../UI/Badge";
import { Cart } from "../../UI/Cart";
import { Stack } from "../../UI/Stack";
import { selectFiltres, clearFilter, removeFilter } from "./filteres-slice";
import { useSelector, useDispatch } from "react-redux";
function FilterPanel(props) {
	const filtres = useSelector(selectFiltres);
	const dispatch = useDispatch();
	console.log(filtres);
	if (filtres.length === 0) {
		return null;
	}
	return (
		<Cart className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack>
					{filtres.map((filter) => (
						<Badge
							variant="clearable"
							key={filter}
							onClick={() => {
								dispatch(removeFilter(filter));
							}}
						>
							{filter}
						</Badge>
					))}
				</Stack>
				<button
					className="link"
					onClick={() => {
						dispatch(clearFilter());
					}}
				>
					Clear
				</button>
			</div>
		</Cart>
	);
}

export { FilterPanel };