import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        const endpoint = 'http://localhost:3300/api/jokes'
        const options = {
            headers: {
                'Authorization': localStorage.getItem('jwt')
            }
        }
        axios
            .get(endpoint, options)
            .then(res => {
                this.setState({ jokes: res.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const token = localStorage.getItem('jwt')
        if (token) {
            return (
                <>
                    <h2>So you like dad jokes...</h2>
                    <ul>
                        {this.state.jokes.map(joke => (
                            <li key={joke.id}>{joke.joke}</li>
                        ))}
                    </ul>
                </>
            )
        } else {
            return (
                <>Please login to see the list of jokes</>
            )
        }

    }
}

export default Jokes