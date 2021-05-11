import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import {useInput} from "../../customHooks/customHooks";
import CompanyService from "../../service/CompanyService";

const CompanyEditModalComponent = (props) => {

    const name = useInput(props.company.name,);
    const cityOfTheMainOffice = useInput(props.company.cityOfTheMainOffice);
    const addressOfTheMainOffice = useInput(props.company.addressOfTheMainOffice);
    const telephoneOfTheMainOffice = useInput(props.company.telephoneOfTheMainOffice);
    const email = useInput(props.company.email);
    const description = useInput(props.company.description);

    const editCompany = (event) => {
        event.preventDefault();

        const newCompany = {
            id: props.company.id,
            name: name.value,
            cityOfTheMainOffice: cityOfTheMainOffice.value,
            addressOfTheMainOffice: addressOfTheMainOffice.value,
            telephoneOfTheMainOffice: telephoneOfTheMainOffice.value,
            email: email.value,
            description: description.value,
            created_at: props.company.created_at,
            modified_at: props.company.modified_at
        }

        CompanyService.update(newCompany, newCompany.id);
        props.handleCloseEditModal();
    }

    return (
        <Modal show={props.show} onHide={props.handleCloseEditModal} animation={true}>
            <Modal.Header>
                <Modal.Title>Edit company</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                               value={props.company.id}
                               className="form-control m-3"
                                   style={{width: "93%"}}
                               disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Назва компанії</Card.Title>
                        <Card.Text>
                            <input
                                type="text" {...name.bind}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто</Card.Title>
                        <Card.Text>
                            <input
                                type="text" {...cityOfTheMainOffice.bind}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Адреса</Card.Title>
                        <Card.Text>
                            <input
                                type="text" {...addressOfTheMainOffice.bind}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Номер телефону тех. підтримки</Card.Title>
                        <Card.Text>
                            <input
                                type="text" {...telephoneOfTheMainOffice.bind}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Електронна пошта</Card.Title>
                        <Card.Text>
                            <input
                                type="text" {...email.bind}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис</Card.Title>
                        <Card.Text>
                            <textarea type="text"
                                      onChange={description.bind.onChange}
                                      className="form-control m-3"
                                      style={{height: "300px", width: "93%" }}>
                                {description.bind.value}
                            </textarea>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата створення</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.company.created_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата останньої модифікації</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.company.modified_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseEditModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={editCompany}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CompanyEditModalComponent;