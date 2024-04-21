import { Link } from 'react-router-dom';

interface PageLinkInterface {
    linkTo: string;
    text: string;
}
function PageLink({ linkTo, text }: PageLinkInterface) {
    return (
        <Link className='border-2 px-2 rounded-md' to={`/${linkTo}`}>{text}</Link>
    )
}

export default PageLink;