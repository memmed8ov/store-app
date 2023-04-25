import { Radio } from "@mui/material";
import { useState } from "react";
export function Pin() {
    const [pin, setPin] = useState(0) // number
    const [show, setShow] = useState(false)

    console.log('inside function', pin)
    console.log('inside function', show)
    return <>
        <div style={{ marginLeft: '130px' }}>
            {!show && <div >
                <Radio checked={pin >= 1}  >

                </Radio >
                <Radio checked={pin >= 10} >

                </Radio>
                <Radio checked={pin >= 100}>

                </Radio>
                <Radio checked={pin >= 1000}>

                </Radio>
            </div>}
            {show &&
                <input type='text' style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px', marginBottom: '5px' }} value={pin} />
            }

            <button style={{ width: '30px', height: '20px', background: 'grey', marginLeft: '50px' }} onClick={() => {
                setShow(!show)
            }}>
            </button>
        </div>

        <div>
            <button onClick={() => {
                console.log('inside button[before if]', pin)
                if (pin < 1000) {
                    console.log('inside button orta', pin)
                    setPin(pin * 10 + 1)
                    console.log('inside button ortasonra', pin)
                }
                console.log('inside button after', pin)

            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px', marginBottom: '5px' }}
            >1</button>

            <button onClick={() => {
                console.log('inside button[before if]', pin)

                if (pin < 1000) {
                    console.log('inside button orta', pin)
                    setPin(pin * 10 + 2)
                }

                if (pin * 10 + 2 == 4002) {
                    alert('It is developed by Reyhan')
                }

                console.log('inside button after', pin)
            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}
            >2</button>
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 3)
                }

            }
            } style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}
            >3</button>
            <br />
            <button onClick={() => {
                console.log(pin)

                if (pin < 1000) {
                    setPin(pin * 10 + 4)


                }



            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px', marginBottom: '5px' }}
            >4</button>
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 5)
                }

            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}
            >5</button>
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 6)
                }


            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}
            >6</button>
            <br />
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 7)
                }


            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}>7</button>
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 8)
                }
            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}>8</button>
            <button onClick={() => {
                if (pin < 1000) {
                    setPin(pin * 10 + 9)
                }
            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}>9</button>
            <br />
            <button style={{ border: '0px', background: 'none', width: '120px', height: '30px', }}></button>
            <button onClick={() => {

                console.log(pin)
                if (pin < 1000) {

                    setPin(pin * 10 + 0)


                }



            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }}>0</button>
            <button onClick={() => {
                setPin(Math.floor(pin / 10))
                // 
            }} style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }} > {'<-'}</button>

        </div>
    </>
}

