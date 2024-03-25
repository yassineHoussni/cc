import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigate() {
  const navigate = useNavigate();
  const location = useLocation();

  const Home = location.pathname === '/';

  return (
    <>
      {!Home && (
        <div>
          <button className='btn btn-primary' onClick={() => navigate(-1)}>{"<<"}</button>
          <button className='btn btn-danger' onClick={() => navigate(+1)}>{">>"}</button>
        </div>
      )}
    </>
  );
}
