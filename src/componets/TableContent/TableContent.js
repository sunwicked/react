import React from 'react';
import {Link} from 'react-router-dom';
import './TableContent.css';

const TableContent= (props)=>{

    return(
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>ZIP</th>
                    <th>Email</th>
                    <th>Web</th>
                    <th>Age</th>
                </tr>
                {props.candidates.map(candidate =>{
                    return (<tr key={candidate.id}>
                        <Link to={'/user/'+ candidate.id}><td>
                            {candidate.first_name}
                        </td></Link>
                        <td>{candidate.last_name}</td>
                        <td>{candidate.company_name}</td>
                        <td>{candidate.city}</td>
                        <td>{candidate.state}</td>
                        <td>{candidate.zip}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.web}</td>
                        <td>{candidate.age}</td>
                    </tr> )  
                })}
            </table>
        </div>
    );


}
    

export default TableContent;