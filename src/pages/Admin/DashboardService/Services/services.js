import React from "react";
import { useSelector } from "react-redux";
import Service from "./Service/service.js";

const Services = ({ setCurrentId }) => {
  const services = useSelector((state) => state.services);
  return !services.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      {services.map((service) => {
        return <Service service={service} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

 
export default Services;
 