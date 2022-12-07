import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import './navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="tot">
        <a className=" titl" href="/cars">Car Rentals</a>
        <div className="navi">
          <ul className="list">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/cars">Cars List</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/add_car">Add Car</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/rent_car">Rent Cars</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/fovaurvite_car">My Favourite</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/remove_cars">Remove Car</a>
            </li>
            <li className="log">
              <Link
                to="/login"
                className="menu-bars"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
