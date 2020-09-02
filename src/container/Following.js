import React, { Component } from 'react'

import { connect } from 'react-redux'

class Following extends Component {





    render() {
        return (
            <div>
                Following
                {this.props.friends === null ?
                <div>no friends yet</div>:
                this.props.friends.map(friend => <div key={friend[0].id}><li>{
                    friend[0].username}
                    </li>
                <span>
                    Total Drinks: {friend[0].beer + friend[0].wine + 
                        friend[0].shots + friend[0].cocktail}
                </span>
                    </div>
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
