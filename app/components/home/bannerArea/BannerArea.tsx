import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function BannerArea() {
  return (
    <div>
      <p>BannerArea</p>
      <div className="w-6 h-6"><FontAwesomeIcon icon={faEnvelope} /></div>
    </div>
  );
}

export default BannerArea;
