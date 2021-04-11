import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import { Toolbar } from '../../components/toolbar'

export const Feed = ({ pageNumber, articles }) => {

    const router = useRouter();

    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div onClick={() => window.open(article.url,'_blank')} key={index} className={styles.post}>
                        {!!article.urlToImage && <img src={article.urlToImage} alt='news article image' />}
                        <h1 onClick={() => window.open(article.url,'_blank')}>{article.title}</h1>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div 
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
                        };
                    }}
                    className={pageNumber === 1 ? styles.disabled : styles.active}>Previous Page
                </div>

                <div>Page {pageNumber}</div>

                <div 
                    onClick={() => {
                        if (pageNumber < 10) {
                            router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
                        };
                    }}
                    className={pageNumber === 10 ? styles.disabled : styles.active}>Next Page
                </div>

            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=dogs&pageSize=9&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
    
    const apiJson = await apiResponse.json();

    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };


}

export default Feed;


// Line 8: article.url prop opens in new browser tab with target=blank attribute 

// https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location