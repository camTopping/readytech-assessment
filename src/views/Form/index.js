import { Container, Typography, Button, Alert, CircularProgress } from '@mui/material';
import PersonalDetails from './Components/PersonalDetails';
import StudyingDetails from './Components/StudyingDetails';
import FormHeader from './Components/FormHeader';
import ExtraInformation from './Components/ExtraInformation';
import Flex from 'components/Flex';
import { useState } from 'react';
import { delay } from 'q';

function Form(props) {
    // Define component state 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    // Define errors to track valid form
    const [errorPersonal, setErrorPersonal] = useState(false);

    // Define state for each subcomponent
    const [personalDetails, setPersonalDetails] = useState({firstname: '', middlename: '', lastname: '', email: '', age: ''})
    const [studyDetails, setStudyDetails] = useState({studying: '', studydetails: ''})
    const [extraInfo, setExtraInfo] = useState('')

    // Form Submission - the API call would be made here. For demo, we will simply use a function with a delay. 
    const onSubmit = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        // simulate API call. data would look similar to this
        const data = {
            firstname: personalDetails.firstname,
            middlename: personalDetails.middlename,
            lastname:  personalDetails.lastname,
            email: personalDetails.email,
            age: personalDetails.age,
            isStudying: studyDetails.studying, 
            studyDetails: studyDetails.studydetails, 
            extraInfo: extraInfo
        }

        // setSubmitError would be used here if API response was error code
        await delay(3000);

        setIsSubmitting(false);
        setIsSubmitted(true);
    }

    // All Errors must be false for valid form 
    const isInvalid = errorPersonal;

    return (
        <form onSubmit={onSubmit} {...props}>
            <Flex
                flexDirection='column'
                autoComplete='off'
                gap="12px"
            >
                <FormHeader sx={{gap: "4px"}} />
                <PersonalDetails values={personalDetails} onChange={setPersonalDetails} isError={setErrorPersonal} />
                <StudyingDetails values={studyDetails} onChange={setStudyDetails} />
                <ExtraInformation value={extraInfo} onChange={setExtraInfo} />
                <Container>
                    <Typography variant="h3">Complete form</Typography> 
                    {
                        !isSubmitted &&
                        <>                    
                            <Flex
                                flexDirection='row'
                                width='100%'
                                flexWrap='nowrap'
                                alignContent='flex-start'
                                gap='8px'
                            >
                                <Button>Cancel</Button>
                                <Button 
                                    type='submit' 
                                    variant='filled' 
                                    disabled={isInvalid || isSubmitting}
                                    startIcon={isSubmitting && <CircularProgress size={20} />}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </Button>
                            </Flex>
                        </>
                    }
                    {
                        isSubmitted && !submitError && (
                        <Alert
                            action={
                                <Button onClick={e => {window.location.reload()}}>Submit Another?</Button>
                            }
                        >
                            Form was submitted succesfully!
                        </Alert>
                        )
                    }
                    {
                        submitError &&
                        <Alert severity='error'>
                            Something went wrong! (Return appropriate response according to response code)
                        </Alert>
                    }
                </Container>
            </Flex>
        </form>
    )
}

export default Form;