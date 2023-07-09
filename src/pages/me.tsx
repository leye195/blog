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
								프론트엔드 개발자로 <b>SuperTree - PlayDapp</b> 에서 블록체인 웹 서비스를 개발하고 있습니다. C2C NFT
								거래 마켓플레이스 새기능 개발 및 유지보수를 진행했으며 현재는 Tournaments 라는 게임 플랫폼 서비스 개발에
								참여하고 있습니다.
								<br />
								<br />
							</p>
							<ul>
								<li>- 새로운 지식 및 궁금했던 개념에 대해서는 노션 혹은 블로그에 기록하며 공유하고자 노력합니다.</li>
								<li>- 어떤일 진행하는데 있어 정보는 동일하게 공유가 되어야 된다고 생각합니다.</li>
							</ul>
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
