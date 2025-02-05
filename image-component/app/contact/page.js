import React from "react";
import Script from "next/script";
import Image from "next/image";
const contact = () => {
  return (
    <div className="text-white flex justify-center relative">
      {/* <Image src="/images.jpeg" alt="Picture of the day" width={500} height={500} /> */}
      <Image src="/images.jpeg" alt="Picture of the day" className="object-contain" fill="true" />
         <Script>
                 {/* {`alert("Welcome to Contact Page")`} */}
        </Script>
      
      <div className="flex justify-center">
        <h1 className="text-3xl mt-64">Contact Us</h1>
      </div>
    </div>
  );
};

export default contact;
export const metadata = {
  title: "Contact | Facebook - Connect with the world!",
  description:
    "Facebook is the pivot role to connect the world through Facebook",
};
