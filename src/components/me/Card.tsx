import React from 'react';
import { css } from '@emotion/react';
import { flexMixin } from 'styles/mixin';
import { spacing } from 'styles/variables';

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
	${flexMixin({ alignItems: 'center' })};
	gap: 1rem;
	margin: 2.5rem 0;
	position: relative;

	h3 {
		margin: 0;
	}

	p {
		font-size: 1.25rem;
		font-weight: 800;
	}

	& h3::after {
		position: absolute;
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		background: #7886b7;
		border-radius: 50%;
	}
`;

const table = css`
	${flexMixin({ alignItems: 'center' })}
	gap: 1rem;
	padding: 1.2rem 0;
	border-top: 1px solid #e3e3e3;

	h5 {
		width: 4.5rem;
		margin: 0;
		font-size: 1.125rem;
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
			margin: ${spacing.xs} 0;
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
			margin: ${spacing.m} 0;
			font-size: 1.5rem;

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
			font-size: 1.125rem !important;

			& {
				border-bottom: 1px solid #f5f3f3;
			}

			&__job {
				margin-top: 1rem;
			}

			& ul {
				padding-left: 2rem;
			}

			h5 {
				margin-top: 1rem;
				margin-bottom: 0.5rem;
				font-size: 18px;
			}
		}
	}
`;

const Card = ({ title, period, position, projects, projectDescription }: CardType) => {
	return (
		<div>
			<div css={company}>
				<h3>{title}</h3>
				<p>({period.trim()})</p>
			</div>
			<div>
				<div css={table}>
					<h5>Position</h5>
					<p className="position">{position}</p>
				</div>
				<div css={table}>
					<h5>Projects</h5>
					<p className="projects">{projects}</p>
				</div>
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
								<h5>Period</h5>
								<ul>
									<li>{project.period}</li>
								</ul>
							</div>
							<div>
								<h5>Description</h5>
								<ul>
									<li>{project.describe}</li>
								</ul>
							</div>
							<div className="project__description__job">
								<h5>What I Did</h5>
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
