import { useDispatch } from "react-redux";
import { removeFilter } from "../features/filtres/filteres-slice";
function Badge(props) {
	const {
		children,
		onClick,
		variant = "basic",
		colorScheme = "light",
		onClear
	} = props;
	return (
		<div
			className={`badge badge--${variant} badge--${colorScheme}`}
			onClick={onClick}
		>
			<span>{children}</span>
			{variant === "clearable" && (
				<div onClick={() => { }} className="badge-remover" >
					X
				</div>
			)}
		</div>
	);
}

export { Badge };