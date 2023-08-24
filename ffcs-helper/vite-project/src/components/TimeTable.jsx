import React from "react";


const TimeTable = ({ thydata, labdata ,data}) => {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	const timing = [
		"08:00-08:50",
		"08:55-05:45",
		"09:50-10:40",
		"10:45-11:35",
		"11:45-12:30",
		"",
		"02:00-02:50",
		"02:50-03:40",
		"03:50-04:40",
		"04:40-05:30",
		"05:40-06:30",
		"06:30-07:20",
	];
	const lunch = ["L", "U", "N", "C", "H"];
	const rows = ["0", "1", "2", "3", "4"];
	const thycolumns = ["0", "1", "2", "3", "4"];
	const labcolumns = ["0", "1", "2", "3", "4", "5"];
	const timingcol = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
	];

	return (
		<div>
			<table className="border-2 shadow-lg">
				<thead>
					<tr className="bg-neutral-300 ">
						<th className="font-bold px-1 ">Day/Time</th>
						{timingcol.map((column) => (
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
							<td className="px-2 py-1 border-2 font-semibold">{`${
								days[parseInt(row)]
							}`}</td>
							{thycolumns.map((column) => (
								<td
									key={column}
									id="${row}${column}"
									className="px-2 py-1 border-2 text-xs text-center"
								>
									
									{thydata[`${row}${column}`]}
									<p className=''>
										{data[`${row}${column}`]}
									</p>
								</td>
							))}
							<td className="px-2 py-1 border-l-2 border-r-2">{`${
								lunch[parseInt(row)]
							}`}</td>
							{labcolumns.map((column) => (
								<td
									key={column}
									className="px-2 py-1 border-2 text-xs text-center"
								>
									{labdata[`1${row}${column}`]}
									<p>
									{data[`1${row}${column}`]}
									</p>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TimeTable;
