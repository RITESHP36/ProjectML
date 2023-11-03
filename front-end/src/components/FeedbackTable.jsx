// FeedbackTable.js
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function FeedbackTable() {
	const [feedbackData, setFeedbackData] = useState([]);

	const [password, setPassword] = useState("");
	const [isPasswordEntered, setIsPasswordEntered] = useState(false);

	function encrypt(text, key) {
		let result = "";
		for (let i = 0; i < text.length; i++) {
			const charCode = text.charCodeAt(i);
			const keyChar = key.charCodeAt(i % key.length);
			const encryptedChar = String.fromCharCode(
				((charCode ^ keyChar) % 26) + 97
			);

			result += encryptedChar;
		}
		return result;
	}

	const correctPassword = "omenxopnt"; 
	function checkPassword(inputPassword) {
		const obfuscatedInput = encrypt(inputPassword,"123");
        console.log(obfuscatedInput)
		return obfuscatedInput === correctPassword;
	}

	const handlePasswordSubmit = () => {
		if (checkPassword(password)) {
			setIsPasswordEntered(true);
			toast.success("Access Granted!");
		} else {
			toast.error("Incorrect password. Please try again.");
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handlePasswordSubmit();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	// Define a schema that mirrors the MongoDB collection schema
	const feedbackSchema = {
		regno: "string",
		sem: "string",
		subject: "string",
		assigned_prof: "string",
		rating: "string",
		recommended_prof: "string",
	};

	useEffect(() => {
		// Fetch feedback data from your API
		fetch("https://project-ml-azure.vercel.app/api/get-feedback")
			.then((response) => response.json())
			.then((data) => {
				// Ensure the fetched data conforms to the schema
				const validatedData = validateData(data, feedbackSchema);
				setFeedbackData(validatedData.reverse());
			})
			.catch((error) => console.error("Error fetching feedback:", error));
	}, []);

	// Function to validate and structure the fetched data according to the schema
	function validateData(data, schema) {
		return data.map((entry) => {
			const validatedEntry = {};
			for (const field in schema) {
				validatedEntry[field] = entry[field] || "N/A";
			}
			return validatedEntry;
		});
	}

	return (
		<div>
			<h1 className="text-2xl font-bold text-center my-8">Feedback Entries</h1>
			{isPasswordEntered ? (
				<div className="">
					<table className="min-w-full border border-gray-400">
						<thead className="bg-gray-200">
							<tr>
								<th className="border border-gray-200 py-2 px-4">
									Registration Number
								</th>
								<th className="border border-gray-200 py-2 px-4">Semester</th>
								<th className="border border-gray-200 py-2 px-4">Subject</th>
								<th className="border border-gray-200 py-2 px-4">
									Assigned Professor
								</th>
								<th className="border border-gray-200 py-2 px-4">Rating</th>
								<th className="border border-gray-200 py-2 px-4">
									Recommended Professor
								</th>
							</tr>
							<tr className="md:hidden">
								<th className="border border-gray-200 py-2 px-4">
									Assigned Professor
								</th>
								<th className="border border-gray-200 py-2 px-4">Rating</th>
								<th className="border border-gray-200 py-2 px-4">
									Recommended Professor
								</th>
							</tr>
						</thead>
						<tbody>
							{feedbackData.map((feedback, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
								>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.regno}
									</td>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.sem}
									</td>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.subject}
									</td>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.assigned_prof}
									</td>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.rating}
									</td>
									<td className="border border-gray-200 py-2 px-4">
										{feedback.recommended_prof}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				// Password input modal for non-authorized users
				<div className="fixed inset-0 flex items-center justify-center">
					<div className="bg-white p-4 shadow-md rounded-md max-w-md">
						<h2 className="text-2xl font-bold mb-4">Enter Password</h2>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="border border-gray-300 p-2 w-full mb-4"
						/>
						<button
							onClick={handlePasswordSubmit}
							className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
						>
							Submit
						</button>
					</div>
				</div>
			)}

			<Toaster />
		</div>
	);
}

export default FeedbackTable;
