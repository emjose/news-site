import styles from '../styles/dogDad.module.css'
import { Toolbar } from '../components/toolbar'

export const dogDad = ({ dad }) => {
    return(
        <div className="page-container">

        <Toolbar/>
        
            <div className={styles.main}>
                <h1>Dog Dad</h1>

                <div className={styles.dogDad}>
                    <h3>{dad.name}</h3>
                    <h6>{dad.position}</h6>
                    <img src={dad.image} alt="Dog Dad"/>
                    <p>{dad.description}</p>

                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/emjose/news-site/dogDad'
    );

    const dad = await apiResponse.json();

    return {
        props: {
            dad,
        },
    };
};

export default dogDad;