import React, {useState} from "react";
import {Form, Button }from 'react-bootstrap';

const SearchForm = (props) => {
    const[searchLocation, setSearchLocation] = useState("")
    
    const handleSearch = (e) => {
        setSearchLocation(e.target.value)
    }

    const resetForm = () => {
        setSearchLocation("")
    }

    const submitSearch = (e) => {
        e.preventDefault();
        props.search(searchLocation);
        resetForm();
    }

    return(
        <Form onSubmit={submitSearch} >
            <Form.Row >
                <Form.Group className="col-9">
                    <Form.Control 
                        type="text" 
                        name="city" 
                        placeholder="City"
                        value={searchLocation}
                        onChange={handleSearch}
                        ></Form.Control>
                </Form.Group>
                <div className="col-3-md">
                    <Button type="submit" value="Search">
                        Get Weather
                    </Button>
                </div>
            </Form.Row>

        </Form>
    );
};

export default SearchForm;