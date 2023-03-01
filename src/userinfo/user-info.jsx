import { Card } from '@mui/material'
import { useState } from 'react'
import { Fullname } from './fullname'
export function UserInfo() {
    const [age, setAge] = useState(0)
    const [countryInfo, setCountryInfo] = useState({
        country: '',
        nationality: ''
    })
    const [fullName, setFullName] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
    })
    return <>
        <div>
            <Card style={{ margin: '10px', width: '800px' }}>
                <Fullname fullName={fullName}
                    setFullName={setFullName}>
                </Fullname>

                <br />
                <br />
                Age:<input type="number"
                    style={{ color: 'white', borderRadius: '20px', height: '30px', background: 'black' }}
                    value={age} onChange={e => setAge(parseInt(e.target.value))}
                />
                <div>
                    <br />
                    <br />
                    Country:<input type="text"
                        style={{ color: 'white', borderRadius: '20px', height: '30px', background: 'black' }}
                        value={countryInfo.country} onChange={e => setCountryInfo({ ...countryInfo, country: e.target.value })}
                    />
                    <br />
                    <br />
                    Nationality:<input type="text"
                        style={{ color: 'white', borderRadius: '20px', height: '30px', background: 'black' }}
                        value={countryInfo.nationality} onChange={e => setCountryInfo({ ...countryInfo, nationality: e.target.value })}
                    />
                </div>
                <br />
                <br />
                <button style={{ width: "70px", height: "30px", textAlign: 'center', color: 'black', margin: '10px', background: 'white', borderRadius: '20px' }}
                    onClick={() => {
                        let result = true
                        function checkName(fullName) {

                            if (fullName.indexOf(' ') != -1) {
                                alert('can not white spaces')
                                result = false
                            }
                            if (fullName === '') {
                                alert('should not be blank')
                                result = false
                            } else if (fullName[0].toLowerCase() == fullName[0]) {
                                alert('should be capitalize')
                                result = false
                            }
                        }
                        checkName(fullName.firstName)
                        checkName(fullName.lastName)
                        checkName(fullName.middleName)
                        // //////////////////////////////////////////////////////
                        if (age === 0) {
                            alert('should not be blank')
                            result = false
                        }
                        if (age > 150) {
                            alert('is not possible')
                            result = false
                        }
                        if (age < 0) {
                            alert('age is invalid')
                            result = false
                        }

                        //////////////////////////////////////////////////////////
                        if (countryInfo.country === '') {
                            alert('should not be blank')
                            result = false
                        } else if (countryInfo.country[0].toLowerCase() == countryInfo.country[0]) {
                            alert('should be capitalize')
                            result = false
                        }

                        ////////////////////////////////////////////////////////////
                        if (countryInfo.nationality === '') {
                            alert('should not be blank')
                            result = false
                        } else if (countryInfo.nationality[0].toLowerCase == countryInfo.nationality[0]) {
                            alert('should be capitalize')
                            result = false
                        }

                        /////////////////////////////////////////////////////////
                        if (result) {
                            alert('everything is correct')
                        }

                    }
                    }> Validate</button>

                <button style={{ width: "70px", height: "30px", textAlign: 'center', color: 'black', background: 'white', borderRadius: '20px' }}
                    onClick={() => {
                        setFullName({
                            firstName: '',
                            lastName: '',
                            middleName: '',
                        })
                        setAge(0)
                        setCountryInfo({
                            country: '',
                            nationality: ''
                        })
                    }}>  Reset</button>
                <br />
            </Card>
        </div>
    </>
}

