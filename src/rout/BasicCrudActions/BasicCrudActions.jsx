import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useNavigate } from 'react-router-dom'

// problems
// a: // not ok(not important) - we should not have a variable specific to categories


export function BasicCrudActions(props) { // BasicCrudActions
    const navigate = useNavigate()

    return <>
        <div>
            <button style={{ width: '40px', height: '30px', background: 'grey' }} onClick={() => {
                // string interpolation ``
                axios.delete(`http://tiswork.tisserv.net:9009/${props.pageName}/${props.item.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(resp => {
                  props.onReload()  
                })

            }}
            >{<ClearIcon />}</button>
            <button style={{ width: '40px', height: '30px', background: 'grey' }} onClick={() => {
                navigate(`/${props.pageUrlPart}/view/${props.item.id}`)
            }}>{<DoneIcon />} </button>
            <button style={{ width: '40px', height: '30px', background: 'grey' }} onClick={() => {
                navigate(`/${props.pageUrlPart}/update/${props.item.id}`)
            }}>{<PriorityHighIcon />}</button>
        </div>
    </>
}

// local   -  only one party owns this information // it must be transfered
// global  -  both party can know it without interaction

// 1. for dovresi qura bilerem
// 2. teze deyisen yarada bilerem
// (3. props dan goture bilerem)
// 4. params(react router) den goture bilerem
// 5. backend muraciet ede bilerem, ordan goture bilerem
// 6. localStorage den goure bilerem
// 7. cookie goture bilerem
// ....
// 99 

