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
	describe: { main: string; sub?: string[] }[];
};

type skillType = {
	[key: string]: string[];
};

const projectList: projectType[] = [
	{
		title: 'PlayDapp MarketPLAce (Eth, Polygon)',
		stack: 'JavaScript, React, Redux, react-router, react-query, scss, web3-react',
		describe: [
			{ main: '마켓 플레이스 신규 기능 개발 (MakeOffer, Bundle, Auction, Transfer)', sub: [] },
			{
				main: '지갑 추가 확장성 강화를 위해, web3-react 도입',
				sub: ['web3-react 지원 connector 활용 지갑 연동 지원 (CoinBase, Trust Wallet 추가)'],
			},
			{
				main: 'playDapp Town Nft bridge 기능 개발 (Eth -> Polygon)',
				sub: [
					'contract abi 제공 함수를 활용 Ethereum 버전 마켓에 생성된 SSR 등급의 playDapp Town Nft를 Polygon 버전 마켓으로 옮길수 있도록 구현',
				],
			},
			{
				main: 'polygon 마켓 2차 이벤트 합성 (nft 합성)',
				sub: [
					'기존 이벤트 페이지 재사용 가능 각종 컴포넌트 분리',
					'이벤트 합성 기능 구현',
					'이벤트 합성 랭킹 페이지 제작',
				],
			},
			{
				main: 'playdappLand 쿠폰 서비스 페이지 개발',
			},
			{
				main: 'UX 개선 작업',
				sub: [
					'네트워크 스위칭 버튼을 통해 metamask를 통해 직접 네트워크를 수정 할 필요 없도록 개선',
					'로그인 유지 개선',
					'잘못된 네트워크 연결 toast 알림 메시지 추가',
					'metamask 모바일 로그인 지원 - metamask 사용자 고려',
				],
			},
			{ main: '프로젝트 Container-Presentational 패턴 작용', sub: ['view, logic 분리를 통해 작업 conflict 발생 방지'] },
		],
	},
];

const experiences: experienceType[] = [
	{
		title: 'SuperTree',
		period: '2020.10 - current',
		position: 'MarketPLAce Frontend Engineer, Service Platform Team',
		projects: 'PlayDapp MarketPLAce (Ethereum ver, Polygon ver)',
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
