"use client";
import Select from "react-select";

const PropertyDescription = () => {
  const catergoryOptions = [
    { value: "Urbanizacion", label: "Urbanizacion" },
    { value: "Edificios", label: "Edificios" },
    { value: "Apartamentos", label: "Apartamentos" },
    { value: "Office", label: "Office" },
  ];
  // const listedIn = [
  //   { value: "All Listing", label: "All Listing" },
  //   { value: "Active", label: "Active" },
  //   { value: "Sold", label: "Sold" },
  //   { value: "Processing", label: "Processing" },
  // ];
  // const PropertyStatus = [
  //   { value: "All Cities", label: "All Cities" },
  //   { value: "Pending", label: "Pending" },
  //   { value: "Processing", label: "Processing" },
  //   { value: "Published", label: "Published" },
  // ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    // <form className="form-style1">
      <div className="row">
  <div className="col-sm-6 col-xl-4">
    <div className="mb20">
      <label className="heading-color ff-heading fw600 mb10">
        Select Category
      </label>
      <div className="location-area">
        <Select
          defaultValue={[catergoryOptions[1]]}
          name="category"
          options={catergoryOptions}
          styles={customStyles}
          className="select-custom pl-0"
          classNamePrefix="select"
          required
        />
      </div>
    </div>
  </div>
  <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Description
            </label>
            <textarea
              cols={30}
              rows={5}
              name="description"
              placeholder="There are many variations of passages."
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-6 */}

      

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Price in $
            </label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Plusvalia %
            </label>
            <input
              type="text"
              name="plusvalia"
              className="form-control"
              placeholder="Plusvalia %"
            />
          </div>
        </div>


        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Rentabilidad %
            </label>
            <input
              type="text"
              name="earning"
              className="form-control"
              placeholder="Rentabilidad %"
            />
          </div>
        </div>


       

      </div>
  );
};

export default PropertyDescription;
