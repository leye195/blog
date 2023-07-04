import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import data from 'data';
import { spacing } from 'styles/variables';

import Layout from 'components/layout/Layout';
import Common from 'components/common';
import Card from 'components/me/Card';
import SEO from 'components/common/SEO';

const containerStyle = css`
	max-width: 700px;
	margin: ${spacing.xxxl} auto;
	padding: 0 ${spacing.m};

	h2 {
		font-size: 32px;
	}

	h3 {
		font-size: 28px;
	}

	& .last-updated {
		font-size: 0.85rem;
		margin-bottom: ${spacing.m};

		&__text {
			padding: ${spacing.xxs};
			background: #7886b7;
			color: white;
			vertical-align: baseline;
			border-radius: 0.25rem;
			line-height: 1;
			font-weight: 700;
		}
	}

	& .intro {
		padding-bottom: ${spacing.m};
		border-bottom: 1px solid #f5f3f3;

		&__text {
			line-height: 1.5;
			white-space: pre-wrap;
		}
	}

	& .main-contents {
		padding: 1.5rem 0;

		& .card-group {
			& .card {
				margin-bottom: ${spacing.m};

				& p {
					opacity: 0.8;
				}
			}
		}

		& .skills {
			&__container {
				& ul {
					padding-left: ${spacing.xxxl};
				}

				& li {
					margin: ${spacing.xs} 0;
					list-style: square;
				}
			}
		}
	}
`;

const MePage = ({ data: { bg } }: any) => {
	return (
		<Layout>
			<SEO title="Me | Dan DevLog" />
			<Common.PageHead imgURL={bg.publicURL}>
				<Common.Column className="heading" alignItems="center" justifyContents="center">
					<h2>About Me</h2>
				</Common.Column>
			</Common.PageHead>
			<Common.Container css={containerStyle}>
				<h2>이영재</h2>
				<Common.Row className="last-updated" alignItems="center" justifyContents="flex-end">
					<span className="last-updated__text">Last Updated: 2023.07.04</span>
				</Common.Row>
				<Common.Table info={data.basicInfo} />
				<main className="main-contents">
					<Common.Section className="intro">
						<h2>👤 Introduction</h2>
						<Common.Column className="intro__text">
							<p>
								프론트엔드 개발자로 <b>SuperTree</b> 에서 블록체인 웹 서비스를 개발하고 있습니다. 입사하여 1년 반 동안은
								nft 마켓 개발을 진행하였으며, 현재는 토너먼트 서비스 개발을 참여하고 있습니다.
								<br />
								<br />
								서비스 기여를 위한 리서치를 좋아합니다. 예를들어 nextJS middleware, adblock 탐지방법 등 추후 제공 기능에
								활용 할 수 있기 위해 노력합니다. 이런 과정은 개인적으로도 많은 공부가 된다고 생각하며 정리하여 블로그에
								기록해놓기도 합니다
								<br />
								<br />
								반복적인 작업은 개선을 통해 시간낭비를 하지 않도록 하는것 그리고 리팩토링을 통해 코드를 클린하게
								개선하는것을 좋아합니다.
							</p>
						</Common.Column>
					</Common.Section>
					<Common.Section className="experience">
						<h2>💻 Experience</h2>
						<ul className="card-group">
							{data.experiences.map(({ title, period, position, projects, projectDescription }) => (
								<li key={title} className="card">
									<Card {...{ title, period, position, projects, projectDescription }} />
								</li>
							))}
						</ul>
					</Common.Section>
					<Common.Section className="skills">
						<h2>📚 Skills</h2>
						{Object.keys(data.skills).map(title => (
							<div key={title} className="skills__container">
								<h4>{title}</h4>
								<ul>
									{data.skills[title].map(skill => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</div>
						))}
					</Common.Section>
				</main>
			</Common.Container>
		</Layout>
	);
};

export const query = graphql`
	query {
		bg: file(relativePath: { eq: "about.jpg" }) {
			publicURL
		}
	}
`;

export default MePage;
