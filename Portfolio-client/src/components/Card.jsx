import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardLink
} from 'reactstrap'

const Blog = ({project}) => {
const { title, description, link, id } = project;
console.log(id);
    return (
        <Card className='card'>
            <CardTitle>
                {title}
            </CardTitle>
            <CardBody>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                Github Repo Link
            </Link>
            <Link to={`/post/${id}`} className="btn btn-primary">
            View More
            </Link>
        </Card>
    );
};

export default Blog;
