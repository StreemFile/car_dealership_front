import React, {useEffect, useState} from 'react';
import ProducingCountryService from "../../../service/ProducingCountryService";
import {Accordion, Button, Card} from "react-bootstrap";
import AddModalComponent from "../AddModalComponent";
import DeleteModalComponent from "../DeleteModalComponent";
import ReadModalComponent from "../ReadModalComponent";
import EditModalComponent from "../EditModalComponent";
import AutomobileSpecificationsTableComponent from "../AutomobileSpecificationsTableComponent";


const ProducingCountryComponent = (props) => {

    const [producingCountrys, setProducingCountrys] = useState([]);

    const [producingCountryToAction, setProducingCountryToAction] = useState({});
    const getProducingCountryToAction = (id) => {
        ProducingCountryService.getById(id).then(result =>
            setProducingCountryToAction(result.data))
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
        ProducingCountryService.getAll().then(res => setProducingCountrys(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="5">
                Країна пригнання
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
                <Card.Body style={{background: "#FFF2CD"}}>
                    <AutomobileSpecificationsTableComponent
                        name="Країна пригнання"
                        objects={producingCountrys}
                        getObjectToAction={getProducingCountryToAction}
                        handleShowRead={handleShowRead}
                        handleShowEdit={handleShowEdit}
                        handleShowDelete={handleShowDelete}
                    />
                    <ReadModalComponent
                        show={showRead}
                        name="Країна пригнання"
                        object={producingCountryToAction}
                        modalTitle="ProducingCountry details"
                        handleClose={handleCloseRead}
                    />
                    {
                        showEdit &&  <EditModalComponent
                            show={showEdit}
                            object={producingCountryToAction}
                            service={ProducingCountryService}
                            modalTitle="Edit producingCountry"
                            name="Країна пригнання"
                            handleClose={handleCloseEdit}
                        />
                    }
                    <DeleteModalComponent
                        show={showDelete}
                        object={producingCountryToAction}
                        service={ProducingCountryService}
                        modalTitle="Delete producingCountry"
                        handleClose={handleCloseDelete}
                    />
                    <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                    <AddModalComponent
                        show={showAdd}
                        handleClose={handleCloseAdd}
                        service={ProducingCountryService}
                        modalTitle="Add producingCountry"
                        cardTitle="Країна пригнання"
                    />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default ProducingCountryComponent;