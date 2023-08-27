import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import maindata from "../../public/new.js";

const RenderProf = ({ batch, stream, sem, regno }) => {
	const [prof, setProf] = useState();

	const [streams, setStreams] = useState([]);
	const [sems, setSems] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [profs, setProfs] = useState([]);

	//selected streams, sems, subjects, profs
	const initialListLength = subjects.length;
	const [selectedProfList, setSelectedProfList] = useState(
		new Array(initialListLength).fill("")
	);
	const [ratingList, setRatingList] = useState(
		new Array(initialListLength).fill(2.5)
	);
	const [recommendProfList, setRecommendProfList] = useState(
		new Array(initialListLength).fill("")
	);

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

	// Function to update the selected professor for a specific subject
	const handleSelectedProfChange = (idx, selectedProffesor) => {
		setSelectedProfList((prevSelectedProfList) => {
			const updatedSelectedProfList = [...prevSelectedProfList];
			updatedSelectedProfList[idx] = selectedProffesor;
			return updatedSelectedProfList;
		});
		// console.log(selectedProfList);
	};

	// Function to update the ratings for a specific subject
	const handleRatingChange = (idx, rating) => {
		setRatingList((prevRatingList) => {
			const updatedRatingList = [...prevRatingList];
			updatedRatingList[idx] = rating;
			return updatedRatingList;
		});
		// console.log(ratingList);
	};

	// Function to update the recommended professor for a specific subject
	const handleRecommendedProfChange = (idx, recommendedProfessor) => {
		setRecommendProfList((prevRecommendProfList) => {
			const updatedRecommendProfList = [...prevRecommendProfList];
			updatedRecommendProfList[idx] = recommendedProfessor;
			return updatedRecommendProfList;
		});
		// console.log({ selectedProfList, ratingList, recommendProfList });
	};

	// Function to submit the form
	const [formError, setFormError] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			selectedProfList.length !== initialListLength ||
			ratingList.length !== initialListLength ||
			recommendProfList.length !== initialListLength ||
			selectedProfList.includes("") ||
			ratingList.includes(undefined) ||
			recommendProfList.includes("")
		) {
			console.log("Update all fields!"); // Set form submission error
		} else {
			for (let i = 0; i < subjects.length; i++) {
				const currentSubject = subjects[i];
				const currentFeedback = {
					regno: regno,
					sem: sem,
					subject: currentSubject.name,
					assigned_prof: selectedProfList[i],
					rating: ratingList[i],
					recommended_prof: recommendProfList[i],
				};
				console.log(currentFeedback);
				// Send this currentFeedback object to the backend API for storage
				try {
					const response = await axios.post(
						"http://localhost:3000/api/submit-feedback",
						currentFeedback
					);
					console.log("Feedback submitted successfully!");
					console.log(response.data); // Assuming the backend responds with some feedback confirmation
				} catch (error) {
					console.error("Error submitting feedback:", error);
				}
			}
		}
	};

	return (
		<div className="bg-white p-4 rounded-lg w-4/6 mx-auto ">
			<div className="">
				<p className="text-xl font-medium text-neutral-600 text-center">
					Select your Professor from the list and provide Feedback
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2 py-4">
					{subjects.map((subjectItem, idx) => (
						<div key={idx} className="grid grid-cols-5">
							{/* Render specific information related to 'semItem' */}
							<div className="">
								<p className="font-medium">{subjectItem.name}</p>
								<p className="">{subjectItem.id}</p>
							</div>
							<select
								name=""
								id=""
								value={prof}
								onChange={(e) => handleSelectedProfChange(idx, e.target.value)}
							>
								<option value="" disabled selected>
									{subjectItem.id} Prof.
								</option>
								{subjectItem.prof.map((profItem, index) => (
									<option key={index} value={profItem.name}>
										{/* Render specific information related to 'profItem' */}
										{profItem.name}
									</option>
								))}
							</select>
							<div className="flex justify-center items-center">
								<Rating
									name="half-rating"
									defaultValue={2.5}
									precision={0.5}
									onChange={(event, newValue) =>
										handleRatingChange(idx, newValue)
									}
								/>
							</div>
							<select
								name=""
								id=""
								value={prof}
								onChange={(e) =>
									handleRecommendedProfChange(idx, e.target.value)
								}
							>
								<option value="" disabled selected>
									Recommend a Prof.
								</option>
								{subjectItem.prof.map((profItem, index) => (
									<option key={index} value={profItem.name}>
										{profItem.name}
									</option>
								))}
							</select>
							<div className="flex justify-center items-center ">
								<button className="border-2 border-red-500 text-xl font-bold text-red-500 py-1 px-2 rounded-lg hover:bg-red-500 hover:text-white duration-300">
									Clear
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="">
					<button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default RenderProf;
