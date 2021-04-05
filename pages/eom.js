import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/toolbar'

export const EOM = ({ employee }) => {
    return(
        <div className="page-container">

        <Toolbar/>
        
            <div className={styles.main}>
                <h1>Employee of the Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt="employee avatar"/>
                    <p>{employee.description}</p>

                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/emjose/news-site/employeeOfTheMonth'
    );

    const employee = await apiResponse.json();

    return {
        props: {
            employee,
        },
    };
};

export default EOM;