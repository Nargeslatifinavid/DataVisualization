import React, { Component, createRef } from 'react';
import * as d3 from 'd3';
import '../styles.css';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const { data, yAxisLabel , colorBar } = this.props;
  
    // Set up chart dimensions
    const margin = { top: 20, right: 20, bottom: 50, left: 70 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
  
    d3.select(this.chartRef.current).select('svg').remove();
  
    // Create the SVG container
    const svg = d3.select(this.chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    // Set up scales
    const xScale = d3.scaleBand()
      .domain(data.map((d) => d.country))
      .range([0, width])
      .padding(0.2)
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);
    // Draw bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.country))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value))
      .style('fill', colorBar == undefined ? 'steelblue' : colorBar) 
      .on('mouseenter', (event, d) => this.showTooltip(event, d))
      .on('mouseleave', this.hideTooltip);
  
    // Draw x-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('class', data.length > 10 ? 'rotate90': '')
      .call(d3.axisBottom(xScale))
  
    // Add x-axis label
    svg
      .append('text')
      .attr('class', 'x-axis-label')
      .attr('x', data.length > 10 ? -30 : width / 2)
      .attr('y', height + margin.bottom - 10)
      .style('text-anchor', 'middle')
      .text('Country');

    svg
      .append('text')
      .attr('class', 'y-axis-label')
      .attr('x', -height / 2)
      .attr('y', -margin.left + 10)
      .attr('transform', 'rotate(-90)')
      .style('text-anchor', 'middle')
      .text(yAxisLabel);
      
  
    // Draw y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  
    // Tooltip
    this.tooltip = d3.select(this.chartRef.current)
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0)
    .style('position', 'fixed')
    .style('background-color', 'rgba(0, 0, 0, 0.8)')
    .style('color', '#fff')
    .style('padding', '8px')
    .style('border-radius', '4px');
  }
  

  showTooltip(event, data) {
    const { clientX, clientY } = event;
    this.tooltip.transition().duration(200).style('opacity', 0.9);
    this.tooltip
      .html(`${data.country}: ${data.value}`)
      .style('left', `${clientX}px`)
      .style('top', `${clientY - 40}px`);
  }

  hideTooltip = () => {
    this.tooltip.transition().duration(200).style('opacity', 0);
  };

  render() {
    return (
      <div>
        <div ref={this.chartRef}></div>
      </div>
    );
  }
}

export default BarChart;
