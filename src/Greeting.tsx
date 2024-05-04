import React from 'react'; 

interface GreetingProps {
    name : string
}

//FC signifie "Functional Component"
//Le type FC (Functional Component) est importé depuis React pour spécifier le type du composant fonctionnel.
const Greeting: React.FC<GreetingProps> = ({name}) => {
    return <div>Hello {name}!</div>
}

export default Greeting;


// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;
