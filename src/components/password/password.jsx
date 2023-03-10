import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';

export function Password(props) {
    const [show, setShow] = useState('password')
    const navigate = useNavigate()

    return <>
        <input placeholder='password' style={{ width: '200px', height: '30px', color: 'white', textAlign: 'center' }} type={show}
            value={props.value} onChange={props.onChange} />
        <button onClick={() => {
            if (show == 'password') {
                setShow('text')
            } else {
                setShow('password')
            }
        }}
            style={{
                cursor: 'hand',
                marginTop: -40,
                marginLeft: 150,
                border: 0,
                borderRadius: 38,
                color: 'grey',
                width: '40px',
                height: '30px'
            }}>
            <VisibilityIcon />
        </button>
    </>
}
