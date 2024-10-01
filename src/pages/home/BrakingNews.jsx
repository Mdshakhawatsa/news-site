import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrakingNews = () => {
    return (
        <div className="lg:flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
              <Link className="mr-10">  I can be a React component, multiple React components, or just some text.....</Link>
              <Link className="mr-10">  I can be a React component, multiple React components, or just some text.....</Link>
              <Link className="mr-10">  I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;