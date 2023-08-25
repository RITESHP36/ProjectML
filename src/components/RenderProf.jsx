import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

import maindata from "../../public/new.js";

const RenderProf = ({ batch, stream, sem }) => {
	const [prof, setProf] = useState();

	const [streams, setStreams] = useState([]);
	const [sems, setSems] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [profs, setProfs] = useState([]);

	useEffect(() => {
		const selectedBatch = maindata.find((item) => item.name == batch);
		if (selectedBatch) {
			setStreams(selectedBatch.stream);
		}
	}, [batch]);

	useEffect(() => {
		// Access 'streams' here, after the state update from the previous useEffect has taken effect.
		const selectedStream = streams.find((item) => item.name == stream);
		if (selectedStream) {
			setSems(selectedStream.sem); // Assuming 'sem' is a number or string.
		}
	}, [streams, stream]);

	// Now you can use another useEffect for updating 'subjects' and 'profs' based on 'sems'.
	useEffect(() => {
		// Access 'sems' here, after the state update from the previous useEffect has taken effect.
		const selectedSem = sems.find((item) => item.id == sem);
		if (selectedSem) {
			setSubjects(selectedSem.subjects);
			// setProfs(selectedSem.subjects[0].prof); // You might want to set the initial value for 'profs' based on the first subject's professors.
		}
	}, [sems, sem]);

	return (
		
		<div className="bg-white p-4 rounded-lg w-4/6 mx-auto ">
			<div className="">
				<p className="text-xl font-medium text-neutral-600 text-center">
					Select your Professor from the list and provide Feedback
				</p>
			</div>
			<div className="flex flex-col gap-2 py-4">
				{subjects.map((subjectItem, index) => (
					<div key={index} className="grid grid-cols-5">
						{/* Render specific information related to 'semItem' */}
						<div className="">
							<p className="font-medium">{subjectItem.name}</p>
							<p className="">{subjectItem.id}</p>
						</div>
						<select name="" id="" value={prof}>
							<option value="" disabled selected>
								{subjectItem.id} Prof.
							</option>

							{subjectItem.prof.map((profItem, index) => (
								<option key={index} value={prof}>
									{/* Render specific information related to 'profItem' */}
									{profItem.name}
								</option>
							))}
						</select>
						<div className="flex justify-center items-center">
							<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
						</div>
						<div className="h-full items-center flex">
							<select name="" id="" value={prof}>
								<option value="" disabled selected>
									Recommend a Prof.
								</option>

								{subjectItem.prof.map((profItem, index) => (
									<option key={index} value={prof}>
										{profItem.name}
									</option>
								))}
							</select>
						</div>
						<div className="flex justify-center items-center hover:bg-red-500 hover:text-white">
							<button className="border-2 border-red-500 text-xl font-bold text-red-500 py-1 px-2 rounded-lg">Clear</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RenderProf;
