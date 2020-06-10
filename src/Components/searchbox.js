import React from 'react';
import { Button, TextField } from '@material-ui/core';
import '../style/Components/searchbox.css';

const Searchbox = () => (
    <div className='searchbox'>
        <form className='box'>
            <TextField 
                id="standard-search" 
                label="Title" 
                type="search" 
            />
            <br />
            <br />
            <TextField
                id="standard-multiline-flexible"
                label="Message"
                multiline
                rowsMax={4}
                // value={value}
                // onChange={handleChange}
            />
            <br />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </form>
    </div>
);

export default Searchbox;