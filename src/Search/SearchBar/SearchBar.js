// SEARCH BAR ON THE LANDING PAGE - (DO NOT HAVE TO BE LOGGED IN TO SEARCH?)
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    return (
        <form>
            <div>
              <InputGroup className={"mb-3"}>
                <Button variant="primary" onClick={submit}>Search</Button>
                <span className="icon is-small"><i className="fas fa-search"></i></span>
              </InputGroup>
            </div>
                    <Form.Control
                    onChange={(e) => setTerm(e.target.value)}
                    // updating term and location on every key stroke
                        placeholder="Tacos Las Dos Hermanas, El Asadero ..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
        </form>

    )
}

const styles = {

}
