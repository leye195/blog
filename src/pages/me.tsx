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

	h2 {
		font-size: 28px;
	}

	h3 {
		font-size: 24px;
	}

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
			& .card {
				margin-bottom: 1rem;

				& p {
					opacity: 0.8;
				}
			}
		}

		& .skills {
			border-bottom: 1px solid #f5f3f3;

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
				<h2>μ΄μμ¬ (DanYJ)</h2>
				<Common.Row className="last-updated" alignItems="center" justifyContents="flex-end">
					<span className="last-updated__text">Last Updated: 2022.06.02</span>
				</Common.Row>
				<Common.Table info={data.basicInfo} />
				<main className="main-contents">
					<Common.Section className="intro">
						<h2>π€ Introduction</h2>
						<Common.Column className="intro__text">
							<p>
								νλ‘ νΈμλ κ°λ°μλ‘ <b>SuperTree</b>λ΄ PlayDapp μ‘°μ§μμ μΉ μλΉμ€λ₯Ό κ°λ°νκ³  μμ΅λλ€. μ£Όλ‘ C2C NFT
								κ±°λ λ§μΌνλ μ΄μ€ κΈ°λ₯ κ°λ° κ·Έλ¦¬κ³  μΈλΆ νλ ₯ κ΄λ ¨ νμ΄μ§ κ°λ°μ μ§ννκ³  μμ΅λλ€.
							</p>
							<br />
							<p>
								μ΄λ»κ² νλ©΄ μ½λλ₯Ό ν΄λ¦°νκ² μμ±ν  μ μμμ§ κ·Έλ¦¬κ³  μ¬μ©μλ€μκ±° λ μ’μ κ²½νμ μ κ³΅ ν  μ μμμ§λ₯Ό
								κ³ λ―Όνκ³  λ μ’μ κ°λ°μλ‘ μ±μ₯νκΈ° μν΄ νμ΅νκ³  λΈλ ₯νκ³  μμ΅λλ€.
							</p>
						</Common.Column>
					</Common.Section>
					<Common.Section className="experience">
						<h2>π» Experience</h2>
						<ul className="card-group">
							{data.experiences.map(({ title, period, position, projects, projectDescription }) => (
								<li key={title} className="card">
									<Card {...{ title, period, position, projects, projectDescription }} />
								</li>
							))}
						</ul>
					</Common.Section>
					<Common.Section className="skills">
						<h2>π Skills</h2>
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
