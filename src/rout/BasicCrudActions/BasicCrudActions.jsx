import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useNavigate } from 'react-router-dom'

export function BasicCrudActions(props) {
    const navigate = useNavigate()

    return <>
        <div>
            <button style={{ width: '40px', height: '30px', background: 'grey' }} onClick={() => {
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

