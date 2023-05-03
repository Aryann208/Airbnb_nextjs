import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-60 gap-y-10 px-32 py-14 bg-gray-100  ">
      <div className="space-y-4 text-xs text-gray-800 px-5 ">
        <h5 className=" font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 px-5">
        <h5 className="font-bold">Support</h5>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Customer Support</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 px-5">
        <h5 className="font-bold">Community</h5>
        <p>Matchup</p>
        <p>Accessibility</p>
        <p>Referrals Accepted</p>
      </div>
    </div>
  );
}

export default Footer;
