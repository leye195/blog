type experienceType = {
	title: string;
	period: string;
	description: string;
};

type skillType = {
	[key: string]: string[];
};

const experiences: experienceType[] = [
	{
		title: 'SuperTree',
		period: 'Web FrontEnd | 2020.10 - Now',
		description: `Maintain PlayDapp MarketPLAce (Eth, Polygon)
    Develop MakeOffer, Bundle, Auction for MarketPLAce
     - interact with SDK and API
     - create components to implement function
    Apply Web3-React on MarketPLAce 
     - support CoinBase Wallet connect
     - fix wallet login session issue
    Support network switching 
     - let user switch network if user is on wrong network`,
	},
];

const skills: skillType = {
	'Front-End': ['HTML / CSS', 'React.js', 'JavaScript, TypeScript', 'Emotion, Styled-Component'],
	'Back-End': ['Node.js'],
	Etc: ['Git / Github'],
};

export default {
	experiences,
	skills,
};
