type experienceType = {
	title: string;
	period: string;
	position: string;
	projects: string;
	projectDescription: projectType[];
};

type projectType = {
	title: string;
	stack: string;
	period: string;
	describe: { main: string; sub?: string[] }[];
};

type skillType = {
	[key: string]: string[];
};

const projectList: projectType[] = [
	{
		title: 'PlayDapp MarketPLAce (Eth, Polygon)',
		stack: 'JavaScript, React, Redux, react-router, react-query, scss, web3-react',
		period: '2020.10 - current',
		describe: [
			{ main: 'implement MarketPlace new Functions (MakeOffer, Bundle, Auction, Transfer)', sub: [] },
			{
				main: 'apply web3-react lib to enhance wallet scalability',
				sub: ['support various wallets connect via web3-react (added CoinBase, Trust Wallet)'],
			},
			{
				main: 'implement playDapp Town Nft bridge (Eth -> Polygon)',
				sub: ['transfer the SSR grade Nft in Ethereum Market to Polygon MarketPlace using contract abi'],
			},
			{
				main: 'polygon Market 2nd Event Merge (nft merge)',
				sub: [
					'seperate various components can be reused on existing event page',
					'implement event merge function',
					'publish event ranking page',
				],
			},
			{
				main: 'implement playdappLand Coupon Service page',
			},
			{
				main: 'UX improvement work',
				sub: [
					'add network switching button, user no need to change network through metamask ',
					'improve login maintain',
					'add toast message, nofity user on wrong network',
					'support metamask mobile login',
				],
			},
			{
				main: 'apply Container-Presentational pattern on project',
				sub: ['seperate view and logic to prevent conflicts'],
			},
		],
	},
	{
		title: 'GEO.DOMAIN Promotion',
		stack: 'Typescript, React, NextJS, emotion, react-i18n',
		period: '2022.01 - 2022.02',
		describe: [
			{
				main: 'GEO.DOMAIN NFT Open Event Promotion Project Environment configuration and page implementation',
			},
			{
				main: 'multi-language support in English and Korean using i18n',
			},
		],
	},
];

const experiences: experienceType[] = [
	{
		title: 'SuperTree',
		period: '2020.10 - current',
		position: 'MarketPLAce Frontend Engineer, PlayDapp Service Platform Team',
		projects: 'PlayDapp MarketPLAce (Ethereum ver, Polygon ver), GEO.DOMAIN NFT Promotion',
		projectDescription: [...projectList],
	},
];

const skills: skillType = {
	'Front-End': ['HTML / CSS', 'React.js', 'JavaScript, TypeScript', 'Emotion, Styled-Component'],
	'Back-End': ['Node.js'],
	Etc: ['Git / Github'],
};

const basicInfo = [
	{ title: 'Github', link: 'https://github.com/leye195' },
	{ title: 'Blog', link: 'https://dantechblog.gatsbyjs.io' },
	{ title: 'Contact', link: 'mailto:leye195@naver.com' },
];

export default {
	experiences,
	skills,
	basicInfo,
};
