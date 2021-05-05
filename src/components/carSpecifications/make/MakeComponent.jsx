import React, {useEffect, useState} from 'react';
import MakeService from "../../../service/MakeService";
import {Accordion, Button, Card, Spinner} from "react-bootstrap";
import AddModalComponent from "../AddModalComponent";
import DeleteModalComponent from "../DeleteModalComponent";
import ReadModalComponent from "../ReadModalComponent";
import EditModalComponent from "../EditModalComponent";
import AutomobileSpecificationsTableComponent from "../AutomobileSpecificationsTableComponent";


const MakeComponent = (props) => {

    const [makes, setMakes] = useState([]);

    const [makeToAction, setMakeToAction] = useState({});
    const getMakeToAction = (id) => {
        MakeService.getById(id).then(result =>
            setMakeToAction(result.data))
    }

    const [showRead, setShowRead] = useState(false);
    const handleCloseRead = () => setShowRead(false);
    const handleShowRead = () => setShowRead(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    useEffect(() => {
        MakeService.getAll().then(res => setMakes(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="1">
                Марка
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                {
                    makes.length === 0
                        ? <Spinner animation="border"/>
                        : <Card.Body style={{background: "#FFF2CD"}}>
                            <AutomobileSpecificationsTableComponent
                                objects={makes}
                                name="Марка"
                                getObjectToAction={getMakeToAction}
                                handleShowRead={handleShowRead}
                                handleShowEdit={handleShowEdit}
                                handleShowDelete={handleShowDelete}
                            />
                            <ReadModalComponent
                                show={showRead}
                                name="Марка"
                                object={makeToAction}
                                modalTitle="Make details"
                                handleClose={handleCloseRead}
                            />
                            {
                                showEdit && <EditModalComponent
                                    show={showEdit}
                                    object={makeToAction}
                                    service={MakeService}
                                    modalTitle="Edit make"
                                    name="Марка"
                                    handleClose={handleCloseEdit}
                                />
                            }
                            <DeleteModalComponent
                                show={showDelete}
                                object={makeToAction}
                                service={MakeService}
                                modalTitle="Delete make"
                                handleClose={handleCloseDelete}
                            />
                            <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                            <AddModalComponent
                                show={showAdd}
                                handleClose={handleCloseAdd}
                                service={MakeService}
                                modalTitle="Add make"
                                cardTitle="Марка"
                            />
                        </Card.Body>
                }
            </Accordion.Collapse>
        </Card>
    );
}

export default MakeComponent;