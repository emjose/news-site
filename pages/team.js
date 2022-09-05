import styles from "../styles/Team.module.css";
import { Toolbar } from "../components/toolbar";

export const team = ({ team }) => {
	return (
		<div className="page-container">
			<Toolbar />

			<div className={styles.main}>
				<a tabindex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
					<h1>Coco and Dottie</h1>
				</a>

				<div className={styles.teamMembers}>
					<a tabindex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
						<h6>Canine Executive Officers</h6>
					</a>
					<a tabindex="0" href="https://www.instagram.com/cocodottie/" target="_blank">
						<img
							src="https://res.cloudinary.com/dn1e07eul/image/upload/v1618168529/100%20Days%20Of%20Code/CocoDottie_copy_q1zaq0.jpg"
							alt="Coco and Dottie"
						/>
					</a>
					<a tabindex="0" href="https://github.com/emjose" target="_blank">
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
