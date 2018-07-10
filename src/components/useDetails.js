import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
class userDetails extends Component {
    render(){
        if(!this.props.user){
            
            return (<h3> Select User</h3>);
        }
        return(
            <div>
                <img src = {this.props.user.thumbnail}/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description : {this.props.user.description}</h3>
            </div>

        )
    }
 
}


function mapStateToProps(state) {
    return {
        user: state.activeuser
    };
}


export default connect(mapStateToProps )(userDetails);
