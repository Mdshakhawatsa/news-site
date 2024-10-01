import logo from "/logo.png"
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center ">
      <img className="mx-auto" src={logo} alt="" />
      <p className=''>Journalis Without Fear & Favour</p>
      <p className='text-xl'> {moment().format("dddd, MMMM, Do YYYY")} </p>
    </div>
  );
};

export default Header;