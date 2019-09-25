import React from "react";
import useActionCreator from "../hooks/useActionCreator";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  const add = useActionCreator(addFeature, props.feature);
  return (
    <li>
      <button className="button" onClick={add}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
