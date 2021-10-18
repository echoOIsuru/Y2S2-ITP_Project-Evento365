import React, { Component } from 'react';
import HireService from '../eventPlannerServices/HireService';
import ApexCharts from 'react-apexcharts';

import ReactApexChart from 'react-apexcharts';
class AdminHirechart extends Component {

    constructor(props) {
        super(props);

        this.state = {

            flag: true,

            series: [{
                name: 'Net Profit',
                data: [] //series.data

            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '60%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['yasiru', 'dulshan', 'indika'],
                    //options.xaxis.categories
                },
                yaxis: {
                    title: {
                        text: 'Count'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return " " + val + " Hirie"
                        }
                    }
                }
            },


        };
    }


    componentDidMount() {
        HireService.gethiringcount().then((res) => {
            //   this.setState({hire:res.data})
            var count = []
            var name = []

            var i = 0
            var j = 0

            res.data.forEach(element => {

                count[i] = element.count;
                i++;

            });

            this.setState(temp => ({

                series: [{

                    data: count

                }]

            }))


            res.data.forEach(element => {

                name[j] = element.name;
                j++;

            });

            this.setState(temp => ({

                options: {
                    xaxis: {

                        categories: name

                    }
                }

            }))

        });

    }
    render() {
        return (
            <div className="container">
                <div id="chart" style={{marginBottom:'200px',marginTop:'200px'}}> 
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} width={700} />
                </div>
            </div>
        );
    }
}

export default AdminHirechart;