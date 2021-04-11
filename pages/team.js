import styles from '../styles/Team.module.css'
import { Toolbar } from '../components/toolbar'

export const team = ({ team }) => {
    return(
        <div className="page-container">

        <Toolbar/>
        
            <div className={styles.main}>
                <a href="https://github.com/emjose" target="_blank"><h1>Coco and Dottie</h1></a>

                <div className={styles.teamMembers}>
                    <a href="https://www.instagram.com/cocodottie/" target="_blank"><h6>{team.position}</h6></a>
                    <a href="https://www.instagram.com/cocodottie/" target="_blank"><img src={team.image} alt="Coco and Dottie"/></a>
                    <a href="https://github.com/emjose" target="_blank"><p>{team.description}</p></a>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/emjose/news-site/teamMembers'
    );

    const team = await apiResponse.json();

    return {
        props: {
            team,
        },
    };
};

export default team;