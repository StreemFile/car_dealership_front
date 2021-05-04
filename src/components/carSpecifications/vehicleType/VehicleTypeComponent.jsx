import React, {useEffect, useState} from 'react';
import VehicleTypeService from "../../../service/VehicleTypeService";
import {Accordion, Button, Card} from "react-bootstrap";
import AddModalComponent from "../AddModalComponent";
import DeleteModalComponent from "../DeleteModalComponent";
import ReadModalComponent from "../ReadModalComponent";
import EditModalComponent from "../EditModalComponent";
import AutomobileSpecificationsTableComponent from "../AutomobileSpecificationsTableComponent";


const VehicleTypeComponent = (props) => {

    const [vehicleTypes, setVehicleTypes] = useState([]);

    const [vehicleTypeToAction, setVehicleTypeToAction] = useState({});
    const getVehicleTypeToAction = (id) => {
        VehicleTypeService.getById(id).then(result =>
            setVehicleTypeToAction(result.data))
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
        VehicleTypeService.getAll().then(res => setVehicleTypes(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="0">
                Тип кузова
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body style={{background: "#FFF2CD"}}>
                    <AutomobileSpecificationsTableComponent
                        name="Тип кузова"
                        objects={vehicleTypes}
                        getObjectToAction={getVehicleTypeToAction}
                        handleShowRead={handleShowRead}
                        handleShowEdit={handleShowEdit}
                        handleShowDelete={handleShowDelete}
                    />
                    <ReadModalComponent
                        show={showRead}
                        name="Тип кузова"
                        object={vehicleTypeToAction}
                        modalTitle="VehicleType details"
                        handleClose={handleCloseRead}
                    />
                    {
                        showEdit &&  <EditModalComponent
                            show={showEdit}
                            object={vehicleTypeToAction}
                            service={VehicleTypeService}
                            modalTitle="Edit vehicleType"
                            name="Тип кузова"
                            handleClose={handleCloseEdit}
                        />
                    }
                    <DeleteModalComponent
                        show={showDelete}
                        object={vehicleTypeToAction}
                        service={VehicleTypeService}
                        modalTitle="Delete vehicleType"
                        handleClose={handleCloseDelete}
                    />
                    <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                    <AddModalComponent
                        show={showAdd}
                        handleClose={handleCloseAdd}
                        service={VehicleTypeService}
                        modalTitle="Add vehicleType"
                        cardTitle="Тип кузова"
                    />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default VehicleTypeComponent;