import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { retrieveCampus, editCampus, deleteCampus } from '../store';
import StudentList from './StudentList';

class Campus extends Component {
    componentDidMount () {
        this.props.loadCampus(this.props.match.params.id);
    }

    render () {
        if(this.props.campus.id) {      
            return (
                <div className='mainCampus'>
                
                    <div className='mainCampus-header'>
                        <div className='mainCampus-imgdesc'>
                            <img src={`${this.props.campus.imageUrl}`} />
                            <h4>  {this.props.campus.name}</h4>
                            <NavLink className='leftPadding' to={`/campuses/edit/${this.props.campus.id}`}>
                                <img className='listItem-delete' id={this.props.campus.id} src='/img/edit.ico' />
                            </NavLink>
                        </div>
                        <span>{this.props.campus.description}</span>  
                    </div>
                    <StudentList campusId={this.props.campus.id} />
            </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state, props) => ({ campus: state.campus, students: state.students })

const mapDispatchToProps = (dispatch, props) => ({
        loadCampus: (campusId) => dispatch(retrieveCampus(campusId)),
        deleteCampus: (event) => dispatch(deleteCampus(event.target.id, props.history)),  //put id on the image !
    })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campus));