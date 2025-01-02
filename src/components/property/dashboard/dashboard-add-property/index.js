'use client'
import React from "react";
import PropertyDescription from "./property-description";
import UploadMedia from "./upload-media";
import LocationField from "./LocationField";
import DetailsFiled from "./details-field";
import Amenities from "./Amenities";
import { useState } from 'react';
import axios from 'axios';
import config from '../../../../config/api.js'

const AddPropertyTabContent = () => {
  const [response, setResponse] = useState(null);
  const [images, setImages] = useState([])
  const [selectedAmenities2, setSelectedAmenities2] = useState([]);

  const onHandleUpload = (files) => {
    setImages(files)
    console.log("files received form parent", images);
  }

  const handleAmenities = (selected) => {
    console.log(selected);  
    setSelectedAmenities2(selected);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // console.log('images', images);
    // console.log('dddddd', (new FormData(e.target)).get('files[]'));
    const _file =  images
    const formData = new FormData()
    const _formData = new FormData(e.target)

    const imageFile = e.target.querySelector('input[type="file"]').files[0];
    var files = document.getElementById('fileInput').files;
    console.log("Archivos seleccionados:");

    for (var i = 0; i < files.length; i++) {
        console.log(files[i].name);
    }

    console.log("images ", imageFile);
    for (var i = 0; i < files.length; i++) {
      formData.append('images[]', files[i],  files[i].name);
    }
    // Agregar el archivo de imagen al FormData
    // formData.append("image[]", imageFile, imageFile.name);
    // formData.append("image[]", imageFile, imageFile.name);

    // formData.append("image", _file, "house.png")
    formData.append("title", _formData.get('title'))
    formData.append("description", _formData.get('description'));
    formData.append("category", _formData.get('category'));
    formData.append("price", _formData.get('price'));
    formData.append("plusvalia", _formData.get('plusvalia'));
    formData.append("earning", _formData.get('earning'));
    formData.append("address", _formData.get('address'));
    formData.append("zip", _formData.get('zip'));
    formData.append("city", _formData.get('city'));
    formData.append("country", _formData.get('country'));
    formData.append("dimension", _formData.get('dimension'));
    formData.append("rooms", _formData.get('rooms'));
    formData.append("bathroom", _formData.get('bathroom'));

    const data = {
      // title : formData.get("title"),
      // description : formData.get("description"),
      // type : formData.get("category"),
      // price : formData.get("price"),
      // tax : formData.get("tax"),
      // address: formData.get("address"),
      // zip: formData.get("zip"),
      // city: formData.get("city"),
      // country: formData.get("country"),
      // // media
      // images: images,

      // // details
      // dimension: formData.get("dimension"),
      // rooms : formData.get("rooms"),
      // bathroom : formData.get("bathroom"),
      // // ammenities
      // amenities: selectedAmenities2
    }
    
    try {

      // const res = await fetch('http://api.fidubit.co:5000/api/property', {
      //   method: 'POST',
      //   // headers: {
      //   //  // 'Content-Type': 'application/x-www-form-urlencoded',
      //   'Content-Type': 'multipart/form-data',
      //   // },
      //   body:  formData, //JSON.stringify(formData)
      // });

      // if (res.ok) {
      //   const data = await res.json();
      //   setResponse(data.message);
      // } else {
      //   setResponse('Error al registrar');
      // }

      axios.post(config.point+'/property', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        }
      })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    } catch (error) {
      console.error('Error:', error);
      setResponse('Error al conectar con el servidor');
    }
  };

  return (
    <>
    <div>

      <form name="form_property" encType="multipart/form-data" onSubmit={handleSubmit} >
      <nav>
        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
          <button
          className="nav-link active fw600 ms-3"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true"
            >
            1. Description
          </button>
          <button
            className="nav-link fw600"
            id="nav-item2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item2"
            type="button"
            role="tab"
            aria-controls="nav-item2"
            aria-selected="false"
            >
            2. Media
          </button>
          <button
            className="nav-link fw600"
            id="nav-item3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item3"
            type="button"
            role="tab"
            aria-controls="nav-item3"
            aria-selected="false"
            >
            3. Location
          </button>
          <button
            className="nav-link fw600"
            id="nav-item4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item4"
            type="button"
            role="tab"
            aria-controls="nav-item4"
            aria-selected="false"
          >
            4. Detail
          </button>
          <button
            className="nav-link fw600"
            id="nav-item5-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item5"
            type="button"
            role="tab"
            aria-controls="nav-item5"
            aria-selected="false"
          >
            5. Amenities
          </button>
        </div>
      </nav>
      {/* End nav tabs */}

      <div className="tab-content" id="nav-tabContent">

        <div
          className="tab-pane fade show active"
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab"
          >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Property Description</h4>
            <PropertyDescription />
          </div>
        </div>
        {/* End tab for Property Description */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
          >
          <UploadMedia onHandleUpload={onHandleUpload}/>
        </div>
        {/* End tab for Upload photos of your property */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Listing Location</h4>
            <LocationField />
          </div>
        </div>
        {/* End tab for Listing Location */}

        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
          >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Listing Details</h4>
            <DetailsFiled />
          </div>
        </div>
        {/* End tab for Listing Details */}

        <div
          className="tab-pane fade"
          id="nav-item5"
          role="tabpanel"
          aria-labelledby="nav-item5-tab"
          >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Select Amenities</h4>
            <div className="row">
              <Amenities handleAmenities={handleAmenities}/>
            </div>
          </div>
        </div>
        {/* End tab for Select Amenities */}
      </div>
        <div className="input__button">
              <button type="submit" className="button button--effect">
                Create Property
              </button>
            </div>
        </form>
        </div>
    </>
  );
};

export default AddPropertyTabContent;
