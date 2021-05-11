import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import MakeService from "../../../service/MakeService";


const ModelAndPackageAddModalComponent = (props) => {

    const [makeOptions, setMakeOptions] = useState([]);
    const [makeName, setMakeName] = useState("");
    const [name, setName] = useState("");
    const [pack, setPack] = useState("");
    const [description, setDescription] = useState("");

    const [modelAndPackages, setModelAndPackages] = useState([]);

    const [doesAlreadyExist, setDoesAlreadyExist] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const checkIfAlreadyExists = () => {
        return modelAndPackages.filter(item =>
            item.model === name
            && item.pack === pack
            && item.make.name === makeName).length
    }

    const add = (make) => {
        if (checkIfAlreadyExists() === 0) {
            const newObject = {
                id: null,
                make: make,
                model: name,
                pack: pack,
                description: description,
                created_at: null,
                modified_at: null
            }
            props.service.create(newObject);
            handleClear();
            props.handleClose();
        }
        else {
            setDoesAlreadyExist(true);
        }
    }

    useEffect(() => {
        MakeService.getAll().then(result => {
            setMakeOptions(result.data);
        });
        props.service.getAll().then(result => {
            setModelAndPackages(result.data);
        });
        if (isAdded) {
            let newMake = {
                id: null,
                name: makeName,
                description: "",
                created_at: null,
                modified_at: null
            }
            setIsAdded(false);
            MakeService.create(newMake).then(result => {
                add(result.data);
            })
        }
    }, [isAdded])

    const handleClear = () => {
        setMakeName("");
        setName("");
        setPack("");
        setDescription("");
        setDoesAlreadyExist(false);
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Add model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    {
                        doesAlreadyExist &&
                        <div className="alert alert-danger" role="alert">
                            Такий об'єкт вже існує!
                        </div>
                    }
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Марка</Card.Title>
                        <Card.Text>
                            <input
                                list="makes"
                                name="makes"
                                value={makeName}
                                onChange={(event) =>
                                    setMakeName(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}
                                placeholder="Виберіть марку"
                            />
                            <datalist id="makes">
                                {makeOptions.map(item => {
                                    return <option key={item.id} value={item.name}/>
                                })}
                            </datalist>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Модель</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={name}
                                onChange={(event) =>
                                    setName(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть модель"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Комплектація</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={pack}
                                onChange={(event) =>
                                    setPack(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть комплектацію"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис</Card.Title>
                        <Card.Text>
                            <textarea
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть опис"
                                style={{height: "300px", width: "93%"}}/>

                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleClear}>
                    Clear
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => {
                        setIsAdded(true);
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModelAndPackageAddModalComponent;