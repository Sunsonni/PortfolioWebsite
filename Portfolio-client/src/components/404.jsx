import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap'

const Error = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    }
    return (
    <>
        <h1>404 Page Not Found</h1>
        <p>let's get you back to our regularly scheduled programming. Shall we? </p>
        <Button onClick={handleClick}>Back home</Button>
    </>
    );
}

export default Error;