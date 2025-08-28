import { Button } from 'reactstrap'
import '../App.css'

const email = () => {
    return (
        <Button
            id='email-button'
            href='mailto:sonniemnguyen@gmail.com'
        >
            sonniemnguyen@gmail.com
        </Button>
    );
}

export default email;