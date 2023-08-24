import TimeTable from "./components/TimeTable";
import LabTimeTable from "./components/LabTimeTable";
import React from "react";
import alldata from "./data/alldata";

function App() {
	const timetableData = {
		"00": "A1",
		"01": "F1",
		"02": "D1",
		"03": "TB1",
		"04": "TG1",
		10: "B1",
		11: "G1",
		12: "E1",
		13: "TC1",
		14: "TAA1",
		20: "C1",
		21: "A1",
		22: "F1",
		23: "TD1",
		24: "TBB1",
		30: "D1",
		31: "B1",
		32: "G1",
		33: "TE1",
		34: "TCC1",
		40: "E1",
		41: "C1",
		42: "TA1",
		43: "TF1",
		44: "TDD1",
	};
	const labTimetableData = {
		100: "L31",
		101: "L32",
		102: "L33",
		103: "L34",
		104: "L35",
		105: "L36",
		110: "L37",
		111: "L38",
		112: "L39",
		113: "L40",
		114: "L41",
		115: "L42",
		120: "L43",
		121: "L44",
		122: "L45",
		123: "L46",
		124: "L47",
		125: "L48",
		130: "L49",
		131: "L50",
		132: "L51",
		133: "L52",
		134: "L53",
		135: "L54",
		140: "L55",
		141: "L56",
		142: "L57",
		143: "L58",
		144: "L59",
		145: "L60",
	};
	const tt = {};

	return (
		<div>
			<h1 className="text-center text-3xl font-bold">
				FFCS TIME TABLE GENERATOR
			</h1>
			{alldata.map((data,index) => (
				<div key={index} className="">
					<div className="flex justify-center h-1/2   ">
						<TimeTable
							thydata={timetableData}
							labdata={labTimetableData}
							data={data}
						/>
					</div>
					<div className="border-black w-full border-2 h-2 my-2 bg-neutral-400 border-dashed">-</div>
				</div>
			))}
		</div>
	);
}

export default App;
