import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchForm = (props) => {
    const [searchLocation, setSearchLocation] = useState("")
    // const[searchLocation, setSearchLocation] = useState({
    //     city: "",
    //     country: ""
    // })

    const handleSearch = (e) => {
        // const updateLocation = {...searchLocation,[e.target.name]: e.target.value }
        // // console.log(
        // //     "handleChange",
        // //     e.target.name,
        // //     e.target.value,
        // //     updateLocation
        // // );
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

    return (
        <Form onSubmit={submitSearch} className="my-3">
            <InputGroup  size="lg">
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    aria-label="City"
                    aria-describedby="City Input"
                    className="p-1"
                    value={searchLocation}
                    // value={searchLocation.city}
                    onChange={handleSearch}
                />
                <InputGroup.Append>
                    <Button type="submit" className="searchButton" value="Search">
                        Weatherify
                </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export default SearchForm;