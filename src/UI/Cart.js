function Cart(props) {
	const { className, isFeatured, children } = props;
	return (
		<div
			className={`card${isFeatured ? " card--featured" : ""}${className ? " " + className : ""
				}`}
		>
			{children}
		</div>
	);
}

export { Cart };
