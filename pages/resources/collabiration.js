import React from 'react';

const Collabiration = ({Collabiration}) => {

console.log(Collabiration);
    return (
        <div>
            
        </div>
    );
};



export const getStaticProps = async () => {

    const res = await fetch("http://localhost:5000/collabiration");
    const data = await res.json()
    return {
        props: {
            Collabiration: data
        }
    }
}
export default Collabiration;