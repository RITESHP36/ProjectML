import React, { useState } from "react";
import RenderProf from "./RenderProf";
import branchdata from "../../public/branchdata";

const StudentForm = () => {
	
	const [batch, setBatch] = useState();
	const [stream, setStream] = useState();
	const [regNo, setRegNo] = useState();
	const [sem, setSem] = useState();

	const [streams, setStreams] = useState([]);
	const [sems, setSems] = useState([]);

	const changeBatch = (e) => {
		setBatch(e.target.value);
		setStreams(branchdata.find((item) => item.batch == e.target.value).streams);
		setSems(branchdata.find((item) => item.batch == e.target.value).sem);
	};

	const changeStream = (e) => {
		setStream(e.target.value);
	};

	const changeRegNo = (e) => {
		setRegNo(e.target.value);
	};

	const changeSem = (e) => {
		setSem(e.target.value);
		console.log(batch, stream, regNo, e.target.value); // Fix branch to batch
	};

	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		setFormSubmitted(true);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<h1 className="mb-4 text-xl font-semibold text-gray-700">
				Feedback Collection
			</h1>
			<p className="">Enter your Registration Number</p>
			<form onSubmit={handleSubmit}>
				<div className="flex space-y-4">
					<div className="flex flex-col space-y-1">
						<select name="" id="" value={batch} onChange={changeBatch}>
							<option value="" disabled>
								Select Batch
							</option>
							{branchdata.map((item, index) => (
								<option key={index} value={item.batch}>
									{item.batch}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col space-y-1">
						<select name="" id="" value={stream} onChange={changeStream}>
							<option value="" disabled>
								Select Branch
							</option>
							{streams.map((item, index) => (
								<option value={item} key={index}>
									{item}
								</option>
							))}
						</select>
					</div>
					<div className="">
						<input
							type="number"
							id="numberInput"
							value={regNo || ""}
							pattern="\d{4}"
							min="1000"
							max="9999"
							required
							onChange={changeRegNo}
						/>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col space-y-1">
						<select name="" id="" value={sem} onChange={changeSem}>
							<option value="" disabled>
								Select Semester
							</option>
							{sems.map((item) => (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="">
					<button type="submit">Submit</button>
				</div>
			</form>
			<div className="">
				{formSubmitted && (
					<div className="">
						<RenderProf batch={batch} stream={stream} sem={sem} />
					</div>
				)}
			</div>
		</div>
	);
};

export default StudentForm;
