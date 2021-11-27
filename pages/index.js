// import Head from 'next/head'
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="page-container">
			<Toolbar />

			<div className={styles.main}>
				<a href="/feed/1">
					<h1>Dog Day News</h1>
				</a>
			</div>
		</div>
	);
}

// Emmanuel Jose logo, favicon, Coco and Dottie images. © Emmanuel Jose. All Rights Reserved.
