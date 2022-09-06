import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
import { Github } from "./github";

export const Toolbar = () => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<div className={styles.main}>
			<button type="button" onClick={() => router.push("/")}>
				Home
			</button>
			<button type="button" onClick={() => router.push("/feed/1")}>
				Feed
			</button>
			<button type="button" onClick={() => router.push("/team")}>
				Our Team
			</button>
			<button type="button" onClick={() => window.open("https://twitter.com/Emmanuel_Labor", "_blank")}>
				Twitter
			</button>
			<Github />
		</div>
	);
};

// setting target blank to a JavaScript window location (change window.location to window.open with parameters of URL and target)

// https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location
