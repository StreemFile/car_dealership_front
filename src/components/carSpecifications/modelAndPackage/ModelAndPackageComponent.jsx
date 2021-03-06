import React, {useEffect, useState} from 'react';
import ModelAndPackageService from "../../../service/ModelAndPackageService";
import {Accordion, Button, Card, Spinner} from "react-bootstrap";
import ModelAndPackageTableComponent from "./ModelAndPackageTableComponent";
import ModelAndPackageReadModalComponent from "./ModelAndPackageReadModalComponent";
import ModelAndPackageEditModalComponent from "./ModelAndPackageEditModalComponent";
import ModelAndPackageDeleteModalComponent from "./ModelAndPackageDeleteModalComponent";
import ModelAndPackageAddModalComponent from "./ModelAndPackageAddModalComponent";
import {SpinnerWrapperLayout, SpinnerWrapperGrid} from "../../../layouts/SpinnerWrapperLayout";


const ModelAndPackageComponent = (props) => {

    const [modelAndPackages, setModelAndPackages] = useState([]);

    const [modelAndPackageToAction, setModelAndPackageToAction] = useState({});

    const getModelAndPackageToAction = (id) => {
        ModelAndPackageService.getById(id).then(result =>
            setModelAndPackageToAction(result.data))
    }

    const [showRead, setShowRead] = useState(false);
    const handleCloseRead = () => setShowRead(false);
    const handleShowRead = () => {
        console.log(modelAndPackages);
        setShowRead(true);
    }

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
        ModelAndPackageService.getAll().then(res => setModelAndPackages(res.data))
    })

    return (
        <Card>
            <Accordion.Toggle style={{background: "#FFC107"}} as={Card.Header} eventKey="2">
                Модель
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                {
                    modelAndPackages.length === 0
                        ? <SpinnerWrapperGrid>
                            <SpinnerWrapperLayout>
                                <Spinner animation="border"/>
                            </SpinnerWrapperLayout>
                        </SpinnerWrapperGrid>
                        : <Card.Body style={{background: "#FFF2CD"}}>
                            <ModelAndPackageTableComponent
                                objects={modelAndPackages}
                                getObjectToAction={getModelAndPackageToAction}
                                handleShowRead={handleShowRead}
                                handleShowEdit={handleShowEdit}
                                handleShowDelete={handleShowDelete}
                            />
                            <ModelAndPackageReadModalComponent
                                object={modelAndPackageToAction}
                                show={showRead}
                                handleClose={handleCloseRead}
                            />
                            {
                                showEdit && <ModelAndPackageEditModalComponent
                                    show={showEdit}
                                    object={modelAndPackageToAction}
                                    service={ModelAndPackageService}
                                    handleClose={handleCloseEdit}
                                />
                            }
                            <ModelAndPackageDeleteModalComponent
                                show={showDelete}
                                object={modelAndPackageToAction}
                                service={ModelAndPackageService}
                                handleClose={handleCloseDelete}
                            />
                            <Button variant="success" onClick={handleShowAdd}>Add</Button>{' '}
                            <ModelAndPackageAddModalComponent
                                show={showAdd}
                                handleClose={handleCloseAdd}
                                service={ModelAndPackageService}
                            />
                        </Card.Body>
                }
            </Accordion.Collapse>
        </Card>
    );
}

export default ModelAndPackageComponent;