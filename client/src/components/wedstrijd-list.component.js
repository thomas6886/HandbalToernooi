import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wedstrijd = props => (
    <tr>
        <td>{props.wedstrijd.poule}</td>
        <td>{props.wedstrijd.teamThuis}</td>
        <td>{props.wedstrijd.teamGast}</td>
        <td>{props.wedstrijd.puntenThuis} - {props.wedstrijd.puntenGast}</td>
        <td>{props.wedstrijd.startTijd}</td>
        <td>{props.wedstrijd.veld}</td>

    </tr>
);

//Main render
export default class WedstrijdList extends Component {

    //Constructor
    constructor(props){
        super(props);
        this.state = {wedstrijden: []};
    }

    //Called right after mounting component
    componentDidMount() {
        axios.get('api/wedstrijden/')
            .then(response => {
                this.setState({ wedstrijden: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //Creates list of wedstrijden
    wedstrijdList() {
        return this.state.wedstrijden.map(function(currentWedstrijd, i){
            return <Wedstrijd wedstrijd={currentWedstrijd} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead className="thead-dark">
                    <tr>
                        <th>Poule</th>
                        <th>Thuis</th>
                        <th>Gasten</th>
                        <th>Stand</th>
                        <th>Tijd</th>
                        <th>Veld</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.wedstrijdList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

//Functions


