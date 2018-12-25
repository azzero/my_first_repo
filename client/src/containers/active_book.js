import React, { Component } from 'react'
import {connect} from 'react-redux'
class UserDetail extends Component {
  render () {
    const {activeUser} = this.props;
    if(!activeUser){
      return <div>selectionner une utilisateur </div>
    }
    return (
      <div>
        <h3>{activeUser.name}</h3>

      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    activeUser: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)