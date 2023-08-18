import { defaults } from "autoprefixer";

const maindata = [
    // array of batches
    {
        name: 22,
        stream: [
            // array of streams under 22batch
            {
                name: "BCSE",
                sem: [
                    // array of semesters under BCE under 22batch
                    {
                        id: 1,
                        name: "Fall semester 2022-23",
                        subjects: [
                            // array of subjects under 1st sem of BCE under 22batch
                            {
                                id: "BMAT101",
                                name: "Mathematics",
                                // array of profs under BMAT101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. A",
                                    },
                                    {
                                        name: "Prof. B",
                                    },
                                ],
                            },
                            {
                                id: "BPHY101",
                                name: "Physics",
                                // array of profs under BPHY101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "winter semester 2022-23",
                        // array of subjects under 2nd sem of BCE under 22batch
                        subjects: [
                            {
                                id: "BMAT102",
                                name: "Mathematics",
                                // array of profs under BMAT102 under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. e",
                                    },
                                    {
                                        name: "Prof. f",
                                    },
                                ],
                            },
                            {
                                id: "BECE101L",
                                name: "Digital Logic",
                                // array of profs under BECE101L under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
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
                                id: "BMAT101",
                                name: "Mathematics",
                                // array of profs under BMAT101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. A",
                                    },
                                    {
                                        name: "Prof. B",
                                    },
                                ],
                            },
                            {
                                id: "BPHY101",
                                name: "Physics",
                                // array of profs under BPHY101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "winter semester 2022-23",
                        // array of subjects under 2nd sem of BCE under 22batch
                        subjects: [
                            {
                                id: "BMAT102",
                                name: "Mathematics",
                                // array of profs under BMAT102 under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. e",
                                    },
                                    {
                                        name: "Prof. f",
                                    },
                                ],
                            },
                            {
                                id: "BECE101L",
                                name: "Digital Logic",
                                // array of profs under BECE101L under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 21,
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
                                id: "BMAT101",
                                name: "Mathematics",
                                // array of profs under BMAT101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. A",
                                    },
                                    {
                                        name: "Prof. B",
                                    },
                                ],
                            },
                            {
                                id: "BPHY101",
                                name: "Physics",
                                // array of profs under BPHY101 under 1st sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "winter semester 2022-23",
                        // array of subjects under 2nd sem of BCE under 22batch
                        subjects: [
                            {
                                id: "BMAT102",
                                name: "Mathematics",
                                // array of profs under BMAT102 under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. e",
                                    },
                                    {
                                        name: "Prof. f",
                                    },
                                ],
                            },
                            {
                                id: "BECE101L",
                                name: "Digital Logic",
                                // array of profs under BECE101L under 2nd sem of BCE under 22batch
                                prof: [
                                    {
                                        name: "Prof. C",
                                    },
                                    {
                                        name: "Prof. D",
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