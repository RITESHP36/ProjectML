import React, { useState, useEffect } from "react";
import maindata from "../../public/maindata.js";

const RenderProf = ({ batch, stream, sem }) => {


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
		<div>
			<div className="flex">
				<p className="">{batch}</p>
				<p className="">{stream}</p>
				<p className="">{sem}</p>
			</div>
			<div className="flex flex-col">
				{/* Render additional information here */}
				{/* For example, you might map over 'streams', 'sems', or 'subjects' */}
				{streams.map((streamItem, index) => (
					<div key={index}>
						{/* Render specific information related to 'streamItem' */}
						{streamItem.name}
					</div>
				))}
				{sems.map((semItem, index) => (
					<div key={index}>
						{/* Render specific information related to 'semItem' */}
						{semItem.name}
					</div>
				))}
				{subjects.map((subjectItem, index) => (
					<div key={index}>
						{/* Render specific information related to 'semItem' */}
						{subjectItem.name} {subjectItem.id}
						{
							subjectItem.prof.map((profItem, index) => (
								<div key={index}>
									{/* Render specific information related to 'profItem' */}
									{profItem.name}
								</div>
							))
						}
					</div>
				))}
			</div>
		</div>
	);
};

export default RenderProf;
