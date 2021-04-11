import styles from '../styles/DogDad.module.css'
import { Toolbar } from '../components/toolbar'

export const dogDad = ({ dogDad }) => {
    return(
        <div className="page-container">

        <Toolbar/>
        
            <div className={styles.main}>
                <h1>Dog Dad</h1>

                <div className={styles.dogDad}>
                    <h3>{dogDad.name}</h3>
                    <h6>{dogDad.position}</h6>
                    <img src={dogDad.image} alt="Dog Dad"/>
                    <p>{dogDad.description}</p>

                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/emjose/news-site/dogDad'
    );

    const dogDad = await apiResponse.json();

    return {
        props: {
            dogDad,
        },
    };
};

export default dogDad;