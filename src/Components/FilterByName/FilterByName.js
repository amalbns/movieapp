import React from 'react';
import { Form } from 'react-bootstrap';

const FilterByName = ({inputSearch , setInputSearch}) => {
return (
    <div>
        <Form.Control type="text" placeholder="Search..."
        onChange={(e) => setInputSearch (e.target.value)}
        value={inputSearch}
        />
    </div>
)
}

export default FilterByName