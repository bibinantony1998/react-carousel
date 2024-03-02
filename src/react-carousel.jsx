import React, { useState } from "react";
export const ReactCarousel = (props) => {
	console.log("test", props);
	const [page, setPage] = useState(0);
	return (
		<div>
			<div>{props.children.slice(page, page + props.pageSize)}</div>
			<button
				disabled={page === 0}
				onClick={() => setPage(page - props.pageSize)}
			>
				prev
			</button>
			<button
				disabled={props.children.length - props.pageSize === page}
				onClick={() => setPage(page + props.pageSize)}
			>
				next
			</button>
		</div>
	);
};
