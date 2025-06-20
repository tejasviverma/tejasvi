import React from "react";

const CertificateList = ({ ImgSertif, name, description, link }) => {
  return (
    <div className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
      <img src={ImgSertif} alt={name} className="certificate-image" style={{
							width: "100%",
							height: "auto",
							display: "block",
							objectFit: "cover",
							filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
							transition: "filter 0.3s ease",
						}}/>
      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{name}</h3>
      <p className="text-l font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{description}</p>
    </div>
  );
};

export default CertificateList;
