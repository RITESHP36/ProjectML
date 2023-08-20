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
		<div className="flex flex-col items-center p-8 bg-black h-screen">
			<h1 className="py-4 text-5xl font-bold text-white">
				Feedback Collection
			</h1>
			
			<form onSubmit={handleSubmit} className="border-2 p-10 bg-blue-50 shadow-md shadow-blue-500/50 rounded-xl">
			<p className="text-neutral-600 font-medium text-xl flex justify-center ">Enter your Registration Number</p>
				<div className="flex gap-4 py-4  justify-center items-center ">
					<div className="rounded-lg shadow-md p-2 flex justify-center items-center ">
						<select name="" id="" value={batch} onChange={changeBatch} className="text-center bg-blue-50">
							<option value="" disabled selected>
								Select Batch
							</option>
							{branchdata.map((item, index) => (
								<option key={index} value={item.batch}>
									{item.batch}
								</option>
							))}
						</select>
					</div>
					<div className="rounded-lg shadow-md p-2 flex justify-center items-center">
						<select name="" id="" value={stream} onChange={changeStream} className="text-center bg-blue-50">
							<option value="" disabled selected>
								Select Branch
							</option>
							{streams.map((item, index) => (
								<option value={item} key={index}>
									{item}
								</option>
							))}
						</select>
					</div>
					<div className="rounded-lg shadow-md p-2 flex justify-center items-center">
						<input
							type="number"
							id="numberInput"
							value={regNo || ""}
							pattern="\d{4}"
							min="1000"
							max="9999"
							required
							onChange={changeRegNo}
							className="text-center bg-blue-50"
						/>
					</div>
				</div>
				<div className="">
					<div className="rounded-lg shadow-md p-2 flex justify-center px-4 items-center">
						<select name="" id="" value={sem} onChange={changeSem} className="bg-blue-50 ring-0">
							<option value="" disabled selected>
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
				<div className="flex py-4 justify-center">
					<button type="submit" className="px-4 py-2 font-bold bg-blue-500 text-white shadow-lg shadow-blue-500/50 rounded-lg hover:text-blue-500 hover:bg-white duration-300">Render Professors</button>
				</div>
			</form>
			<div className="">
				{formSubmitted && (
					<div className="w-screen bg-black mt-8 pb-20">
						<RenderProf batch={batch} stream={stream} sem={sem} />
					</div>
				)}
			</div>
		</div>
	);
};

export default StudentForm;
