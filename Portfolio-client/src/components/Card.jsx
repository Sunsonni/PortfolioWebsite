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
    return (
        <>
        <Card>
            <CardTitle>
                {title}
            </CardTitle>
            <CardBody>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
            <CardLink href={link}>
                Github Repo Link
            </CardLink>
            <Link to={`/post/${id}`}>
            View More
            </Link>
        </Card>
        </>
    );
};

export default Blog;
