import React, {memo} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';

export const SelectVariants = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const InputLabelMemo = memo(InputLabel)

  return (
    <div>
      <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
        <InputLabelMemo id="demo-simple-select-standard-label">Age</InputLabelMemo>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export const SelectVariantsMemo = memo(SelectVariants)

