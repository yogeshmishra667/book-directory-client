import React from 'react';
import { usePaymentQuery } from '../features/apiSlice';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PayButton = ({ book }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, isSuccess, isError } = usePaymentQuery(id);

  const handleCheckout = () => {
    window.location.href = data.url;
  };
  return (
    <div>
      <button onClick={() => handleCheckout()} className="inline-block py-2 px-8">
        Buy Now
      </button>
    </div>
  );
};

export default PayButton;
