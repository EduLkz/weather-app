import React from 'react';
import './searchError.css';

const SearchError = (props) => {

    return(props.trigger) ? (    
        <div className="error">
            <h1 className="error-title">An error has occur.</h1>
            <p>{props.message}</p>
            <button onClick={() => {props.setTrigger(false)}}>Ok</button>
        </div>
        ) : "";
}

export default SearchError;