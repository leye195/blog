import React from 'react';
import { css } from '@emotion/react';

type CardType = {
	title: string;
	period: string;
	position: string;
	projects: string;
	projectDescription: {
		title: string;
		stack: string;
		period: string;
		job: { main: string; sub?: string[] }[];
		describe: string;
	}[];
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
	padding: 1.2rem 0;
	border-top: 1px solid #e3e3e3;

	& .period {
		font-size: 1rem !important;
	}

	& p {
		white-space: pre-line;
	}

	& b {
		width: 5rem;
	}

	& ul {
		& > li {
			margin: 0.5rem 0;
			line-height: 1.5;
			list-style: square;
		}
	}

	&:not(:last-of-type) {
		display: flex;
		gap: 1rem;
	}

	& .project {
		&__title {
			position: relative;
			margin-bottom: 0rem;
			font-size: 1rem;

			&::after {
				position: absolute;
				content: '';
				width: 0.3rem;
				height: 0.3rem;
				background: #7886b7;
				border-radius: 50%;
			}
		}

		& &:last-child {
			border-bottom: none;
		}

		&__description {
			font-size: 1rem !important;

			& {
				border-bottom: 1px solid #f5f3f3;
			}

			&__job {
				margin-top: 1rem;
			}

			& ul {
				padding-left: 1rem;
			}
		}
	}
`;

const Card = ({ title, period, position, projects, projectDescription }: CardType) => {
	return (
		<div>
			<h3 css={company}>{title}</h3>
			<div css={content}>
				<b>Period</b>
				<p className="period">{period.trim()}</p>
			</div>
			<div css={content}>
				<b>Position</b>
				<p className="position">{position}</p>
			</div>
			<div css={content}>
				<b>Projects</b>
				<p className="projects">{projects}</p>
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
							<div>
								<b>Description</b>
								<ul>
									<li>{project.describe}</li>
								</ul>
							</div>
							<div className="project__description__job">
								<b>What I Did</b>
								<ul>
									{project.job.map(des => (
										<li key={des.main}>
											<p className="project__description__main">{des.main}</p>
											<ul>
												{des.sub?.map(sub => (
													<li key={sub}>{sub}</li>
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
