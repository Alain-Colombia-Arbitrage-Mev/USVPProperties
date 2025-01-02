import React from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = () => {
  return (
    <div>
    <div className="row">
      <div className="col-sm-12">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address"
          />
        </div>
      </div>
      {/* End col-12 */}

      <SelectMulitField />

      <div className="col-sm-6 col-xl-2">
        <div className="mb10">
          <label className="heading-color ff-heading fw600 mb10">Zip</label>
          <input type="text" name="zip" className="form-control" />
        </div>
      </div>
      {/* End col-4 */}

      <div className="col-sm-6 col-xl-2">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Neighborhood
          </label>
          <input
            type="text"
            name="neighborhood"
            className="form-control"
            placeholder="Neighborhood"
          />
        </div>
      </div>
      {/* End col-4 */}

      <div className="col-sm-12">
        <div className="mb20 mt30">
          <label className="heading-color ff-heading fw600 mb30">
            Place the listing pin on the map
          </label>
          <Map />
        </div>
      </div>
      {/* End col-12 */}
    </div>

    <div className="row">
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Latitude
          </label>
          <input type="text" className="form-control" />
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Longitude
          </label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default LocationField;
