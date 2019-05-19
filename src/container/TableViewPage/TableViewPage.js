import React, { Component } from 'react';
import { withRouter } from "react-router";
import TableContent from '../../componets/TableContent/TableContent';
import axios from 'axios';
import './TableViewPage.css';
import Search from '../../componets/Search/Search';
import Footer from '../../componets/Footer/Footer';
import DetailPage from '../Detail/DetailPage';
// import Pagination from '../Pagination/Pagination';

class TableViewPage extends Component {
    state={
        candidates:[]
    }
    componentWillMount() {
        axios.get('https://demo9197058.mockable.io/users')
            .then(response =>{
                let employe = response.data.splice(0,5);
                this.setState({candidates:employe});
            })
    }
    
    clickedHandler=(value)=>{
        console.log(value)
        this.setState({candidates: value});
        console.log(this.state.candidates);

    }

    render() {
        const array=[];
        for(let key in this.state.candidates){
            array.push({
                ...this.state.candidates[key],
                id: key
            })
			
        }

        return (
            <div className='TableView'>
                <Search/>
                <TableContent 
                    candidates={this.state.candidates}/>                
                {/* {this.state.candidates.map(arr=>(
                    <DetailPage key={arr.id} candidates={arr.first_name}/>
                ))} */}
                
                {/* {this.state.candidates.map(cand=>{
                    return(<DetailPage 
                        key={cand.id}
                        candidates={cand}/>)
                })}  */}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(TableViewPage);