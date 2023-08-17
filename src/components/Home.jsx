import React, { useState } from "react";
import RenderProf from "./RenderProf";

const StudentForm = () => {
	const [numSubjects, setNumSubjects] = useState(0);
	const [subjectInputs, setSubjectInputs] = useState([]);

	const handleGenerateSubjects = () => {
		const newSubjectInputs = Array.from({ length: numSubjects }, (_, index) => (
			<div key={index} className="flex flex-col md:flex-row md:space-x-4 mb-6">
				<div className="w-full md:w-1/2">
					<h2 className="text-lg font-semibold mb-2">Subject {index + 1}:</h2>
					<input
						type="text"
						className="w-full p-2 border rounded mb-2"
						placeholder={`Subject ${index + 1}`}
					/>
					<select className="w-full p-2 border rounded mb-2">
						<option disabled defaultValue>
							Select Teacher
						</option>
						<option>Teacher A</option>
						<option>Teacher B</option>
						<option>Teacher C</option>
					</select>
				</div>
				<div className="w-full md:w-1/2">
					<div className="mb-2">
						<label className="block mb-1">Rating:</label>
						<div className="flex items-center">
							{[1, 2, 3, 4, 5].map((num) => (
								<span key={num} role="img" aria-label="Star" className="mr-1">
									⭐
								</span>
							))}
						</div>
					</div>
					<div>
						<label className="block mb-1">Best Teacher:</label>
						<select className="w-full p-2 border rounded">
							<option disabled defaultValue>
								Best Teacher
							</option>
							<option>Teacher A</option>
							<option>Teacher B</option>
							<option>Teacher C</option>
						</select>
					</div>
				</div>
			</div>
		));

		setSubjectInputs(newSubjectInputs);
	};

  return (
    <div className="">
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Student Registration</h1>
        <div className="mb-4">
          <label className="block text-sm mb-1">Select Year:</label>
          <select className="w-full p-2 border rounded">
            <option disabled defaultValue>
              Select Year
            </option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Second Row:</h2>
          <select className="w-full p-2 border rounded">
            <option disabled defaultValue>
              Select Course Branch
            </option>
            <option>Computer Science</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
          </select>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Third Row:</h2>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter Student ID"
          />
        </div>

        <div className="">
          <RenderProf show="true" pack="22bai" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Fourth Row:</h2>
          <input
            type="number"
            value={numSubjects}
            onChange={(e) => setNumSubjects(e.target.value)}
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Number of Subjects"
          />
          <button
            onClick={handleGenerateSubjects}
            className="block w-full mt-2 bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none"
          >
            Generate Subjects
          </button>
        </div>
        <div className="mt-4">{subjectInputs}</div>
        <div>
          <label className="block text-sm mb-1">Number of Subjects:</label>
          <input
            type="number"
            value={numSubjects}
            onChange={(e) => setNumSubjects(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Number of Subjects"
          />
        </div>
        <button
          onClick={handleGenerateSubjects}
          className="w-full mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none"
        >
          Generate Subjects
        </button>
        <div className="mt-4">{subjectInputs}</div>
      </div>
    </div>
    </div>
  );
};



export default StudentForm;