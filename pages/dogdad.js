import styles from '../styles/dogDad.module.css'
import { Toolbar } from '../components/toolbar'

export const dogDad = ({ dad }) => {
    return(
        <div className="page-container">

        <Toolbar/>
        
            <div className={styles.main}>
                <a href="https://github.com/emjose"><h1>Dog Dad</h1></a>

                <div className={styles.dogDad}>
                    <a href="https://github.com/emjose"><h3>{dad.name}</h3></a>
                    <a href="https://github.com/emjose"><h6>{dad.position}</h6></a>
                    <a href="https://github.com/emjose"><img src={dad.image} alt="Dog Dad"/></a>
                    <a href="https://github.com/emjose"><p>{dad.description}</p></a>

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