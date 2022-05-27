import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard ({courseProp}) {
    //check if the data was successfully passed
    //console.log(props)

    //Deconstructure the course properties into their own variables
    const { name, description, price} = courseProp;

    // Use the state hook for this component to be able to store its value 
    // states are used to keep track of information related to individual components

    //syntax:
        //const [currentValue(getter), UpdatedValue(setter)] = useState(initialGetterValue)
        const [ count, setCount] = useState(0);
        //set the available seats for enrollees
        const [ seat, setSeat] = useState(30);


        //for the enable/disable of enroll button
        const[isOpen, setIsOpen] = useState(true);

        useEffect(() => {
            if(seat === 0){
                setIsOpen(false)
            }
        }, [seat])




        function enroll(){
            if(seat>0){
            setCount(count + 1);
            console.log('Enrollees:'+ count);
            setSeat(seat -1);
            console.log('seats available'+ seat);
        }else{
            alert("No more seats available");
        }
    }
    return(
        <Card className="mt-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {price}</Card.Text>
                <Card.Text>Enrollees: {count}</Card.Text>
                <Card.Text>Seats Available: {seat}</Card.Text>
                {isOpen ? 
                <Button variant="primary" onClick={enroll}>Enroll</Button>
                :
                <Button variant="primary" onClick={enroll} disabled>Enroll</Button>
                }
            </Card.Body>

        </Card>

    )
}

//Check if the CourseCard component is getting the correct prop types
//Proptypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed form one component to another

CourseCard.propTypes = {
    courseProp: PropTypes.shape({
        //Define the properties and their expected types
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}