import React, {useEffect, useState} from 'react';
import ExteriorColorService from "../../../service/ExteriorColorService";
import {Accordion, Button, Card, Spinner} from "react-bootstrap";
import AddModalComponent from "../AddModalComponent";
import DeleteModalComponent from "../DeleteModalComponent";
import ReadModalComponent from "../ReadModalComponent";
import EditModalComponent from "../EditModalComponent";
import AutomobileSpecificationsTableComponent from "../AutomobileSpecificationsTableComponent";
import {SpinnerWrapperLayout, SpinnerWrapperGrid} from "../../../layouts/SpinnerWrapperLayout";


const ExteriorColorComponent = (props) => {

    const [exteriorColors, setExteriorColors] = useState([]);

    const [exteriorColorToAction, setExteriorColorToAction] = useState({});
    const getExteriorColorToAction = (id) => {
        ExteriorColorService.getById(id).then(result =>
            setExteriorColorToAction(result.data))
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
        ExteriorColorService.getAll().then(res => setExteriorColors(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="4">
                Колір автомобіля
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                {
                    exteriorColors.length === 0
                        ? <SpinnerWrapperGrid>
                            <SpinnerWrapperLayout>
                                <Spinner animation="border"/>
                            </SpinnerWrapperLayout>
                        </SpinnerWrapperGrid>
                        : <Card.Body style={{background: "#FFF2CD"}}>
                            <AutomobileSpecificationsTableComponent
                                objects={exteriorColors}
                                name="Колір"
                                getObjectToAction={getExteriorColorToAction}
                                handleShowRead={handleShowRead}
                                handleShowEdit={handleShowEdit}
                                handleShowDelete={handleShowDelete}
                            />
                            <ReadModalComponent
                                show={showRead}
                                name="Колір автомобіля"
                                object={exteriorColorToAction}
                                modalTitle="ExteriorColor details"
                                handleClose={handleCloseRead}
                            />
                            {
                                showEdit && <EditModalComponent
                                    show={showEdit}
                                    object={exteriorColorToAction}
                                    service={ExteriorColorService}
                                    modalTitle="Edit exteriorColor"
                                    name="Колір автомобіля"
                                    handleClose={handleCloseEdit}
                                />
                            }
                            <DeleteModalComponent
                                show={showDelete}
                                object={exteriorColorToAction}
                                service={ExteriorColorService}
                                modalTitle="Delete exteriorColor"
                                handleClose={handleCloseDelete}
                            />
                            <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                            <AddModalComponent
                                show={showAdd}
                                handleClose={handleCloseAdd}
                                service={ExteriorColorService}
                                modalTitle="Add exteriorColor"
                                cardTitle="Колір автомобіля"
                            />
                        </Card.Body>
                }
            </Accordion.Collapse>
        </Card>
    );
}

export default ExteriorColorComponent;