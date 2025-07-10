import axios from "axios";

import React from "react";
import Card from "./Card";

const Home = () => {
  const chackoutHandler = async (amount) => {
    const { data } = await axios.post("http://localhost:4000/api/order", {
      amount,
    });

    const {
      data: { keyId },
    } = await axios.get("http://localhost:4000/api/getkey");

    const options = {
      key: keyId, // Enter the Key ID generated from the Dashboard
      amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Saurabh Pandey",
      description: "Test Transaction",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFetGuA9vwdDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722152177361?e=1732752000&v=beta&t=_yWp2KeoJHzS0110p1ItHHSFg4EmgRDpNL4md2R1keg",
      order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1E3E62",
      },
    };
    const razor = new Razorpay(options);
    razor.open();
  };

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-800 mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
  saurabh.dev
</h3>

      <h2 className="text-center text-6xl font-extrabold text-[#1E3E62] mb-12 underline decoration-dotted decoration-blue-300">
        Explore Our Exclusive Products
      </h2>
      
      <div className="flex justify-center items-center flex-wrap gap-4">
        <Card
          chackoutHandler={chackoutHandler}
          amount={5000}
          image="https://m.media-amazon.com/images/I/61mwCxPRejL._SX679_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6000}
          image="https://m.media-amazon.com/images/I/61kpQAAVUoL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={7000}
          image="https://m.media-amazon.com/images/I/41Bmui2T3TL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={4500}
          image="https://m.media-amazon.com/images/I/91my-EfsUNL._SX679_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={5500}
          image="https://images-eu.ssl-images-amazon.com/images/I/51m+fXBE0WL._AC_UL165_SR165,165_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6200}
          image="https://images-eu.ssl-images-amazon.com/images/I/41nclnxOSLL._AC_UL165_SR165,165_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6200}
          image="https://m.media-amazon.com/images/I/61cEq+fQcxL._AC_SR405%2C405_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6200}
          image="https://m.media-amazon.com/images/I/71+YfaCidfL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6200}
          image="https://m.media-amazon.com/images/I/61GkKRDtxpL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </>
  );
  
  };
  
  export default Home;
  