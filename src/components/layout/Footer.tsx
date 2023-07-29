import { css } from '@emotion/react';
import { FaGithubSquare, FaRssSquare, FaInstagramSquare } from 'react-icons/fa';
import Common from 'components/common';

const footerStyle = css`
	padding: 1.5rem 0 1.5rem 0;
	border-top: 1px solid #f5f3f3;

	& svg {
		font-size: 2rem;
		cursor: pointer;
		color: #505050;
	}

	& .copyright {
		margin-top: 1rem;
		font-size: 0.85rem;
		text-align: center;

		& span {
			font-weight: 300;
		}
	}
`;

const Footer = () => {
	return (
		<footer css={footerStyle}>
			<Common.Column alignItems="center" justifyContents="center">
				<Common.Row alignItems="center" justifyContents="center">
					<a className="github" href="https://github.com/leye195" target="_blank" rel="noopener">
						<FaGithubSquare />
					</a>
					<a className="insta" href="https://www.instagram.com/dan__yj" target="_blank" rel="noopener">
						<FaInstagramSquare />
					</a>
					<a className="rss" href="/rss.xml" target="_blank" rel="noopener">
						<FaRssSquare />
					</a>
				</Common.Row>
				<p className="copyright">
					© {new Date().getFullYear()} dan.dev.log, <span>Built with Gatsby</span>
				</p>
			</Common.Column>
		</footer>
	);
};

export default Footer;
