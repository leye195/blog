import React from 'react';
import { css } from '@emotion/react';

type CardType = {
	title: string;
	period: string;
	position: string;
	projects: string;
	projectDescription: { title: string; stack: string; period: string; describe: { main: string; sub?: string[] }[] }[];
};

const company = css`
	margin-top: 2.5rem;
	position: relative;
	font-size: 20px;

	&::after {
		position: absolute;
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		background: #7886b7;
		border-radius: 50%;
	}
`;

const content = css`
	margin-bottom: 1.2rem;

	& .period {
		font-size: 0.95rem !important;
	}

	& p {
		white-space: pre-line;
	}

	& ul {
		& > li {
			margin: 0.5rem 0;
			list-style: square;
		}
	}

	& .project {
		&__title {
			position: relative;
			margin-bottom: 0rem;

			&::after {
				position: absolute;
				content: '';
				width: 0.3rem;
				height: 0.3rem;
				background: #7886b7;
				border-radius: 50%;
			}
		}

		&__description {
			font-size: 0.85rem !important;

			&__text {
				margin-top: 1rem;
			}

			& ul {
				padding-left: 1.5rem;
			}
		}
	}
`;

const Card = ({ title, period, position, projects, projectDescription }: CardType) => {
	return (
		<div>
			<h3 css={company}>{title}</h3>
			<div css={content}>
				<p className="period">{period.trim()}</p>
			</div>
			<div css={content}>
				<b>Position</b>
				<p className="position">{position}</p>
			</div>
			<div css={content}>
				<b>Projects</b>
				<p className="position">{projects}</p>
			</div>

			<div css={content}>
				{projectDescription.map(project => (
					<div key={project.title} className="project">
						<h4 className="project__title">{project.title}</h4>
						<div className="project__description">
							<ul className="project__description__stack">
								<li>{project.stack}</li>
							</ul>
							<div>
								<b>Period</b>
								<ul>
									<li>{project.period}</li>
								</ul>
							</div>
							<div className="project__description__text">
								<b>Description</b>
								<ul>
									{project.describe.map(des => (
										<li key={des.main}>
											<p>{des.main}</p>
											<ul>
												{des.sub?.map(sub => (
													<li>{sub}</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
