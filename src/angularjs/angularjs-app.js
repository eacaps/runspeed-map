import angular from 'angular';
import Utils from '../utils';
import Setup from '../setup';
import ScaleComponent from './scalecomponent';

Setup.setupMap();

const MODULE_NAME = 'app';
const component = new ScaleComponent();

angular.module(MODULE_NAME, [])
  .directive('scale', component.component())
  .controller('ScaleCtrl', component.ctrl());

export default MODULE_NAME;
