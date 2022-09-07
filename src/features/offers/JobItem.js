import { Badge } from "../../UI/Badge";
import { Cart } from "../../UI/Cart";
import { Stack } from "../../UI/Stack";
function JobItem(props) {
	const {
		company,
		logo,
		new: isNew,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		addFilterForOffer,
		tools
	} = props;
	const badges = [].concat(...tools, ...languages, role, level);
	return (
		<Cart isFeatured={featured}>
			<div className="job-position">
				<div className="job-position-info">
					<img src={logo} alt={logo} className="job-position-avatar" />
					<div className="job-position-body">
						<div className="job-postion-company">
							<h3>{company}</h3>
							{(isNew || featured) && (
								<Stack>
									{isNew && (
										<Badge variant="rounded" colorScheme="primary">
											NEW
										</Badge>
									)}
									{featured && (
										<Badge variant="rounded" colorScheme="dark">
											FEATURED
										</Badge>
									)}
								</Stack>
							)}
						</div>
						<h2 className="job-position-title">{position}</h2>
						<Stack>
							<Badge className="job-position-meta">{location}</Badge>
							<Badge className="job-position-meta">{postedAt}</Badge>
							<Badge className="job-position-meta">{contract}</Badge>
						</Stack>
					</div>
				</div>
				<Stack>
					{badges.map((badges) => (
						<Badge
							key={badges}
							onClick={() => {
								addFilterForOffer(badges);
							}}
						>
							{badges}
						</Badge>
					))}
				</Stack>
			</div>
		</Cart>
	);
}

export { JobItem };
