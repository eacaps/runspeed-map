import ReactDOM from 'react-dom';
import React from 'react';
import TcxFileParser from './tcxfileparser';
import Utils from './utils';
import SpeedMap from './speedmap';
import ScaleComponent from './scalecomponent';

const NON_MAP_ELEMENT_HEIGHTS = 50 + 30 + 16;

const SetMapHeight = () => {
  const map_height = window.innerHeight - NON_MAP_ELEMENT_HEIGHTS;
  document.getElementById('mapid').style.height = map_height + 'px';
}

SetMapHeight();

window.onresize = () => {
  SetMapHeight();
}

const map = new SpeedMap();

document.getElementById('file').onchange = (event) => {
  const file_input = document.getElementById('file');
  const file = file_input.files[0];
  const fr = new FileReader();
  fr.onload = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(fr.result, "text/xml");
    // a tcx file dom, via xmldom
    new TcxFileParser().addToMap(doc, map);
  };
  fr.readAsText(file);
}

// fetch charleston data
fetch('../data/activity_925308754.tcx').then((response) => {
  return response.text();
}).then((text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  // a tcx file dom, via xmldom
  new TcxFileParser().addToMap(doc, map);
});

const scale_element = document.getElementById('scale');
ReactDOM.render(<ScaleComponent range={Utils.getSpeedRange()} scale={Utils.getColorScale()} />, scale_element);
