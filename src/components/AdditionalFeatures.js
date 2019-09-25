import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={() => props.addFeature(item)} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => ({ store: state.store }),
  { addFeature }
)(AdditionalFeatures);
