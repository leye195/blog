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
	job: { main: string; sub?: string[] }[];
	describe: string;
};

type skillType = {
	[key: string]: string[];
};

const projectList: projectType[] = [
	{
		title: 'PlayDapp Tournaments',
		stack: 'NextJS, RTK(Redux Toolkit), TypeScript, react-query, web3-react, etherjs',
		period: '2022.08 - 현재',
		describe:
			'유저가 티켓을 소비하여 참여한 Pvp 및 Pve 게임 플레이 성적, 순위에 따른 보상을 제공하는 Game Platform 서비스 개발을 진행하고 있습니다. TF로 합류하여 서비스 소프트런칭에 기여하였으며 이후 정식으로 팀으로 합류하여 서비스 개발 및 개선에 참여하고 있습니다',
		job: [
			{
				main: '프론트 개발환경 및 프로젝트 구조 설정',
			},
			{
				main: 'iframe을 통한 game client 연동 및 postMessage를 활용한 이벤트 상호작용 작업',
			},
			{
				main: '보상 출금 기능 구현',
				sub: ['react-hook-form을 활용한 입력값 유효성 체크 및 contract abi 호출 통한 출금 처리 '],
			},
			{
				main: '점검 페이지 및 국가 접근제한 페이지 노출 ',
				sub: [
					'_app 파일에서 getInitialProp을 활용 및 국가체크 및 점검 상태 api를 호출하여 pageProps로 상태 값 전달, 전달 받은 상태에 따른 페이지 노출 분기 처리',
				],
			},
			{
				main: 'Ticket NFT Convert 기능 구현',
			},
		],
	},
	{
		title: 'PlayDapp Marketplace 2.0 - Renewal',
		stack: 'NextJS, Redux, TypeScript, react-query, Emotion, web3-react, etherjs',
		period: '2022.04 - 2022.08',
		describe:
			'기존 마켓 1.0 UI, 기능, ethereum, polygon 네트워크 별로 분리되어있는 서비스 통합 등 전체적인 서비스 및 구조 리뉴얼 작업을 진행하였습니다',
		job: [
			{
				main: 'NFT Detail 페이지',
				sub: [
					'data fetch: getServerSideProps 에서 react-query의 prefetchQuery함수를 활용해 item detail 정보를 data prefetch 하여 clientSide에 전달하도록 구현',
					'buy 기능 구현: redux에 item order 정보를 전달받아 market SDK 인스턴스의 거래 함수를 호출하는 reducer함수를 정의, 페이지에서는 event state에 따라 modal을 통해 현재 step을 보여주도록 구현 - 이전 SDK 인스턴스를 재초기화 및 api 호출을 통해 order 및 category 정보를 받아오는 불필요 로직 제거',
					'order cancel 기능 구현: isCancelListing과 취소 로직을 실행하는 handleCancelListing 함수를 리턴하는 useListingCancel hook을 생성하여 sell, makeOffer 등록 취소시 hook 활용을 통해 불필요한 반복 코드를 줄이도록 개선 및 구현',
					'metadata refresh 기능 구현: nft metadata 정보가 비어있는 경우에 대하여 클릭시 api 응답 여부와 관련 없이 toast 메시지를 통해 refresh 진행 중임을 알려주도록 하였으며 useToastMessage hook을 통해 position, duration 옵션을 설정,리턴하는 handleUpdateToast를 통해 toast 메시지 노출하도록 작업',
				],
			},
			{
				main: 'Email 인증 페이지',
				sub: [
					'email 인증 요청 기능 구현: react-hook-form 제공 register 함수를 통한 입력 값 유효성 체크 및 handleSubmit 함수를 활용하여 submit 요청에 대한 성공 및 에러 대한 처리를 진행하도록 구현',
					'email 인증 결과 페이지: 각 결과에 대한 정적 페이지를 별도 작성하는것이 아닌 getStaticPaths, getStaticProps를 활용하여 인증 결과 및 에러 값을 동적 라우팅 경로로 전달받아 대한 페이지를 랜더링하여 보여주도록 구현',
				],
			},
			{
				main: 'My Offers 페이지',
				sub: ['Offer 승인 기능 구현: 선택한 Offer에 대하여', 'Offer Table, OfferAccept 모달 컴포넌트 구현'],
			},
			{
				main: 'OOZ 티징 페이지',
				sub: [
					'IPX (라인프렌즈)의 OOZ 관련 티징 페이지 작업으로 IPX 측 디자이너와 협업을 통해 개발한 페이지로 one page scroll 형식으로 한 번에 한 페이지 씩 노출되도록 구현 진행',
				],
			},
			{
				main: 'Renewal Event 페이지',
				sub: [
					'구매 이벤트 랭킹 보상 수령 기능: 추후 이벤트 역시 보상 수령 기능이 추가되는 것을 고려하여 해당 기능을 custom hook을 통해 실행 할 수 있도록 히였으며,  보상인 pla 수령 가능 여부 및 수령 기능은 contract abi를 호출을 통해 유저가 직접 수령 진행하도록 구현이 되었습니다.',
				],
			},
		],
	},
	{
		title: 'ItemManager',
		stack: 'React, Recoil, Typescript, react-query, Emotion, web3-react',
		period: '2022.03 - 2022.04',
		describe:
			'Multihoming 2.0 버전 지원을 위한 ItemManager에 내구제 기능 적용 작업을 진행하였습니다. itemManager는 유저가 소유하고 있는 nft를 스테이킹 하고 게임내 일일임무, PvP 보상을 받아갈수 있도록 해주는 서비스 입니다',
		job: [
			{
				main: 'Repair 기능 구현',
				sub: [
					'유저가 itemManager에 스테이킹한 nft들에 대해서 PLA를 지불하여 내구도를 수리 할 수 있도록 로직을 구현하여 지속적으로 보상을 받아갈 수 있도록 하였습니다.',
				],
			},
			{
				main: '공통 컴포넌트 개발',
				sub: [
					'각 페이지에서 공통적으로 보여줘야 하는 내구도 게이지, 경고 메시지 등 컴포넌트들에 대해 모듈화를 진행하여 UI를 구성',
				],
			},
			{
				main: '멀티 월렛 지원 - walletConnect',
				sub: [
					'기존에 portis 월렛을 통한 로그인 만 지원하는 경우 portis 월렛 제품 자체에서 에러가 발생하여 로그인이 안되는 이슈가 많아 walletConnect 월렛 로그인도 추가적으로 지원하여 유저가 다른 경로를 통해 로그인을 할 수 있도록 개선 하였습니다.',
				],
			},
		],
	},
	{
		title: 'PlayDapp MarketPLAce (Eth, Polygon) 1.0',
		stack: 'JavaScript, React, Redux, react-router, react-query, scss, web3-react, ethersjs',
		period: '2020.10 - 2022.02',
		job: [
			{ main: '마켓 플레이스 신규 기능 개발 (MakeOffer, Bundle, Auction, Transfer)' },
			{
				main: '멀티월렛 지원 확장을 위한, web3-react 도입',
				sub: [
					'metamask, portis을 제외한 다른 월렛(walletLink, walletConnect) 로그인을 지원하기 위해 web3-react를 도입하였습니다.',
				],
			},
			{
				main: 'playDapp Town Nft bridge 기능 개발 (Eth -> Polygon)',
				sub: [
					'contract abi 함수 호출를 통해 Ethereum 네크워크에 생성된 SSR 등급 playDapp Town Nft를 Polygon 네트워크로 마켓으로 옮길수 있도록 구현',
				],
			},
			{
				main: 'polygon 마켓 2차 이벤트 합성 (nft 합성)',
				sub: [
					'기존 이벤트 페이지 재사용 가능 각종 컴포넌트 분리',
					'이벤트 합성 기능 구현',
					'이벤트 합성 랭킹 페이지 UI 개발',
				],
			},
			{
				main: 'playdappLand 쿠폰 서비스 페이지 개발',
				sub: ['쿠폰페이지 프론트엔드 로직 구현', '페이지 컴포넌트 개발 작업'],
			},
			{
				main: 'UX 개선 작업',
				sub: [
					'네트워크 스위칭 버튼을 통해 metamask를 통해 직접 네트워크를 수정 할 필요 없도록 개선',
					'로그인 유지 개선',
					'잘못된 네트워크 연결 toast 알림 메시지 추가',
					'metamask 모바일 inApp 브라우저 로그인 지원 개선',
				],
			},
			{ main: 'Container-Presentational 패턴 작용', sub: ['view, logic 분리를 통해 작업 conflict 발생 방지'] },
		],
		describe: 'PlayDapp MarketPLAce 신규기능 구현 및 유지보수 그리고 UX 개선 작업을 진행하고 있습니다.',
	},
	{
		title: 'GEO.DOMAIN Promotion',
		stack: 'TypeScript, React, NextJS, emotion, react-i18n',
		period: '2022.01 - 2022.02',
		job: [
			{
				main: 'GEO.DOMAIN NFT 오픈 이벤트 프로모션 프로젝트 환경 구성 및 페이지 구현',
			},
			{
				main: 'i18n 활용 영어, 한글 다국어 지원',
				sub: [
					'유저의 브라우저 언어 설정에 따라 페이지의 언어를 변경하여 보여주도록 하였으며 언어 설정은 i18n의 language detector 플러그인 활용하여 storage에 저장되도록 하였습니다',
				],
			},
		],
		describe:
			'마켓에서 판매하고 있는 GEODOMAIN.NFT의 정식 오픈 소개 및 이벤트 프로모션 진행을 위한 페이지 개발을 진행하였습니다.',
	},
];

const experiences: experienceType[] = [
	{
		title: 'SuperTree',
		period: '2020.10 - current',
		position: 'Market Dev Center, Tournaments Dev Center / Front-End Engineer',
		projects: 'PlayDapp Marketplace, GEO.DOMAIN NFT Promotion, ItemManager, PlayDapp Tournaments',
		projectDescription: [...projectList],
	},
];

const skills: skillType = {
	'Front-End': ['HTML / CSS', 'React.js', 'NextJS', 'JavaScript, TypeScript', 'Emotion, Styled-Component'],
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
