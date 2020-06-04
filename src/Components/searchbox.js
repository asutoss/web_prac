import React from 'react';
import { Button, TextField } from '@material-ui/core';
import '../style/Components/searchbox.css';

const Searchbox = () => (
    <div className='searchbox'>
        <form className='box'>
            <TextField id="standard-search" label="Enter" type="search" />
            <br />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </form>
    </div>
);

export default Searchbox;