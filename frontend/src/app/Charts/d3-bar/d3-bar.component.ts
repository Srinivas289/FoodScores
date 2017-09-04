import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import * as d3 from 'd3'
import * as $ from 'jquery' 
import { CityScore } from '../../Interfaces/Score'
import * as d3Axis from 'd3-axis'
// import 'd3-selection-multi'
// import * as d3_selection from "d3-selection";
@Component({
  selector: 'app-d3-bar',
  templateUrl: './d3-bar.component.html',
  styleUrls: ['./d3-bar.component.css']
})
export class D3BarComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  loadChart(){
    /*
    d3.json('http://rhsfiscores.azurewebsites.net/Scores/city',function(err,data){
        let dataConverted = data as CityScore[];
        let viewership = dataConverted.map(function(d){
            return d['Avg_Score'];
        });
        let titles = dataConverted.map(function(d){
          return d['City'];
        });
        let maxViewers = d3.max(viewership);
        let totalWidth = 400 + 20 + 20;
        let totalHight = 200 + 20 + 20;
        let svg = d3.select('#d3barchart').append('svg');
        let mainGroup = svg.append('g').attr('transform','translate(20,20)');
        let bands = d3.scaleOrdinal().domain(titles).range([0,400]);
        let xScale = d3.scaleLinear().domain([0,maxViewers]).range([0,200]);
        function translator(d,i){
          return "translate("+ 0 + "," + bands.range()[i] + ")";
        } 
        let barGroup = mainGroup.selectAll('g').data(dataConverted).enter().append('g').attr('transform',translator);
        let onmousefill = 'rgba(7,82,143,1)';
        barGroup.append('rect').attr('fill','stellblue').attr('width',function(d){ return xScale(d['Avg_Score']);});//.attr('height', bands.range() );

        barGroup.append('text').text(function(d){ return d['Avg_Score'];})
                .style('text-anchor','start')
                .style('font-size','12px')
                .attr('dx',function(d){ return xScale( d['Avg_Score'] ) })
                .attr('dy',15)
                .attr('transform', 'translate(0,0)')
                .attr('fill','white');
                    
        let leftAxisGroup = svg.append('g');
        leftAxisGroup.attr('transform','translate(' + '(17,20)');
        let yAxisScale = d3.scaleOrdinal().domain(titles).range([3,203]);
        let leftAxis2: d3Axis.Axis<any> =d3Axis.axisLeft(d3.scaleLinear());
        let leftAxis = d3.axisLeft(leftAxis2); //d3.svg.axis().orient('left').scale(yAxisScale);
        let leftAxisNodes = leftAxisGroup.call(leftAxis);
        styleAxisNodes(leftAxisNodes);
        let bottomAxisScale = d3.scaleLinear().domain([0,maxViewers]).range([0,400]);
        let bottomAxis = d3.svg.axis().scale(bottomAxisScale).orient("bottom").tickFormat(d3.format("d")).tickSubdivide(0);
        let bottomAxisX = 17;
        let bottomAxisY = 400 - 20 + 3;
        let bottomAxisGroup = svg.append("g").attr(
          'transform','translate('+ bottomAxisX +',' +bottomAxisY + ')');
        let bottomAxisNodes = bottomAxisGroup.call(bottomAxis);
        styleAxisNodes(bottomAxisNodes);
        bottomAxisNodes.selectAll("text").style('text-anchor','start')
                        .attr('dx',0).attr('dy',10);
        svg.append('text').text('Graph built in D3').attr('dx',30).attr('dy',30).attr('font-weight','bold');
        function styleAxisNodes(axisNodes){
          axisNodes.selectAll('.domain').attr({fill:'none','stroke-width':1,stroke:'black'});
          axisNodes.selectAll('.tick line').attr({
            fill:'none',
            'stroke-width':1,
            stroke:'black'
          });
        }
    });*/
  }
}