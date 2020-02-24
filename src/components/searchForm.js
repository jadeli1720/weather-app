import React from "react";
import {Form, Button }from 'react-bootstrap'

const SearchForm = () => {
    return(
        <Form>
            <Form.Group>
                <Form.Control type="text" name="city" placeholder="City"></Form.Control>
            </Form.Group>
            <Button type="submit">
                Get Weather
            </Button>
        </Form>
        
    );
};

export default SearchForm;