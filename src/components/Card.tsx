import { Link, useNavigate } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'
import type project from '../interfaces/project.js';

const Blog = ({ project }: { project: project }) => {
    const {Name, Description, id, link} = project;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/post/${id}`);
    };
    const placeholderClick = () => {
        window.open(link);
    };

    return (
        <div className='project-card' onClick={placeholderClick}>
            <Card className='card'>
                <CardTitle className='nav-link'>
                    {Name}
                </CardTitle>
                <CardBody>
                    <CardText>
                        {Description}
                    </CardText>
                </CardBody>
                <div className='cardButtons'>
                <a className='projects-link'href={link} target="_blank" onClick={(e) => e.stopPropagation()} >
                    Github Link
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
