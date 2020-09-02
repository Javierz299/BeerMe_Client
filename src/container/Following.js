import React, { Component } from 'react'

import { connect } from 'react-redux'

class Following extends Component {





    render() {
        return (
            <div>
                Following
                {this.props.friends === null ?
                <div>no friends yet</div>:
                this.props.friends.map(friend => <li key={friend[0].id}>{
                    friend[0].username}
                    </li>
                    )
            }

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        friends: state.user_reducer.friendsList,
    }
}


export default connect(mapStateToProps)(Following)
