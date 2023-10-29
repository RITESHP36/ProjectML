import React from "react";

const TimeTable = ({ morning_slots, evening_slots, data }) => {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	const timing = [
		"08:00-08:50",
		"08:55-05:45",
		"09:50-10:40",
		"10:45-11:35",
		"11:45-12:30",
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
	const morning_col = ["0", "1", "2", "3", "4", "5"];
	const evening_col = ["0", "1", "2", "3", "4", "5"];
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
		"12",
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
							{morning_col.map((column) => (
								<td
									key={column}
									id="${row}${column}"
									className=" h-20 bg-amber-200 border-2 text-xs text-center "
								>
									<div className="grid grid-rows-1  gap-1 h-full ">
										<div className="bg-yellow-300 h-10 flex flex-col justify-center items-center">
											{morning_slots[`${row}${column}`]}
											<p className="">{data[`${row}${column}`]}</p>
										</div>
										<div className="h-10 flex flex-col justify-center items-center">
											{morning_slots[`L${row}${column}`]}
											<p className="overflow-hidden">{data[`L${row}${column}`]}</p>
										</div>
									</div>
								</td>
							))}
							<td className="px-2 py-1 border-l-2 border-r-2">{`${
								lunch[parseInt(row)]
							}`}</td>
							{evening_col.map((column) => (
								<td
									key={column}
									className=" h-20 bg-amber-200 border-2 text-xs text-center "
								>
									<div className="grid grid-rows-1 gap-1 ">
										<div className="bg-yellow-300 h-10 flex flex-col justify-center items-center">
											{evening_slots[`1${row}${column}`]}
											<p className="overflow-hidden">{data[`1${row}${column}`]}</p>
										</div>
										<div className="h-10 flex flex-col justify-center items-center">
											{evening_slots[`L1${row}${column}`]}
											<p className="overflow-hidden">{data[`L1${row}${column}`]}</p>
										</div>
									</div>
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
