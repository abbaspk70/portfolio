import React from "react";

//social icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
//image
import Link from "next/link";

const headerData = [
    { name: "facebook", url: "facebook url", icon: <FaFacebook /> },
    { name: "instgram", url: "facebook url", icon: <FaInstagram /> },
    { name: "linkdin", url: "facebook url", icon: <FaLinkedin /> },
    { name: "tiktok", url: "facebook url", icon: <FaTiktok /> },
];

export default function Header() {
    return (
        <div className="fixed text-center w-full xl:flex xl:justify-evenly items-center mt-1">
            <div className="xl:my-3 my-5">
                <Link href={"/about"}>
                    <h1 className="text-4xl">
                        Muhammad{' '}
                        <span className="text-semantic font-extralight">Abbas</span>
                    </h1>
                </Link>
            </div>

            <div className="flex  gap-10 items-center justify-center xl:my-3 mt-5">
                {headerData.map((link, index) => {
                    return (
                        <div className="">
                            <a
                                className="px-5 py-2 flex text-xl"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
