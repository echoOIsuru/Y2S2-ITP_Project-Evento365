import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './VehicleReport.css'
import { colors } from '@material-ui/core';

class vclReport extends Component {

    constructor(props) {
        super(props);

        this.state = {

            flag : true,
        
          series: [{
            name: 'Vehicle Rent',
            data: []
            //series.data
          }],

          options: {
            chart: {
              type: 'bar',
              height: 350
              
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded'
                
              },
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['car','van','bus'],
              //options.xaxis.categories
            },
            yaxis: {
              title: {
                text: 'Rent Count'
              }
            },
            fill: {
              opacity: 1
              
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "Rented " + val + " times"
                }
              }
            }
          },
        
        
        };
      }

componentDidMount() {
    VehicleService.getSummaryVehicles().then((res) => {
        // this.setState({ vehicle: res.data });
        var count = []
        var vName = []
        var i = 0
        var j = 0

        res.data.forEach(element => {
            count[i] = element.count; 
            i++;
        });

        this.setState (temp => ({
            series:[{
                data:count
            }]
        }))


        res.data.forEach(element => {
            vName[j] = element.v_name; 
            j++;
        });

        this.setState (temp => ({
            options:{xaxis:{
                categories:vName
            }}
        }))


    });

}

cancel() {
    this.props.history.push('/vehicle-admin');
}

viewMore() {
    this.props.history.push('/vehicle-report');
}

    render() {
        return (
          <div id="chart">
                <br/><br/><br/><br/>

                <div className="headingViewMods" style={{ marginBottom: "20px" }}>  Vehicle Report Diagram</div>
              <div style={{ paddingLeft: "80px", marginRight: "80px"}}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                <br/>   
            </div>
                <center>                              
                    <div className="VclReportCancelBtnv"> <button onClick={this.cancel.bind(this)} >CANCEL</button> </div>   
                    <div className="VclReportPrintBtnv"> <button onClick={this.viewMore.bind(this)} style={{ marginLeft: "15px" }}> View More</button> </div>
                            
                </center>   
                <br/>                
            </div>
        );
    }
}

export default vclReport;