const maindata = [
	// array of batches
	{
		name: 22,
		stream: [
			// array of streams under 22batch
			{
				name: "BCE",
				sem: [
					// array of semesters under BCE under 22batch
					{
						id: 1,
						name: "Fall semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT101P",
								name: "Calculus",
								// array of profs under BMAT101P under 1st sem of BCSE under 22batch
								prof: [
									{
                                        name:"Srutha Keerthi B",
                                    },
									{
                                        name:"Karan Kumar Pradhan",
                                    },
									{
										name:"Harshavarthini",
									},
								],
							},
                            {
								id: "BCHY101P",
								name: "Chemistry",
								// array of profs under BCHY101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name:"Ganesan",
									},
									{
										name: "Buthanapalli Ramakrishna",
									},
									{
										name: "Ilayaraja Perumal",
									},
								],
							},
                            {
								id: "BEEE101P",
								name: "Electrical and electronics",
								// array of profs under BEEE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Subashini M",
									},
									{
										name: "Umayal C",
									},
									{
                                        name:"Kuruseelan",
									},
								],
							},
                            {
								id: "BCSE101P",
								name: "Python",
								// array of profs under BMCSE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name:"Vatchala S",
									},
									{
										name:"Ganesh N",
									},
									{
										name:"Modigari Narendra",
									},
                                    
								],
							},
                            
						],
					},
                    {
						id: 2,
						name: "Winter semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT102P",
								name: "Differential tranformations",
								// array of profs under BMAT102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Hannah Grace G",
									},
									{
										name: "Revathi G K",
									},
									{
										name: "Radha S",
									},
									{
										name: "Vijay Kumar P",
									},
									{
										name: "Abhishek Kumar Singh",
									},
									{
										name: "David Raj",
									},
									{
										name: "Soumendu Roy",
									},
									{
										name: "Saroj Kumar Dash",
									},
									{
										name:"Lakshmanan S",
									},
									{
										name: "Sowndar Rajan",
									},
									{
										name: "Manimaran J",
									},
									{
										name: "Harshavarthini",
									},
									
								],
							},
                            {
								id: "BPHY102P",
								name: "PHYSICS",
								// array of profs under BPHY102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Vinitha G",
									},
									{
										name: "Manikandan",
									},
									{
										name: "R D Ethiraj",
									},
									{
										name:"Caroline Ponraj",
									},
									{
										name:"Gopinath Mundana",
									},
									{
										name:"Rajasekarakumar V",
									},
									{
										name:"Shalini M G",
									},
									{
										name:"Rishab Antosh B",
									},
									{
										name:"Ajitha B",
									},
									{
										name:"Justin Raj",
									},
									{
										name:"Punithavelan N",
									},
									{
										name:"Kathikeyan S",
									},
									{
										name:"Ram Kumar",
									},
									
								],
							},
                            {
								id: "BECE102P",
								name: "Digital systems design",
								// array of profs under BECE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Prathiba A",
									},
									{
										name: "Srivatsan K",
									},
									{
										name: "Gargi Raina",
									},
									{
										name: "Richa Dubey",
									},
									{
										name: "S Jacily Jemila",
									},
									{
										name: "Divya J",
									},
									{
										name: "Srimathi B",
									},
									{
										name: "Mohammed Aneesh",
									},
									{
										name: "KB Ajeyprasaat",
									},
									{
										name: "Prasanna Kumaar S",
									},
									{
										name: "Sunkara Pavani",
									},
									{
										name: "Srivatsan K",
									},
									{
										name: "Papanasam E",
									},
									{
										name: "Sourabh Paul",
									},
								],
							},
                            {
								id: "BCSE102P",
								name: "Object oriented programming",
								// array of profs under BMCSE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Vijayaprabhakaran K",
									},
									{
										name: "Ilavendhan A",
									},
                                    {
                                        name:"Vallidevi K",
                                    },
                                    {
                                        name:"Pankaja Lakshmi P",
                                    },
                                    {
                                        name:"S Jahangeer Sidiq",
                                    },
                                    {
                                        name:"Sendhil R",
                                    },
                                    {
                                        name:"S Bharathi raja",
                                    },
                                    {
                                        name:"Kavya Alluru",
                                    },
                                    {
                                        name:"Akhil Kumar",
                                    },
                                    {
                                        name:"Menaka Pushpa A",
                                    },
                                    {
                                        name:"T Raja Sree",
                                    },
                                    {
                                        name:"Sujithra Kanmani R",
                                    },
								],
							},
                            {
								id: "BENG102P",
								name: "Technical english",
								// array of profs under BENG102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Niranjana G",
									},
									{
										name: "David Paul S",
									},
									{
										name: "Bhuvaneshwari",
									},
									{
										name: "Sivakami B",
									},
									{
										name: "Manali Karmakar",
									},
									{
										name: "Ganesh Nagaraj",
									},
									{
										name: "Divya",
									},
									{
										name: "Devi Meenakshi",
									},
									{
										name: "Rajitha K",
									},
									{
										name: "Rashmi Rekha Borah",
									},
									{
										name: "S Vijayalakshmi",
									},
									{
										name: "Akaitab Mukherjee",
									},
									{
										name:"Samik Malla",
									},
									
								],
							},
                            
						],
					},
				],
			},
            {
				name: "BAI",
				sem: [
					// array of semesters under BCE under 22batch
					{
						id: 1,
						name: "Fall semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT101P",
								name: "Calculus",
								// array of profs under BMAT101P under 1st sem of BCSE under 22batch
								prof: [
									{
                                        name:"B J Balamurugan",
                                    },
									{
										name:"Rajesh Kumar Mohapatra",
									},
								],
							},
                            {
								id: "BCHY101P",
								name: "Chemistry",
								// array of profs under BCHY101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Lakoaji Satish",
									},
									{
										name: "Pritam Gosh",
									},
								],
							},
                            {
								id: "BEEE101P",
								name: "Electrical and electronics",
								// array of profs under BEEE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Hemavathy B",
									},
									{
										name: "Ashley Mary Tom",
									},
								],
							},
                            {
								id: "BCSE101P",
								name: "Python",
								// array of profs under BMCSE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name:"Revathi S",
									},
									{
										name:"Amrit Pal",
									},
                                    
								],
							},
                            
						],
					},
                    {
						id: 2,
						name: "Winter semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT102P",
								name: "Differential tranformations",
								// array of profs under BMAT102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Rajesh Kumar Maohapatra",
									},
									{
										name: "Revathi G K",
									},
									{
										name: "Radha S",
									},
									{
										name: "Berin Greeni A",
									},
									{
										name: "Abhishek Kumar Singh",
									},
									{
										name: "Nathiya N",
									},
									{
										name: "Harshavarthini",
									},
									{
										name: "Saroj Kumar Dash",
									},
									{
										name: "Poulomi De",
									},
									{
										name: "Sowndar Rajan",
									},
									{
										name: "Kalyan",
									},
									{
										name: "Prosenjit",
									},
									{
										name: "Ashis Bera",
									},
									
								],
							},
                            {
								id: "BPHY102P",
								name: "PHYSICS",
								// array of profs under BPHY102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Vinitha G",
									},
									{
										name: "Manikandan",
									},
									{
										name: "John kennedy L",
									},
									{
										name:"Caroline Ponraj",
									},
									{
										name:"Gopinath Mundana",
									},
									{
										name:"Rajasekarakumar V",
									},
									{
										name:"Atanu Dutta",
									},
									{
										name:"Swaathi P",
									},
									{
										name:"Ajitha B",
									},
									{
										name:"Justin Raj",
									},
									{
										name:"Satyanarayana Kumar Mallavarapu",
									},
									{
										name:"Kathikeyan S",
									},
									{
										name:"Ram Kumar",
									},
									{
										name:"Uthiram C",
									},
								],
							},
                            {
								id: "BECE102P",
								name: "Digital systems design",
								// array of profs under BECE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Deepa M",
									},
									{
										name: "Ashok",
									},
									{
										name: "Subbulekshmi D",
									},
									{
										name: "Deepa T",
									},
									{
										name: "Sri Ramalakshmi P",
									},
									{
										name: "Mohammed Imran A",
									},
									{
										name: "Meera P S",
									},
									{
										name: "Ravi Tiwari",
									},
									{
										name: "Nithya Venkatesan",
									},
									{
										name: "Jamuna K",
									},
									{
										name: "Angeline Ezhilarasi G",
									},
									{
										name: "Kanimozhi G",
									},
									{
										name: "Sri Revathi B",
									},
									{
										name: "Angalaeswari S",
									},
									
								],
							},
                            {
								id: "BCSE102P",
								name: "Object oriented programming",
								// array of profs under BMCSE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Suganeshwari",
									},
									{
										name: "Ilavendhan A",
									},
                                    {
                                        name:"Dhanalakshmi R",
                                    },
                                    {
                                        name:"Suseela S",
                                    },
                                    {
                                        name:"Pavithra S",
                                    },
                                    {
                                        name:"Sendhil R",
                                    },
                                    {
                                        name:"Vatchala S",
                                    },
                                    {
                                        name:"Kavya Alluru",
                                    },
                                    {
                                        name:"Akhil Kumar",
                                    },
                                    {
                                        name:"Menaka Pushpa A",
                                    },
                                    {
                                        name:"T Raja Sree",
                                    },
                                    {
                                        name:"Sujithra Kanmani R",
                                    },
								],
							},
                            {
								id: "BENG102P",
								name: "Technical english",
								// array of profs under BENG102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Divya",
									},
									{
										name: "Samik Malla",
									},
									{
										name: "Devi Meenakshi",
									},
									{
										name: "Chithra G K",
									},
									{
										name: "Alan G",
									},
									{
										name: "Rajitha K",
									},
									{
										name: "Ajith I",
									},
									{
										name: "Manali Karmakar",
									},
									{
										name: "S Vijayalakshmi",
									},
									{
										name: "Niranjana",
									},
									{
										name: "SivakamI B",
									},
									{
										name: "Rajasekaran V",
									},
									
								],
							},
                            
						],
					},
				],
			},
			{
				name: "BRS",
				sem: [
					// array of semesters under BCE under 22batch
					{
						id: 1,
						name: "Fall semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT101P",
								name: "Calculus",
								// array of profs under BMAT101P under 1st sem of BCSE under 22batch
								prof: [
									{
                                        name:"Soumendu Roy",
                                    },
								],
							},
                            {
								id: "BCHY101P",
								name: "Chemistry",
								// array of profs under BCHY101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Kiran Kumar Tadi",
									},
									
								],
							},
                            {
								id: "BEEE101P",
								name: "Electrical and electronics",
								// array of profs under BEEE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Deepa T",
									},
									
								],
							},
                            {
								id: "BCSE101P",
								name: "Python",
								// array of profs under BMCSE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name:"Vallidevi K"
									}
                                    
								],
							},
                            
						],
					},
                    {
						id: 2,
						name: "Winter semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT102P",
								name: "Differential tranformations",
								// array of profs under BMAT102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Rajesh Kumar Maohapatra",
									},
									{
										name: "Revathi G K",
									},
									{
										name: "Radha S",
									},
									{
										name: "Berin Greeni A",
									},
									{
										name: "Abhishek Kumar Singh",
									},
									{
										name: "Nathiya N",
									},
									{
										name: "Harshavarthini",
									},
									{
										name: "Saroj Kumar Dash",
									},
									{
										name: "Poulomi De",
									},
									{
										name: "Sowndar Rajan",
									},
									{
										name: "Kalyan",
									},
									{
										name: "Prosenjit",
									},
									{
										name: "Ashis Bera",
									},
									
								],
							},
                            {
								id: "BPHY102P",
								name: "PHYSICS",
								// array of profs under BPHY102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Vinitha G",
									},
									{
										name: "Manikandan",
									},
									{
										name: "John kennedy L",
									},
									{
										name:"Caroline Ponraj",
									},
									{
										name:"Gopinath Mundana",
									},
									{
										name:"Rajasekarakumar V",
									},
									{
										name:"Atanu Dutta",
									},
									{
										name:"Swaathi P",
									},
									{
										name:"Ajitha B",
									},
									{
										name:"Justin Raj",
									},
									{
										name:"Satyanarayana Kumar Mallavarapu",
									},
									{
										name:"Kathikeyan S",
									},
									{
										name:"Ram Kumar",
									},
									{
										name:"Uthiram C",
									},
								],
							},
                            {
								id: "BECE102P",
								name: "Digital systems design",
								// array of profs under BECE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Deepa M",
									},
									{
										name: "Ashok",
									},
									{
										name: "Subbulekshmi D",
									},
									{
										name: "Deepa T",
									},
									{
										name: "Sri Ramalakshmi P",
									},
									{
										name: "Mohammed Imran A",
									},
									{
										name: "Meera P S",
									},
									{
										name: "Ravi Tiwari",
									},
									{
										name: "Nithya Venkatesan",
									},
									{
										name: "Jamuna K",
									},
									{
										name: "Angeline Ezhilarasi G",
									},
									{
										name: "Kanimozhi G",
									},
									{
										name: "Sri Revathi B",
									},
									{
										name: "Angalaeswari S",
									},
									
								],
							},
                            {
								id: "BCSE102P",
								name: "Object oriented programming",
								// array of profs under BMCSE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Suganeshwari",
									},
									{
										name: "Ilavendhan A",
									},
                                    {
                                        name:"Dhanalakshmi R",
                                    },
                                    {
                                        name:"Suseela S",
                                    },
                                    {
                                        name:"Pavithra S",
                                    },
                                    {
                                        name:"Sendhil R",
                                    },
                                    {
                                        name:"Vatchala S",
                                    },
                                    {
                                        name:"Kavya Alluru",
                                    },
                                    {
                                        name:"Akhil Kumar",
                                    },
                                    {
                                        name:"Menaka Pushpa A",
                                    },
                                    {
                                        name:"T Raja Sree",
                                    },
                                    {
                                        name:"Sujithra Kanmani R",
                                    },
								],
							},
                            {
								id: "BENG102P",
								name: "Technical english",
								// array of profs under BENG102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Divya",
									},
									{
										name: "Samik Malla",
									},
									{
										name: "Devi Meenakshi",
									},
									{
										name: "Chithra G K",
									},
									{
										name: "Alan G",
									},
									{
										name: "Rajitha K",
									},
									{
										name: "Ajith I",
									},
									{
										name: "Manali Karmakar",
									},
									{
										name: "S Vijayalakshmi",
									},
									{
										name: "Niranjana",
									},
									{
										name: "SivakamI B",
									},
									{
										name: "Rajasekaran V",
									},
									
								],
							},
                            
						],
					},
				],
			},
			{
				name: "BPS",
				sem: [
					// array of semesters under BCE under 22batch
					{
						id: 1,
						name: "Fall semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT101P",
								name: "Calculus",
								// array of profs under BMAT101P under 1st sem of BCSE under 22batch
								prof: [
									{
                                        name:"Saroj Kumar Dash",
                                    },
								],
							},
                            {
								id: "BCHY101P",
								name: "Chemistry",
								// array of profs under BCHY101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Ramachandran",
									},
									
								],
							},
                            {
								id: "BEEE101P",
								name: "Electrical and electronics",
								// array of profs under BEEE101P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Deepa",
									},
									
								],
							},
                            {
								id: "BCSE101P",
								name: "Python",
								// array of profs under BMCSE101P under 1st sem of BCSE under 22batch
								prof: [{
									name:"Ilavendhan",
								},
								],
							},
                            
						],
					},
                    {
						id: 2,
						name: "Winter semester 2022-23",
						subjects: [
							// array of subjects under 1st sem of BCE under 22batch
							{
								id: "BMAT102P",
								name: "Differential tranformations",
								// array of profs under BMAT102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Rajesh Kumar Maohapatra",
									},
									{
										name: "Revathi G K",
									},
									{
										name: "Radha S",
									},
									{
										name: "Berin Greeni A",
									},
									{
										name: "Abhishek Kumar Singh",
									},
									{
										name: "Nathiya N",
									},
									{
										name: "Harshavarthini",
									},
									{
										name: "Saroj Kumar Dash",
									},
									{
										name: "Poulomi De",
									},
									{
										name: "Sowndar Rajan",
									},
									{
										name: "Kalyan",
									},
									{
										name: "Prosenjit",
									},
									{
										name: "Ashis Bera",
									},
									
								],
							},
                            {
								id: "BPHY102P",
								name: "PHYSICS",
								// array of profs under BPHY102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Vinitha G",
									},
									{
										name: "Manikandan",
									},
									{
										name: "John kennedy L",
									},
									{
										name:"Caroline Ponraj",
									},
									{
										name:"Gopinath Mundana",
									},
									{
										name:"Rajasekarakumar V",
									},
									{
										name:"Atanu Dutta",
									},
									{
										name:"Swaathi P",
									},
									{
										name:"Ajitha B",
									},
									{
										name:"Justin Raj",
									},
									{
										name:"Satyanarayana Kumar Mallavarapu",
									},
									{
										name:"Kathikeyan S",
									},
									{
										name:"Ram Kumar",
									},
									{
										name:"Uthiram C",
									},
								],
							},
                            {
								id: "BECE102P",
								name: "Digital systems design",
								// array of profs under BECE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Deepa M",
									},
									{
										name: "Ashok",
									},
									{
										name: "Subbulekshmi D",
									},
									{
										name: "Deepa T",
									},
									{
										name: "Sri Ramalakshmi P",
									},
									{
										name: "Mohammed Imran A",
									},
									{
										name: "Meera P S",
									},
									{
										name: "Ravi Tiwari",
									},
									{
										name: "Nithya Venkatesan",
									},
									{
										name: "Jamuna K",
									},
									{
										name: "Angeline Ezhilarasi G",
									},
									{
										name: "Kanimozhi G",
									},
									{
										name: "Sri Revathi B",
									},
									{
										name: "Angalaeswari S",
									},
									
								],
							},
                            {
								id: "BCSE102P",
								name: "Object oriented programming",
								// array of profs under BMCSE102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Suganeshwari",
									},
									{
										name: "Ilavendhan A",
									},
                                    {
                                        name:"Dhanalakshmi R",
                                    },
                                    {
                                        name:"Suseela S",
                                    },
                                    {
                                        name:"Pavithra S",
                                    },
                                    {
                                        name:"Sendhil R",
                                    },
                                    {
                                        name:"Vatchala S",
                                    },
                                    {
                                        name:"Kavya Alluru",
                                    },
                                    {
                                        name:"Akhil Kumar",
                                    },
                                    {
                                        name:"Menaka Pushpa A",
                                    },
                                    {
                                        name:"T Raja Sree",
                                    },
                                    {
                                        name:"Sujithra Kanmani R",
                                    },
								],
							},
                            {
								id: "BENG102P",
								name: "Technical english",
								// array of profs under BENG102P under 1st sem of BCSE under 22batch
								prof: [
									{
										name: "Divya",
									},
									{
										name: "Samik Malla",
									},
									{
										name: "Devi Meenakshi",
									},
									{
										name: "Chithra G K",
									},
									{
										name: "Alan G",
									},
									{
										name: "Rajitha K",
									},
									{
										name: "Ajith I",
									},
									{
										name: "Manali Karmakar",
									},
									{
										name: "S Vijayalakshmi",
									},
									{
										name: "Niranjana",
									},
									{
										name: "SivakamI B",
									},
									{
										name: "Rajasekaran V",
									},
									
								],
							},
                            
						],
					},
				],
			},
		],
	},
];
export default maindata;