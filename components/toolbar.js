import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
import { Github } from "./github";

export const Toolbar = () => {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<div tabindex="0" onClick={() => router.push("/")}>
				Home
			</div>
			<div tabindex="0" onClick={() => router.push("/feed/1")}>
				Feed
			</div>
			<div tabindex="0" onClick={() => router.push("/team")}>
				Our Team
			</div>
			<div tabindex="0" onClick={() => window.open("https://twitter.com/Emmanuel_Labor", "_blank")}>
				Twitter
			</div>
			<Github />
		</div>
	);
};

// setting target blank to a JavaScript window location (change window.location to window.open with parameters of URL and target)

// https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location
