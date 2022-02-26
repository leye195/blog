import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

	return (
		<Layout>
			<Common.Container css={containerStyle}>
				<h2>이영재 (Lee YoungJae)</h2>
				<Common.Row className="last-updated" alignItems="center" justifyContents="flex-end">
					<span className="last-updated__text">Last Updated: 2022.02.13</span>
				</Common.Row>
				<Common.Table info={data.basicInfo} />
				<main className="main-contents">
					<Common.Section className="intro">
						<h2>👤 Introduction</h2>
						<Common.Column className="intro__text">
							<p>{t('intro1')}</p>
							<br />
							<p>{t('intro2')}</p>
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
