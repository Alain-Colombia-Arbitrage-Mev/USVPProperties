import React from "react";
import { useState } from 'react';

const amenitiesData = {
  column1: [
    { label: "Attic", defaultChecked: false },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "Lawn", defaultChecked: true },
    { label: "Swimming Pool", defaultChecked: false },
    { label: "Barbeque", defaultChecked: false },
    { label: "Microwave", defaultChecked: false },
    { label: "Lake view", defaultChecked: false },
    { label: "Wine cellar", defaultChecked: true },
    { label: "Front yard", defaultChecked: true },
    { label: "Refrigerator", defaultChecked: true },
    { label: "WiFi", defaultChecked: false },
    { label: "Laundry", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
};

const Amenities = ({handleAmenities}) => {

  const [amenities, setAmenities] = useState(amenitiesData);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  
  // const handleAmenitiesMe = () => {
  //   handleAmenities('mama')
  // }

  const handleCheckboxChange = (columnKey, index) => {
    const updatedAmenities = { ...amenities };
    updatedAmenities[columnKey][index].defaultChecked = !updatedAmenities[columnKey][index].defaultChecked;
    setAmenities(updatedAmenities);

    const selected = amenities[columnKey].filter(amenity => amenity.defaultChecked).map(amenity => amenity.label);
    setSelectedAmenities(selected);
    handleAmenities(selected);
  };

  return (
    <div className="row">
      {Object.keys(amenitiesData).map((columnKey, index) => (
        // <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  checked={amenity.defaultChecked}
                  onChange={() => handleCheckboxChange(columnKey, amenityIndex)}
                  defaultChecked={amenity.defaultChecked}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        // </div>
      ))}

      {/* <button onClick={handleAmenitiesMe}>Confirm Amenities</button> */}
    </div>
  );
};

export default Amenities;
