import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-info p-3 d-flex justify-content-around ">
      <div>
        <address className="p-3 ">
          <p>Hafizpet</p>
          <p>shopping mall opp No-5455</p>
          <p>Hyderabad</p>
        </address>
      </div>
      <div>
        <p>Connect with Us</p>
        <p>
          <Link>Facebook</Link>
        </p>
        <p>
          <Link>Twitter</Link>
        </p>
        <p>
          <Link>Instagram</Link>
        </p>
      </div>
      <div>
        <p>Make Money with Us b</p>
        <p>Sell on Amazon</p>
        <p>Sell under Amazon Accelerator</p>
        <p>Protect and Build Your Brand</p>
        <p>Amazon Global Selling</p>
        <p>Become an Affiliate</p>
        <p>Fulfilment by Amazon</p>
        <p>Advertise Your Products</p>
        <p>Amazon Pay on Merchants</p>
      </div>
      {/* <div>
      <address className=' p-3' >
        <p>Hafizpet</p>
        <p>shopping mall opp No-5455</p>
        <p>Hyderabad</p>
      </address>
      </div> */}
    </div>
  );
}

export default Footer;
