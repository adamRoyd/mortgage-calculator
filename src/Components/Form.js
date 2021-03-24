import { TextField, InputAdornment, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        marginBottom: 10
    }
}));

export default function Form() {
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('£');

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id='currency-label'>Currency</InputLabel>
                <Select
                    labelId='currency-label'
                    onChange={handleCurrencyChange}
                    value={currency}
                >
                    <MenuItem value={'£'}>£</MenuItem>
                    <MenuItem value={'$'}>$</MenuItem>
                    <MenuItem value={'€'}>€</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id='loan-amount'
                    label='Loan Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                    }}
                />
            </FormControl>

        </div>
    )
};