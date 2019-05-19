import React, { Component } from 'react';

class DetailPage extends Component {
    state={
        candidates:[]
    }

        render(){
            for(let cand in this.props.candidates){
                this.state.candidates.push(this.props.candidates[cand]);
            }
            console.log(this.state.candidates)
            return(
                <div>
                    <h3>{this.props.first_name} {this.props.last_name}</h3>
                    <table>
                        <tr>
                            <th>Company Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZIP</th>
                            <th>Email</th>
                            <th>Web</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>{this.props.company_name}</td>
                            <td>{this.props.city}</td>
                            <td>{this.props.state}</td>
                            <td>{this.props.zip}</td>
                            <td>{this.props.email}</td>
                            <td>{this.props.web}</td>
                            <td>{this.props.age}</td>
                        </tr>
                    </table>
                </div>
            )
    }    
}

export default DetailPage;