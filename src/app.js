import TcxParser from 'tcx';
import ReactDOM from 'react-dom';
import React from 'react';
import Utils from './utils';
import SpeedMap from './speedmap';
import ScaleComponent from './scalecomponent';

const map = new SpeedMap();

document.getElementById('file').onchange = (event) => {
  const file_input = document.getElementById('file');
  const file = file_input.files[0];
  const fr = new FileReader();
  fr.onload = () => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(fr.result, "text/xml");
    // a tcx file dom, via xmldom
    const geojson = TcxParser(doc);
    console.log(geojson);
    map.processGeojson(geojson);
  };
  fr.readAsText(file);
}

// fetch charleston data
fetch('../data/activity_925308754.geojson').then((response) => {
  return response.text();
}).then((text) => {
  const geojson = JSON.parse(text);
  map.processGeojson(geojson);
});

const scale_element = document.getElementById('scale');
ReactDOM.render(<ScaleComponent range={Utils.getSpeedRange()} scale={Utils.getColorScale()} />, scale_element);
