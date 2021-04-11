import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/dogdad')}>Dog Dad</div>
            <div onClick={() => window.open('https://twitter.com/Emmanuel_Labor','_blank')}>Twitter</div>
        </div>
    )
};

// setting target blank to a JavaScript window location (change window.location to window.open with parameters of URL and target)

// https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location