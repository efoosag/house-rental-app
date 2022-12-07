import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { rentAdded } from "../../store/rentsSlice";

const AddRentForm = () => {
  // const userLoggedIn = useSelector((state) => state.user);
  // console.log(userLoggedIn);

  const dispatch = useDispatch();
  const [car_brand, setCar_brand] = useState("");
  const [userId, setUserId] = useState("");
  const [rentDate, setRentDate] = useState("");
  const [number_of_days, setNumber_of_days] = useState("");
  const [location, setLocation] = useState("");

  const onCar_brandChanged = (e) => setCar_brand(e.target.value);
  const onRentDateChanged = (e) => setRentDate(e.target.value);
  const onNumber_of_daysChanged = (e) => setNumber_of_days(e.target.value);
  const onLocationChanged = (e) => setLocation(e.target.value);

  const onCreateRent = () => {
    if (car_brand && rentDate && number_of_days && location) {
      dispatch(
        rentAdded({
          id: nanoid(),
          userId,
          car_brand,
          rentDate,
          number_of_days,
          location,
        })
      );
      setCar_brand("");
      setRentDate("");
      setNumber_of_days("");
      setLocation("");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser);
      console.log(foundUser);
    }
  }, []);

  return (
    <section>
      <h2> Make a New Car Rent</h2>

      <form>
        <label htmlFor="car_brand"> Car Brand</label>
        <input
          type="text"
          id="car_brand"
          name="car_brand"
          value={car_brand}
          onChange={onCar_brandChanged}
        />

        {/* <label htmlFor="car_brand"> Car Brand</label>
        <input
          type="text"
          id="car_brand"
          name="userId"
          value={user.id}
          onChange={onCar_brandChanged}
        /> */}

        <label htmlFor="rentDate"> Date</label>
        <input
          type="date"
          id="rentDate"
          name="rentDate"
          value={rentDate}
          placeholder="When to Pick up Rented Car?"
          onChange={onRentDateChanged}
        />

        <label htmlFor="number_of_days">Days </label>
        <input
          type="number"
          id="number_of_days"
          name="number_of_days"
          value={number_of_days}
          placeholder="How Long To have the Rented Car?"
          onChange={onNumber_of_daysChanged}
        />

        <label htmlFor="location">Location </label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          placeholder="Where to have the Rented Car?"
          onChange={onLocationChanged}
        />
        <button type="button" onClick={onCreateRent}>
          Rent Car
        </button>
      </form>
    </section>
  );
};

export default AddRentForm;
