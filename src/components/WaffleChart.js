import React, { Component , createRef } from 'react';
import * as d3 from 'd3';

class WaffleChart extends Component {
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

    // Data for the chart
    const { data , hasLegend , title } = this.props;
    if(data == undefined) return;
    // Dimensions for the chart including margin
    const margin = { top: 20, right: 0, bottom: 60, left: hasLegend ? 185 : 0 };
    const width = (hasLegend ? 340 : 150) - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const blockSize = 15;
    const columns = Math.floor(width / blockSize);
  
    // Calculate the total value
    const total = data.reduce((sum, d) => sum + d.value, 0);
  
    d3.select(this.chartRef.current).select('svg').remove();

    // Create an SVG container with margin
    const svg = d3
      .select(this.chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    // Calculate the number of blocks per category
    const blockCounts = data.map((d) => {
      // debugger;
      // * 100 / d3.sum(data.map((d)=> parseFloat(d.value)))
      return Math.round((d.value / total) * (width * height) / (blockSize * blockSize))
    });
  
    // Generate the grid of waffle blocks
    let blocks = [];
    blockCounts.forEach((count, i) => {
      const categoryBlocks = Array(count).fill({ category: data[i].label });
      blocks = blocks.concat(categoryBlocks);
    });
  
    // Draw the waffle chart
    const g = svg
      .selectAll('.block')
      .data(blocks)
      .enter()
      .append('rect')
      .attr('class', 'block')
      .attr('width', blockSize)
      .attr('height', blockSize)
      .attr('x', (d, i) => (i % columns) * blockSize)
      .attr('y', (d, i) => Math.floor(i / columns) * blockSize)
      .style('fill', (d) => getColor(d.category))
      .style('stroke', '#fff');
  
    // Helper function to assign colors to categories
    function getColor(category) {
      const colorScale = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.label))
        .range(d3.schemeCategory10);
      return colorScale(category);
    }
  
    // Draw the legend
    if(hasLegend === true){
        const legend = svg
        .append('g')
        .attr('class', 'legend')
        .style('transform','translate(-165px, 25px)')
        .style('font-size',13)
      
        const legendItem = legend
          .selectAll('.legend-item')
          .data(data)
          .enter()
          .append('g')
          .attr('class', 'legend-item')
          .attr('transform', (d, i) => `translate(0, ${i * 30})`);

          legendItem
            .append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('x', 0)
            .attr('y', 0)
            .style('fill', (d) => getColor(d.label));
        
          legendItem
            .append('text')
            .attr('x', 20)
            .attr('y', 10)
            .text((d) => d.label);
        
    }
  
    // Add the chart label
    svg
      .append('text')
      .attr('class', 'chart-label')
      .attr('x', width / 2)
      .attr('y', height + margin.bottom / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', 20)
      .style('transform', 'translate(0px, 10px)')
      .text(title);
  }
  
  

  render() {
    return <div ref={this.chartRef}></div>;
  }
}

export default WaffleChart;
