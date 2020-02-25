import React, {useState} from "react";
import {Form, Button }from 'react-bootstrap'

const SearchForm = (props) => {
    const[searchLocation, setSearchLocation] = useState("")
    console.log('form', searchLocation)
    
    const handleSearch = (e) => {
        setSearchLocation(e.target.value)
    }

    const resetForm = () => {
        setSearchLocation("")
    }

    const submitSearch = (e) => {
        e.preventDefault();
        props.city(searchLocation);
        resetForm();
    }

    return(
        <Form onSubmit={submitSearch} >
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="city" 
                    placeholder="City"
                    value={searchLocation}
                    onChange={handleSearch}
                    ></Form.Control>
            </Form.Group>
            <Button 
                type="submit"
                value="Search"
            >
                Get Weather
            </Button>
        </Form>
        
    );
};

export default SearchForm;