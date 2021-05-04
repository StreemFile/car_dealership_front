import React, {Component} from 'react';

class DeleteButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger mt-1"
                        onClick={() => this.props.delete(this.props.id)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default DeleteButtonComponent