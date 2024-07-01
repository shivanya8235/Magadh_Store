import React from "react";
import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";
import { TreeDeciduous } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Code } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="w-full h-24 bg-[#38b000] p-4 flex flex-row justify-between">
      <div>
      <div className="py-2">
        <Link to={"https://tourism.bihar.gov.in/"} className="text-white flex items-center"><TreeDeciduous/><p>Bihar Tourism</p></Link>
      </div>
      <div>
        <Link
          to={"https://www.youtube.com/@tourismbihargov/featured"}
          className="flex items-center text-white"
        >
          {" "}
          <Youtube /> <p>youtube</p>
        </Link>
      </div>
      </div>
      <div>
      <div className="flex flex-row gap-4 text-white py-2">
        <Link to={"https://github.com/shivanya8235"}><Github/></Link>
        <Link to={"https://www.linkedin.com/in/shivanya/"}><Linkedin/></Link>
        <Link to={"https://leetcode.com/u/shivanya_82/"}><Code/></Link>
      </div>
      <div className="text-right text-white font-bold">
        Developed by Shivanya
      </div>
      </div>
    </footer>
  );
};

export default Footer;
