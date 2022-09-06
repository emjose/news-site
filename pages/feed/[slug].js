import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";
import Head from "next/head";

export const Feed = ({ pageNumber, articles }) => {
	const router = useRouter();

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
				{articles.map((article, index) => (
					<button
						tabIndex="0"
						onClick={() => window.open(article.url, "_blank")}
						key={index}
						className={styles.post}
					>
						{!!article.urlToImage && <img src={article.urlToImage} alt="news article image" />}
						<h1>{article.title}</h1>
						<p>{article.description}</p>
					</button>
				))}
			</div>

			<div className={styles.paginator}>
				<button
					tabIndex="0"
					onClick={() => {
						if (pageNumber > 1) {
							router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
						}
					}}
					className={pageNumber === 1 ? styles.disabled : styles.active}
				>
					Prev
				</button>

				<button>Page {pageNumber}</button>

				<button
					tabIndex="0"
					onClick={() => {
						if (pageNumber < 10) {
							router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
						}
					}}
					className={pageNumber === 10 ? styles.disabled : styles.active}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageNumber = pageContext.query.slug;

	if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	const apiResponse = await fetch(
		`https://newsapi.org/v2/everything?q=dogs&q=-dies&excludeDomains=freerepublic.com,ctvnews.ca,globalnews.ca&pageSize=9&sortBy=relevancy&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		}
	);

	const apiJson = await apiResponse.json();

	const { articles } = apiJson;

	return {
		props: {
			articles,
			pageNumber: Number.parseInt(pageNumber),
		},
	};
};

export default Feed;

// Line 14: Window location article.url prop opens in new browser tab with target=blank attribute

// https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location
