import React, { Component } from 'react';
import * as d3 from 'd3';

class HorizontalBarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.drawChart();
  }
  componentDidUpdate() {
    this.drawChart();
  }
  drawChart() {
    const { data , colorBar , country } = this.props;

    const margin = { top: 70, right: 60, bottom: 30, left: 70 };
    const width = 260 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select(this.chartRef.current).select('svg').remove();

    const svg = d3
      .select(this.chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.key))
      .range([0, height])
      .padding(0.1);

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => parseFloat(d.value))])
      .range([0, width]);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', (d) => yScale(d.key))
      .attr('width', (d) => xScale(d.value))
      .attr('height', yScale.bandwidth())
      .attr('fill', colorBar == undefined ? 'steelblue' : colorBar);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d.value)
      .attr('x', (d) => xScale(d.value) + 10)
      .attr('y', (d) => yScale(d.key) + yScale.bandwidth() / 2)
      .attr('fill', 'black');

    // Add x-axis label
    svg
      .append('text')
      .attr('x', 135)
      .attr('y', -30)
      .attr('text-anchor', 'middle')
      .text('Amount %');

    // // Add y-axis label
    // svg
    //   .append('text')
    //   .attr('transform', 'rotate(-90)')
    //   .attr('x', -height / 2)
    //   .attr('y', -60)
    //   .attr('text-anchor', 'middle')
    //   .text('Age range');

      // Add country label
      svg
      .append('text')
      .attr('x', 10)
      .attr('y', -30)
      .attr('text-anchor', 'middle')
      .attr('fill', colorBar == undefined ? 'steelblue' : colorBar)
      .style("font-size","21")
      .text(country);

    const xAxis = d3.axisTop(xScale);
    svg.append('g').call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append('g').call(yAxis);
  }

  render() {
    return (
      <div>
        <div ref={this.chartRef}></div>
      </div>
    );
  }
}

export default HorizontalBarChart;
