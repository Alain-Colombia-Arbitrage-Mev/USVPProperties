import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Size
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="propertie Size in mt2"
              required="true"
              name="dimension"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Rooms</label>
            <input
              type="text"
              className="form-control"
              name="rooms"
              placeholder="# Rooms"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Bathrooms
            </label>
            <input
              type="text"
              name="bathroom"
              className="form-control"
              placeholder="# bathrooms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFiled;
