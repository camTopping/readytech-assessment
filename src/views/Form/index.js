import PersonalDetails from './Components/PersonalDetails';
import StudyingDetails from './Components/StudyingDetails';
import FormHeader from './Components/FormHeader';
import ExtraInformation from './Components/ExtraInformation';
import { Container, Typography, Button } from '@mui/material';
import Flex from 'components/Flex';

function Form(props) {

    return (
        <Flex
            flexDirection='column'
            component='form'
            autoComplete='off'
            gap="24px"
        >
            <FormHeader />
            <PersonalDetails />
            <StudyingDetails />
            <ExtraInformation />
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
                    <Button variant='filled'>Submit</Button>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Form;