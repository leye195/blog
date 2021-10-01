import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from 'components/layout/Layout';
import Common from 'components/common';
import Card from 'components/me/Card';
import data from 'data';
import SEO from 'components/common/SEO';

const containerStyle = css`
	max-width: 700px;
	margin: 2rem auto;
	padding: 0 1rem;

	& .main-contents {
		padding: 1rem 0;

		& .card-group {
			border-bottom: 1px solid #f5f3f3;

			& .card {
				margin-bottom: 1rem;
				border-top: 1px solid #f5f3f3;

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
					<h2>Me</h2>
				</Common.Column>
			</Common.PageHead>
			<Common.Container css={containerStyle}>
				<h2>I'm YoungJae</h2>
				<p>
					I'm Web FrontEnd Developer in <strong>SuperTree</strong> that serve{' '}
					<a className="" href="https://playdapp.com">
						PlayDapp MarketPLAce
					</a>
				</p>
				<main className="main-contents">
					<Common.Section className="experience">
						<h3>💻 Experience</h3>
						<ul className="card-group">
							{data.experiences.map(({ title, period, description }) => (
								<li key={title} className="card">
									<Card {...{ title, period, description }} />
								</li>
							))}
						</ul>
					</Common.Section>
					<Common.Section className="skills">
						<h3>📚 Skills</h3>
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
