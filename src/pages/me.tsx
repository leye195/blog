import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from 'components/layout/Layout';
import Common from 'components/common';
import Card from 'components/me/Card';
import SEO from 'components/common/SEO';
import data from 'data';

const containerStyle = css`
	max-width: 700px;
	margin: 2rem auto;
	padding: 0 1rem;

	& .last-updated {
		font-size: 0.85rem;
		margin-bottom: 1rem;

		&__text {
			padding: 0.25rem;
			background: #7886b7;
			color: white;
			vertical-align: baseline;
			border-radius: 0.25rem;
			line-height: 1;
			font-weight: 700;
		}
	}

	& .intro {
		padding-bottom: 1rem;
		border-bottom: 1px solid #f5f3f3;

		&__text {
			line-height: 1.5;
			white-space: pre-wrap;
		}
	}

	& .main-contents {
		padding: 1.5rem 0;

		& .card-group {
			border-bottom: 1px solid #f5f3f3;

			& .card {
				margin-bottom: 1rem;

				& p {
					font-size: 0.85rem;
					opacity: 0.8;
				}
			}
		}

		& .skills {
			&__container {
				& ul {
					padding-left: 2rem;
				}

				& li {
					margin: 0.5rem 0;
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
				<h2>이영재 (DanYJ)</h2>
				<Common.Row className="last-updated" alignItems="center" justifyContents="flex-end">
					<span className="last-updated__text">Last Updated: 2022.02.13</span>
				</Common.Row>
				<Common.Table info={data.basicInfo} />
				<main className="main-contents">
					<Common.Section className="intro">
						<h2>👤 Introduction</h2>
						<Common.Column className="intro__text">
							<p>
								1년차 프론트엔드 개발자로 <b>SuperTree</b> 에서 웹 서비스를 개발하고 있습니다. 주로 C2C NFT 거래
								마켓플레이스 새기능 개발 및 유지보수, 마켓 이벤트 페이지 개발을 담당하고 있습니다.
							</p>
							<br />
							<p>
								일회성이 아닌 재활용성을 고려하여 작업하는 것을 좋아하며, 어떻게 하면 코드를 클린하게 작성할 수 있을지
								고민하고 더 좋은 개발자로 성장하기 위해 학습하고 노력하고 있습니다.
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
