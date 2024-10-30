import PropTypes from 'prop-types'; // ES6



const Link = ({route}) => {
    return (
        <li className="mr-12 px-6 hover:bg-green-200 rounded-md" ><a href={route.path}>{route.name}</a></li>
    );
};


Link.propTypes = {
    route: PropTypes.object
}
export default Link;