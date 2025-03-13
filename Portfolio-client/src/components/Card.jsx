import { Link, useNavigate } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardLink
} from 'reactstrap'

const Blog = ({project}) => {
    const { title, description, link, id } = project;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/post/${id}`);
    };

    return (
        <div className='project-card' onClick={handleClick}>
            <Card className='card'>
                <CardTitle className='nav-link'>
                    {title}
                </CardTitle>
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
                <div className='cardButtons'>
                <a className='projects-link'href={link} target="_blank" onClick={(e) => e.stopPropagation()} >
                    Github Repo Link
                </a>
                <Link to={`/post/${id}`} className="projects-link" onClick={(e) => e.stopPropagation()} >
                View More
                </Link>
                </div>
            </Card>
        </div>
    );
};

export default Blog;
