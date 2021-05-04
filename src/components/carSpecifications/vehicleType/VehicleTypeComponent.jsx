import React, {useEffect, useState} from 'react';
import VehicleTypeService from "../../../service/VehicleTypeService";
import {Accordion, Button, Card, CardDeck, Spinner} from "react-bootstrap";
import VehicleTypeTableComponent from "./VehicleTypeTableComponent";
import VehicleTypeReadModalComponent from "./VehicleTypeReadModalComponent";
import VehicleTypeEditModalComponent from "./VehicleTypeEditModalComponent";
import VehicleTypeAddModalComponent from "./VehicleTypeAddModalComponent";
import VehicleTypeDeleteModalComponent from "./VehicleTypeDeleteModalComponent";


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
                    <VehicleTypeTableComponent
                        vehicleTypes={vehicleTypes}
                        getVehicleTypeToAction={getVehicleTypeToAction}
                        handleShowRead={handleShowRead}
                        handleShowEdit={handleShowEdit}
                        handleShowDelete={handleShowDelete}
                    />
                    <VehicleTypeReadModalComponent
                        show={showRead}
                        vehicleType={vehicleTypeToAction}
                        handleClose={handleCloseRead}
                    />
                    {
                        showEdit &&  <VehicleTypeEditModalComponent
                        show={showEdit}
                        vehicleType={vehicleTypeToAction}
                        handleClose={handleCloseEdit}
                    />
                    }
                    <VehicleTypeDeleteModalComponent
                        show={showDelete}
                        vehicleType={vehicleTypeToAction}
                        handleClose={handleCloseDelete}
                    />
                    <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                    <VehicleTypeAddModalComponent
                    show={showAdd}
                    handleClose={handleCloseAdd}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default VehicleTypeComponent;