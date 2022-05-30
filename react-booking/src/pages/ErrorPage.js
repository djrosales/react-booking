import { NavLink } from "react-router-dom";

export default function ErrorPage(){
        return(
            <>
            <div className="err">
                 {/* <h2 className="pb-3"> Zuitt  Booking | Homework Done! </h2> */}
                 <h1> 404 </h1>
                 <h1> Page Not Found</h1>
                 <h6>Go back to the <NavLink to="/" style={{textDecoration:'none'}}>homepage</NavLink>.</h6>
                 </div>
             </>
         )

    } 



    //-----------------------------------
    //code from ma'am judy
   /*  import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return(
		<Row>
			<Col>
				<h1>404 - Page Not Found</h1>
				<p>The page you are looking for cannot be found.</p>
				<Button variant="primary" as={ Link } to="/">Back Home</Button>
			</Col>
		</Row>

		)
}
 */