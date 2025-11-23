export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Manitoba",
    location: "Winnipeg, MB, Canada",
    startDate: "01/2014",
    endDate: "08/2019",
  },
];

