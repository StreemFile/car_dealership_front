import React, {useEffect, useState} from 'react';
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import {Card, CardDeck} from "react-bootstrap";
import DealershipService from "../../service/DealershipService";
import PurchaseService from "../../service/PurchaseService";

const RequestComponent = (props) => {
    const [totalSalaries, setTotalSalaries] = useState(null);

    const [income, setIncome] = useState(0);
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    const [groupedAndCountedMakes, setGroupedAndCountedMakes] = useState(null);

    const handleDateFrom = (event) => {
        setDateFrom(event.target.value);
        if(event.target.value.length > 0 && dateTo.length > 0){
            PurchaseService.getByDates(event.target.value, dateTo).then(result => {
                console.log(result.data)
                setIncome(result.data)
            });

        }
    }

    const handleDateTo = event => {
        setDateTo(event.target.value);
        if(event.target.value.length > 0 && setDateFrom.length > 0){
            PurchaseService.getByDates(dateFrom, event.target.value).then(result => {
                console.log(result.data)
                setIncome(result.data)
            });
        }
    }

    useEffect(() => {
        if(totalSalaries === null){
            DealershipService.getTotalSalaries().then(result => {
                setTotalSalaries(result.data)
            })
        }
        if(groupedAndCountedMakes === null){
            PurchaseService.groupAndCountMakes().then(result => setGroupedAndCountedMakes(result.data))
        }
    })

    return (
        <AllAutomobilesWrapper style={{backgroundColor: 'white', borderRadius: "10px", width: "70%"}}>
            <CardDeck>
                <Card.Header><h4>Запити</h4></Card.Header>
                <Card>
                    <Card.Body>
                        <Card.Title>Сума зарплат в кожному автосалоні</Card.Title>
                        <Card.Text>
                            {totalSalaries !== null && totalSalaries.map(item => <p>{item.city}: {item.totalSalary}</p>)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Заробіток з машин за проміжок часу</Card.Title>
                        <Card.Text>
                            <div>
                                <label>
                                    Від
                                    <input type="date"
                                           className="form-control"
                                           value={dateFrom}
                                           onChange={(event) => handleDateFrom(event)}
                                    />
                                </label><br/>
                                <label>
                                    До
                                    <input type="date"
                                           className="form-control"
                                           value={dateTo}
                                           onChange={(event) =>
                                               handleDateTo(event)}
                                    />
                                </label>
                            </div>
                            {income > 0 && <p>Заробіток за заданий проміжок часу: {income}$</p>}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Кількість проданих машин кожної марки</Card.Title>
                        <Card.Text>
                            {groupedAndCountedMakes !== null && groupedAndCountedMakes.map(item => <p>Марка: {item.make}, кількість продаж: {item.count}</p>)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </AllAutomobilesWrapper>
    );
}

export default RequestComponent;