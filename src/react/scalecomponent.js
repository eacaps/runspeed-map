import React, { PureComponent } from 'react';

export default class ScaleComponent extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const scale = this.props.scale;
    const gradient = [];
    for(const color of scale) {
      const style = {
        backgroundColor: color,
        width: '10px',
        height: '10px',
        display: 'inline-block'
      };
      gradient.push(
        <div key={color} style={style} />
      )
    }
    return (
      <div class='scaleContainer'>
        <div class='centeredScale'>
          <div class='scaleBox'>
            <div class='scaleHeader'>
              <span class='paceText'>Pace(min/mile)</span>
            </div>
            <div class='rangeBox'>
              <div>
                <span>{this.props.range.min} </span>
                {gradient}
                <span> {this.props.range.max}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
