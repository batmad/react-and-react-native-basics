import { useState } from "react";

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState('');

    const appendNumberToDisplay = (value) => {
        setDisplayNumber(displayNumber + value);
    }

    // console.log(displayNumber);
    
    const calculateNumber = () => {
        setDisplayNumber(eval(displayNumber))
    }

    const clearEntryNumber = () => {
        typeof displayNumber === 'number'? setDisplayNumber('') : setDisplayNumber(displayNumber.slice(0, -1));
    }

    const clearAllNumber = () => {
        setDisplayNumber('');
    }

    return (
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <input type="text" id="display" className="form-control mb-2" style={{textAlign: 'right'}} value={displayNumber} disabled />
                        <div className="row mb-2 d-flex align-items-stretch">
                            <div className="col-6">
                                <button className="btn btn-secondary btn-block" onClick={()=> clearAllNumber()}>AC</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-secondary btn-block" onClick={()=> clearEntryNumber()}>CE</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('+')}>+</button>
                            </div>
                        </div>
                        <div className="row mb-2 d-flex align-items-stretch">
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('1')}>1</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('2')}>2</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('3')}>3</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('-')}>-</button>
                            </div>
                        </div>
                        <div className="row mb-2 d-flex align-items-stretch">
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('4')}>4</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('5')}>5</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('6')}>6</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('*')}>*</button>
                            </div>
                        </div>
                        <div className="row mb-2 d-flex align-items-stretch">
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('7')}>7</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('8')}>8</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('9')}>9</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('/')}>/</button>
                            </div>
                        </div>
                        <div className="row mb-2 d-flex align-items-stretch">
                            <div className="col-6">                   
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('0')}>0</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> appendNumberToDisplay('.')}>.</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-block" onClick={()=> calculateNumber()}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;