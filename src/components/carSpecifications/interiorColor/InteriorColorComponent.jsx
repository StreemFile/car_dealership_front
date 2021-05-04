import React, {useEffect, useState} from 'react';
import InteriorColorService from "../../../service/InteriorColorService";
import {Accordion, Button, Card} from "react-bootstrap";
import AddModalComponent from "../AddModalComponent";
import DeleteModalComponent from "../DeleteModalComponent";
import ReadModalComponent from "../ReadModalComponent";
import EditModalComponent from "../EditModalComponent";
import AutomobileSpecificationsTableComponent from "../AutomobileSpecificationsTableComponent";


const InteriorColorComponent = (props) => {

    const [interiorColors, setInteriorColors] = useState([]);

    const [interiorColorToAction, setInteriorColorToAction] = useState({});
    const getInteriorColorToAction = (id) => {
        InteriorColorService.getById(id).then(result =>
            setInteriorColorToAction(result.data))
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
    const handleShowDelete= () => setShowDelete(true);


    useEffect(() => {
        InteriorColorService.getAll().then(res => setInteriorColors(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="3">
                Колір салону
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body style={{background: "#FFF2CD"}}>
                    <AutomobileSpecificationsTableComponent
                        objects={interiorColors}
                        getObjectToAction={getInteriorColorToAction}
                        handleShowRead={handleShowRead}
                        handleShowEdit={handleShowEdit}
                        handleShowDelete={handleShowDelete}
                    />
                    <ReadModalComponent
                        show={showRead}
                        name="Колір салону"
                        object={interiorColorToAction}
                        modalTitle="InteriorColor details"
                        handleClose={handleCloseRead}
                    />
                    {
                        showEdit &&  <EditModalComponent
                            show={showEdit}
                            object={interiorColorToAction}
                            service={InteriorColorService}
                            modalTitle="Edit interiorColor"
                            name="Колір салону"
                            handleClose={handleCloseEdit}
                        />
                    }
                    <DeleteModalComponent
                        show={showDelete}
                        object={interiorColorToAction}
                        service={InteriorColorService}
                        modalTitle="Delete interiorColor"
                        handleClose={handleCloseDelete}
                    />
                    <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                    <AddModalComponent
                        show={showAdd}
                        handleClose={handleCloseAdd}
                        service={InteriorColorService}
                        modalTitle="Add interiorColor"
                        cardTitle="Колір салону"
                    />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default InteriorColorComponent;