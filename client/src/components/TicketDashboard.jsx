import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";

const TicketDashboard = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState({
    movie: "",
    date: "",
    seats: "",
    ticket_price: "",
  });

  const fetchShowDetails = async () => {
    const response = await fetch(`${props.host}/api/movies/getshowdetails`, {
      method: "POST",
      body: JSON.stringify({ showId: params.showId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonResponse = await response.json();

    setShow(jsonResponse);
  };

  useEffect(() => {
    if (!props.user.isLoggedIn) {
      navigate("/login");
    }
    fetchShowDetails();
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    // Getting the order details back
    // const { amount, id: order_id } = result.data;

    const data = {
      user_id: props.user.email,
      show_date: show.date,
      movie: show.movie,
      show_id: params.showId,
    }

    const res = await axios.post(`${props.host}/api/payment/success`, data);

    if (res.data.msg === "success") {
      props.showAlert("Ticket Ordered Successfully", "success");
      navigate("/");
    }
  };

  return (
    <div id="ticket-dashboard">
      <h2>Get Ticket</h2>
      <div id="show-details">
        <div>
          Movie: <span>{show.movie}</span>
        </div>
        <div>
          Date: <span>{show.date && props.formatDateTime(show.date)}</span>
        </div>
        <div>
          Available Seats: <span>{show.seats}</span>
        </div>
        <div>
          Price: &#8377;<span>{show.ticket_price}</span>
        </div>
        <button id="pay-btn" onClick={displayRazorpay}>
          {`Pay ₹${show.ticket_price}`}
        </button>
      </div>
    </div>
  );
};

export default TicketDashboard;
