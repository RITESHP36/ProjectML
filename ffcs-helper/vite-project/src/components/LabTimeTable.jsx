import React from "react";

const LabTimeTable = ({ data }) => {
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
	const lunch = ["L", "U", "N", "C", "H"];
	const timing = [
		"02:00-02:50",
		"02:50-03:40",
		"03:50-04:40",
		"04:40-05:30",
		"05:40-06:30",
		"06:30-07:20",
	];
	const rows = ["0", "1", "2", "3", "4"];
	const columns = ["0", "1", "2", "3", "4", "5"];

	return (
		<div>
			<table className="border-2 shadow-lg">
				<thead>
					<tr className="bg-neutral-300 text-xl border-2">
						<th className="border-2"></th>
						{columns.map((column) => (
							<th
								key={column}
								className="border-2 font-semibold px-1 text-base"
							>{`${timing[parseInt(column)]}`}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row}>
							<td className="px-4 py-1 border-l-2 border-r-2">{`${
								lunch[parseInt(row)]
							}`}</td>
							{columns.map((column) => (
								<td key={column} className="px-4 py-1 border-2 text-xs">
									{data[`1${row}${column}`]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default LabTimeTable;
