import React from 'react';

function Filter(props) {
return (
<label>
Search Contacts:
<input
     type="text"
     name="filter"
     value={props.filter}
     onChange={props.onChange}
   />
</label>
);
}

export default Filter;
