import React from "react";
import useActionCreator from "../hooks/useActionCreator";
import { removeFeature } from "../actions";

const AddedFeature = React.memo(props => {
  const remove = useActionCreator(removeFeature, props.feature);
  return (
    <li>
      <button className="button" onClick={remove}>
        &times;
      </button>
      {props.feature.name}
    </li>
  );
});

export default AddedFeature;
