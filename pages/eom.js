export const EOM = ({ employee }) => {
    return(
        <div className="page-container">
            <div>
                <h1>Employee of the Month</h1>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        ''
    );
}

export default EOM;