import React, {Component} from 'react';
import CustomerService from "../../service/CustomerService";
import GetAllButtonAtUpdateAndGetByIdComponent from "../../../GeneralComponents/GetAllButtonAtUpdateAndGetByIdComponent"

class CustomerUpdateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: "",
            telephone: "",
            placeOfResidence: "",
            address: "",
            passport: "",
            description: "",
            created_at: null
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
        this.changePlaceOfResidenceHandler = this.changePlaceOfResidenceHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePassportHandler = this.changePassportHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getById(this.state.id).then(res => {
           let customer = res.data;

           this.setState({
               name: customer.name,
               telephone: customer.telephone,
               placeOfResidence: customer.placeOfResidence,
               address: customer.address,
               passport: customer.passport,
               description: customer.description,
               created_at: customer.created_at
           });
        });
    }

    changeNameHandler = (e) => {
        this.setState({name: e.target.value});
    }

    changeTelephoneHandler = (e) => {
        this.setState({telephone: e.target.value});
    }

    changePlaceOfResidenceHandler = (e) => {
        this.setState({placeOfResidence: e.target.value});
    }

    changeAddressHandler = (e) => {
        this.setState({address: e.target.value});
    }

    changePassportHandler = (e) => {
        this.setState({passport: e.target.value});
    }

    changeDescriptionHandler = (e) => {
        this.setState({description: e.target.value});
    }

    updateCustomer = (e) => {
        e.preventDefault();

        let customer = {
            id: this.state.id,
            name: this.state.name,
            telephone: this.state.telephone,
            placeOfResidence: this.state.placeOfResidence,
            address: this.state.address,
            passport: this.state.passport,
            description: this.state.description,
            created_at: this.state.created_at
        };

        CustomerService.update(customer, this.state.id).then( res => {
            this.props.history.push("/customers");
        })
    }

    render() {
        return (
            <div>
                <form autoComplete="off" style={{width:"600px"}}>
                    <input type="text" className="form-control m-3" name="name"
                           placeholder="Введіть ПІП" value={this.state.name}
                           onChange={this.changeNameHandler}/>
                    <input type="text" className="form-control m-3" name="telephone"
                           placeholder="Введіть номер телефону" value={this.state.telephone}
                           onChange={this.changeTelephoneHandler}/>
                    <input type="text" className="form-control m-3" name="placeOfResidence"
                           placeholder="Введіть місто проживання" value={this.state.placeOfResidence}
                           onChange={this.changePlaceOfResidenceHandler}/>
                    <input type="text" className="form-control m-3" name="address"
                           placeholder="Введіть адресу" value={this.state.address}
                           onChange={this.changeAddressHandler}/>
                    <input type="text" className="form-control m-3" name="passport"
                           placeholder="Введіть номер паспорту" value={this.state.passport}
                           onChange={this.changePassportHandler}/>
                    <input type="text" className="form-control m-3" name="description"
                           placeholder="Description" value={this.state.description}
                           onChange={this.changeDescriptionHandler}/>
                    <button type="submit" className="btn btn-success" style={{width:"100px"}} onClick={this.updateCustomer}>
                        Edit
                    </button>
                    <GetAllButtonAtUpdateAndGetByIdComponent />
                </form>
            </div>
        )
    }
}

export default CustomerUpdateComponent 