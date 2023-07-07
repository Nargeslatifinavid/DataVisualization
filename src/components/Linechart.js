import React, { Component , createRef } from 'react';
import * as d3 from 'd3';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = createRef();
      }
  componentDidMount() {
    this.drawChart();
  }
  componentDidUpdate(){
    this.drawChart();
  }

  drawChart() {
    const { data } = this.props;

    const width = 600;
    const height = 500;
    const margin = { top: 20, right: 80, bottom: 150, left: 70 };

    d3.select(this.chartRef.current).select('svg').remove();

    const svg = d3
      .select(this.chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => parseFloat(d.amount))+50])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2)
      .y((d) => y(d.amount));

    const countries = Array.from(new Set(data.map((d) => d.country)));

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    countries.forEach((country, index) => {
      const countryData = data.filter((d) => d.country === country);

      svg
        .append('path')
        .datum(countryData)
        .attr('fill', 'none')
        .attr('stroke', colorScale(index)) // Assign different color to each country
        .attr('stroke-width', 2)
        .attr('d', line);

      const legendGroup = svg
        .append('g')
        .attr('transform', `translate(${width - margin.right + 10}, ${margin.top + index * 20})`);

      legendGroup
        .append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .style('transform', `translate(-35px, 0px)`)
        .attr('fill', colorScale(index));

      legendGroup
        .append('text')
        .attr('x', 20)
        .attr('y', 10)
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'black')
        .style('transform', `translate(-35px, 0px)`)
        .text(country);
    });

    svg
      .append('g')
      .attr('transform', `translate(0, ${height  - margin.bottom})`)
      .attr('class', 'rotate90-2')
      .call(d3.axisBottom(x));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + 20 - margin.bottom / 2)
      .attr('text-anchor', 'middle')
      .style('transform','translate(-240px, -61px)')
      .text('Date');

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', margin.left / 2 - 10)
      .attr('text-anchor', 'middle')
      .text('Total death per million');
  }

  render() {
    return <div>
    <div ref={this.chartRef}></div>
  </div>
  }
}

export default LineChart;
