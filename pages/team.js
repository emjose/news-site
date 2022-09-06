import styles from "../styles/Team.module.css";
import { Toolbar } from "../components/toolbar";
import Head from "next/head";

export const team = ({ team }) => {
	return (
		<div className="page-container">
			<Toolbar />

			<Head>
				<meta charSet="UTF-8" />
				<title>Dog Day News</title>
				<meta property="og:title" content="Dog Day News" />
				<meta property="og:image" content="https://news-site-beta.vercel.app/meta-027-news.png" />
				<meta
					property="og:image:alt"
					content="The words 'Dog Day News' in front of a French bulldog. Click to visit website."
				/>
				<meta property="og:description" content="Project by Emmanuel Jose" />
				<meta property="og:url" content="https://news-site-beta.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
				<meta name="description" content="An app for dog-related news. Click to visit website." />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Next.js, news, dogs, dog, newsapi" />
				<meta name="author" content="Emmanuel Jose" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.main}>
				<a tabIndex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
					<h1>Coco and Dottie</h1>
				</a>

				<div className={styles.teamMembers}>
					<a tabIndex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
						<h2>Canine Executive Officers</h2>
					</a>
					<a tabIndex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
						<img
							src="https://res.cloudinary.com/dn1e07eul/image/upload/v1618168529/100%20Days%20Of%20Code/CocoDottie_copy_q1zaq0.jpg"
							alt="Coco and Dottie"
						/>
					</a>
					<a tabIndex="0" href="https://github.com/emjose" target="_blank">
						<p id="check">Check out our Dad!</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default team;

// Deactivate getServerSideProps function and fetching from JSON Server for now (Vercel issues).

// Former Lines 13-17 above:
// <div className={styles.teamMembers}>
//     <a href="https://www.instagram.com/cocodottie/" target="_blank"><h6>{team.position}</h6></a>
//     <a href="https://www.instagram.com/cocodottie/" target="_blank"><img src={team.image} alt="Coco and Dottie"/></a>
//     <a href="https://github.com/emjose" target="_blank"><p>{team.description}</p></a>
// </div>

// export const getServerSideProps = async pageContext => {
//     const apiResponse = await fetch(
//         'https://my-json-server.typicode.com/emjose/news-site/teamMembers'
//     );

//     const team = await apiResponse.json();

//     return {
//         props: {
//             team,
//         },
//     };
// };
