import ReactDOM from 'react-dom';
import React from 'react';
import Utils from '../utils';
import Setup from '../setup';
import ScaleComponent from './scalecomponent';

Setup.setupMap();

const scale_element = document.getElementById('scale');
ReactDOM.render(<ScaleComponent range={Utils.getSpeedRange()} scale={Utils.getColorScale()} />, scale_element);
