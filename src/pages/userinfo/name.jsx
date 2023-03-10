export function Name(props) {

    const fullName = props.fullName
    const setFullName = props.setFullName

    return <>
        FirstName:<input type="text"
            style={{ color: 'white', margin: '20px', borderRadius: '20px', height: '30px', background: 'black' }}
            value={fullName.firstName} onChange={e => setFullName({ ...props.fullName, firstName: e.target.value })}
        />
        LastName:<input type="text"
            style={{ color: 'white', margin: '10px', borderRadius: '20px', height: '30px', background: 'black' }}
            value={fullName.lastName} onChange={e => setFullName({ ...props.fullName, lastName: e.target.value })}
        />
    </>
}