import React from 'react';
import ModalWelcome from './ModalWelcome';

class ModalWelcomeContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isModal: false
        }
    }

    componentDidMount(){
         this.setState(state => ({ isModal: !state.isModal }))
    }

    hideModal = () => {
        this.setState(state => ({ isModal: !state.isModal}))
    }
  

    render() {
        return (
            <div style={{position: "absolute", zIndex: 2}}>
                {this.state.isModal && <ModalWelcome onClose={this.hideModal} />}
            </div>
        )
    }
}

export default ModalWelcomeContainer;