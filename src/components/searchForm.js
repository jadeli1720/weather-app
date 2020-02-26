import React, {useState} from "react";
import {Form, Button, Col }from 'react-bootstrap';

const SearchForm = (props) => {
    const[searchLocation, setSearchLocation] = useState("")
    // const[searchLocation, setSearchLocation] = useState({
    //     city: "",
    //     country: ""
    // })
    
    const handleSearch = (e) => {
        // const updateLocation = {...searchLocation,[e.target.name]: e.target.value }
        // console.log(
        //     "handleChange",
        //     e.target.name,
        //     e.target.value,
        //     updateLocation
        //   );
        // setSearchLocation(updateLocation);
        setSearchLocation(e.target.value)
    }

    const resetForm = () => {
        setSearchLocation("")
        // setSearchLocation({...searchLocation,
        //     city: "",
        //     country: ""
        // })
    }

    const submitSearch = (e) => {
        e.preventDefault();
        props.search(searchLocation);
        resetForm();
    }

    return(
        <Form onSubmit={submitSearch} >
            <Form.Row >
                <Form.Group as={Col}>
                    <Form.Control 
                        type="text" 
                        name="city" 
                        placeholder="City"
                        value={searchLocation}
                        // value={searchLocation.city}
                        onChange={handleSearch}
                        ></Form.Control>
                </Form.Group>
                {/* <Form.Group as={Col}>
                    <Form.Control 
                        type="text" 
                        name="country" 
                        placeholder="Country"
                        value={searchLocation.country}
                        onChange={handleSearch}
                        ></Form.Control>
                </Form.Group> */}
                <div className="col-3">
                    <Button type="submit" value="Search">
                        Get Weather
                    </Button>
                </div>
            </Form.Row>

        </Form>
    );
};

export default SearchForm;