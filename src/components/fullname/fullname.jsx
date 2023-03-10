import { Name } from '../../pages/userinfo/name'
export function Fullname(props) {
    return <>
        <Name fullName={props.fullName}
            setFullName={props.setFullName}></Name>
        MiddleName:<input type="text"
            style={{ color: 'white', margin: '20px', borderRadius: '20px', height: '30px', background: 'black' }}
            value={props.fullName.middleName} onChange={e => props.setFullName({ ...props.fullName, middleName: e.target.value })}
        />
    </>
}