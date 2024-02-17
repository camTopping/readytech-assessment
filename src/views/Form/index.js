import { Container, Typography, Button } from '@mui/material';
import PersonalDetails from './Components/PersonalDetails';
import StudyingDetails from './Components/StudyingDetails';
import FormHeader from './Components/FormHeader';
import ExtraInformation from './Components/ExtraInformation';
import Flex from 'components/Flex';
import { useState } from 'react';

function Form(props) {
    // Define errors to track valid form
    const [errorPersonal, setErrorPersonal] = useState(false);
    const [errorStudy, setErrorStudy] = useState(false);
    const [errorExtra, setErrorExtra] = useState(false);

    // Define state for each component
    const [personalDetails, setPersonalDetails] = useState({firstname: '', middlename: '', lastname: '', email: '', age: ''})
    const [studyDetails, setStudyDetails] = useState({studying: '', studyinfo: ''})
    const [extraInfo, setExtraInfo] = useState('')

    // All Errors must be false for valid form 
    const isInvalid = errorPersonal || errorStudy || errorExtra;

    return (
        <Flex
            flexDirection='column'
            component='form'
            autoComplete='off'
            gap="24px"
        >
            <FormHeader />
            <PersonalDetails values={personalDetails} onChange={setPersonalDetails} />
            <StudyingDetails values={studyDetails} onChange={setStudyDetails}/>
            <ExtraInformation value={extraInfo} onChange={setExtraInfo}/>
            <Container>
                <Typography variant="h3">Complete form</Typography>
                <Flex
                    flexDirection='row'
                    width='100%'
                    flexWrap='nowrap'
                    alignContent='flex-start'
                    gap='8px'
                >
                    <Button>Cancel</Button>
                    <Button variant='filled' disabled={isInvalid}>Submit</Button>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Form;