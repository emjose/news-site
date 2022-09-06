import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="page-container">
			<Head>
				<meta charSet="UTF-8" />
				<title>Dog Day News</title>
				<meta property="og:title" content="Dog Day News" />
				<meta property="og:image" content="https://news-site-emjose.vercel.app/meta-027-news.png" />
				<meta
					property="og:image:alt"
					content="The words 'Dog Day News' in front of a French bulldog. Click to visit website."
				/>
				<meta property="og:description" content="Project by Emmanuel Jose" />
				<meta property="og:url" content="https://news-site-emjose.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
				<meta name="description" content="An app for dog-related news. Click to visit website." />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Next.js, news, dogs, dog, newsapi" />
				<meta name="author" content="Emmanuel Jose" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Toolbar />

			<div className={styles.main}>
				<a tabindex="0" href="/feed/1">
					<h1>Dog Day News</h1>
				</a>
			</div>
		</div>
	);
}

// Emmanuel Jose logo, favicon, Coco and Dottie images. © Emmanuel Jose. All Rights Reserved.
