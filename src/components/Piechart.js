import React, { Component, createRef } from 'react';
import * as d3 from 'd3';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
    this.state = {};
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const { data } = this.props;

    const margin = { top: 20, right: 20, bottom: 20, left: 100 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const radius = Math.min(width, height) / 2;

    d3.select(this.chartRef.current).select('svg').remove();

    const svg = d3
      .select(this.chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value((d) => d.value);

    const dataReady = pie(data);

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

    svg
      .selectAll('slices')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', (d) => colorScale(d.data.label))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .on('mouseover', (event, d) => this.showTooltip(event, d, data))
      .on('mouseout', this.hideTooltip);

    // Adding legend
    const legend = svg
      .selectAll('.legend')
      .data(dataReady)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .style('font-size',13)
      .attr('transform', (d, i) => `translate(-320, ${i * 25 - 180})`);

    legend
      .append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (d) => colorScale(d.data.label));

    legend
      .append('text')
      .attr('x', 25)
      .attr('y', 9)
      .attr('dy', '0.32em')
      .text((d) => d.data.label);


    // Adding percentage labels
    // svg
    //   .selectAll('percentage-labels')
    //   .data(dataReady)
    //   .enter()
    //   .append('text')
    //   .text((d) => `${d.data.label}:${Math.ceil(d.data.value * 100 / d3.sum(data.map((d)=> d.value)))}%`)
    //   .attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
    //   .attr('text-anchor', 'middle')
    //   .attr('font-size', 12);

    // Tooltip
    this.tooltip = d3
      .select(this.chartRef.current)
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'fixed')
      .style('opacity', '0')
      .style('background-color', 'white')
      .style('padding', '10px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '5px')
      .style('pointer-events', 'none')
      .style('font-size', '20px')
      .style('z-index', '999');
  }

  showTooltip(event, d, data) {
    const { clientX, clientY } = event;
    this.tooltip.transition().duration(200).style('opacity', 0.9);
    this.tooltip
      .html(`${d.data.label}:${d.value},${(d.value * 100 / d3.sum(data.map((d)=> d.value))).toFixed(2)}%`)
      .style('left', `${clientX}px`)
      .style('top', `${clientY - 40}px`);
  }

  hideTooltip = () => {
    this.tooltip.transition().duration(200).style('opacity', 0);
  };

  render() {
    return <div ref={this.chartRef}></div>;
  }
}

export default PieChart;
