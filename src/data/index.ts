type experienceType = {
  title: string;
  description: string;
};

type skillType = {
  [key: string]: string[];
};

const experiences: experienceType[] = [
  {
    title: "SuperTree",
    description: "Web FrontEnd | 2020.10 - Now",
  },
];

const skills: skillType = {
  "Front-End": [
    "HTML / CSS",
    "React.js",
    "JavaScript, TypeScript",
    "Emotion, Styled-Component",
  ],
  "Back-End": ["Node.js"],
  Etc: ["Git / Github"],
};

export default {
  experiences,
  skills,
};
