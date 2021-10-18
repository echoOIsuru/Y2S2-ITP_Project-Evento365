import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import BookingService from '../bookingServices/BookingService';

class BookingReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signal: false,
            day10per: 0.0,
            day10total: 0.0,
            day30per: 0.0,
            day30total: 0.0,
            avarageBooking: 0.0,
            

            seriesgg: [44, 55, 41, 17, 15],
            optionsgg: {
                labels: [],
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: true
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val, opts) {
                        return val + "<br/> <br/> <br/>"
                    },
                    position: 'right',

                },

                title: {
                    text: ''
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400
                        },
                        legend: {
                            position: 'top'
                        }
                    }
                }]
            },




            seriesSpark3: [{
                data: [],
                name: "Booking Cost"
            }],
            optionsSpark3: {
                labels: ["iasdasd"],
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },

                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                yaxis: {
                    min: 0
                },
                title: {
                    text: '',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                    }
                },
                subtitle: {
                    text: 'Income',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                    }
                }
            },

            series1: [{
                data: []
            }],
            options1: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series2: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options2: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series3: [43, 32, 12, 9],
            options3: {
                labels: ['Upcoming','Completed'],
                chart: {
                    type: 'pie',
                    width: 40,
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    width: 1
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                }
            },




        };
    }

    componentDidMount() {
        BookingService.getBookingLocationReport().then((res) => {

            var gg = [];
            var gg2 = 0;
            var i = 0;
            var total = 0;
            res.data.forEach(key => {
                console.log('key', key);
                console.log('value', key.count);
                this.state.optionsgg.labels[i] = key.location;
                gg[i] = key.count;
                i++;
            });
            BookingService.getBookingLocationReport2().then((res) => {
                var i = 0;

                res.data.forEach(key => {
                    // this.state.seriesSpark3.data[i] = key
                    this.state.seriesSpark3[0].data[i] = key
                    total = total += parseInt(key);
                    console.log(key, "REPORT@2----KEY")
                    i++;

                });

                var concat = total;
                concat = "Rs: " + concat;

                //avarage of all bookings
                var AvarageOfall = ((total / this.state.seriesSpark3[0].data.length)).toFixed(2);

                this.setState({
                    avarageBooking: AvarageOfall
                })

                this.setState(temp => ({
                    optionsSpark3: {
                        title: {
                            text: concat
                        }
                    }

                }))

                console.log(total, "REPORT@2--121212121212--")
                console.log(this.state.total, "REPORT@2----")
            })

            this.state.total = total;
            console.log(total, "DATAAAAAAAAA");

            this.setState({
                seriesgg: gg,
            });

            //All booking days
            BookingService.getBookingLocationReportDays().then((res) => {
                var alldates = [];
                var i = 0;

                res.data.forEach(data => {
                    alldates[i] = data.substr(0, 10)
                    i++;
                })

                this.setState({
                    optionsSpark3: {
                        labels: alldates
                    }
                })
            })


            //last 10 days
            BookingService.getBookingLocationReportLast10().then((res) => {


                //10day percentage
                var day10per = ((res.data.length / this.state.seriesSpark3[0].data.length) * 100).toFixed(2);

                total = 0;
                res.data.forEach(temp => {
                    total += parseInt(temp)
                })
                this.setState({
                    day10total: total
                })

                this.setState(temp => ({
                    series1: [{
                        data: res.data
                    }]

                }))

                this.setState({
                    day10per: day10per
                }
                )

            })

            //last 30 days
            BookingService.getBookingLocationReportLast30().then((res) => {


                //30 day percentage
                var day30per = ((res.data.length / this.state.seriesSpark3[0].data.length) * 100).toFixed(2);


                total = 0;
                res.data.forEach(temp => {
                    total += parseInt(temp)
                })
                this.setState({
                    day30total: total
                })

                this.setState(temp => ({
                    series2: [{
                        data: res.data
                    }]

                }))

                this.setState({
                    day30per: day30per
                }
                )


            })


            //Approved bookings
            BookingService.getBookingofApproved().then((res) => {
                var temp = [1,2]
                temp[0] = res.data[0];
                
                BookingService.getBookingofCompleted().then((res) => {
                    temp[1] = res.data[0]
               
                })
                
                this.setState({
                    series3:temp
                })
                console.log(this.state.series3, "SDQWEWEWEWEWEWEWEWEWE")

            })




            this.setState({
                signal: true

            })
        });





    }

    testPie() {
        return (
            <div>
                <center>
                    <div id="chart">
                        <ReactApexChart options={this.state.optionsgg} series={this.state.seriesgg} type="donut" width={500} />
                    </div>
                </center>
            </div>
        )
    }

    test() {
        return (

            <div class="col-md-6">
                <div id="chart-spark3">
                    <ReactApexChart options={this.state.optionsSpark3} series={this.state.seriesSpark3} type="area" height={160} />
                </div>
            </div>
        )
    }

    print(){
        window.print();
    }


    render() {
        return (

            <div className="container">

                <main role="main">
                    <header class="section background-white">
                        <article>
                            <div class="line text-center">
                                <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Booking Report</h2>
                                <br></br>
                            </div>

                            <section class="full-width background-white">

                                <div className="row">

                                    <ul class="nav nav-tabs nav-justified mb-3 " id="ex1" role="tablist">
                                        <li class="nav-item " role="presentation">
                                            <a
                                                class="nav-link"
                                                id="ex3-tab-1"
                                                data-mdb-toggle="pill"
                                                href="/bookings"
                                                role="tab"
                                                aria-controls="ex3-pills-1"
                                                aria-selected="true"
                                            >Booking DashBoard</a
                                            >
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link"
                                                id="ex3-tab-2"
                                                data-mdb-toggle="pill"
                                                href="/locations"
                                                role="tab"
                                                aria-controls="ex3-pills-2"
                                                aria-selected="false"
                                            >Location Panel</a
                                            >
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link active"
                                                id="ex3-tab-3"
                                                data-mdb-toggle="pill"
                                                href="/bookings-report"
                                                role="tab"
                                                aria-controls="ex3-pills-3"
                                                aria-selected="false"
                                            >Overview and Report</a
                                            >
                                        </li>
                                    </ul>

                                </div>
                                <br></br>

                                <div className="row formDivgg3 section-to-print">
                                    <div style={{ background: "#F2F2F2" }}>

                                        <div style={{ "float": "left" }}>
                                            <i class="fa fa-list-alt"> Booking Report</i>
                                        </div>

                                        <div style={{ "float": "right" }}>
                                            <div className="input-group btn-group-sm ">
                                               
                                            </div>


                                        </div>
                                        <br /><br />
                                    </div>

                                    <table className="table table-striped table-bordered">
                                        <tbody>
                                            <tr>

                                            </tr>
                                            <tr>

                                                <td >
                                                    <center>
                                                        <h3><b>Overview of user preferences for reservation locations</b></h3>
                                                        {this.state.signal == true ? this.testPie() : <div></div>}
                                                    </center>
                                                </td>
                                            </tr>

                                            <td >

                                                <div>
                                                    <div class="row">
                                                        {this.state.signal == true ? this.test() : <div></div>}
                                                    </div>
                                                    <br />
                                                    <div class="row">
                                                        <table>
                                                            <thead>
                                                                <th></th>
                                                                <th>Total Booking Income</th>
                                                                <th>Percentage of Bookings</th>
                                                                <th>Chart of Spread</th>

                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Last 10 days</td>
                                                                    <td>Rs: {this.state.day10total}</td>
                                                                    <td>{this.state.day10per}%</td>
                                                                    <td>
                                                                        <div id="chart-1">
                                                                            <ReactApexChart options={this.state.options1} series={this.state.series1} type="line" height={35} width={100} />
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Last 30 days</td>
                                                                    <td>Rs: {this.state.day30total}</td>
                                                                    <td>{this.state.day30per}%</td>
                                                                    <td>
                                                                        <div id="chart-2">
                                                                            <ReactApexChart options={this.state.options2} series={this.state.series2} type="line" height={35} width={100} />
                                                                        </div>
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td><h5>Avarage booking Income</h5></td>

                                                                    <td>
                                                                        <lable><h5>Rs: {this.state.avarageBooking} /per booking</h5> </lable>
                                                                    </td>

                                                                </tr>

                                                            </tbody>
                                                        </table>



                                                    </div>
                                                    <br /><br />
                                                    <div class="row">
                                                        <table>
                                                        <center>
                                                            <thead>
                                                                <th></th>
                                                                <th>Number of Bookings</th>
                                                                <th>Percentages</th>
                                                                <th>Graph</th>
                                                                

                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><h5>Up Coming</h5> 
                                                                        <h5>Completed</h5>
                                                                        <br/><br/><br/>
                                                                        <h5>Total</h5>
                                                                        </td>
                                                                            
                                                                    <td>
                                                                        <center>
                                                                        <h5>{this.state.series3[0]}</h5>
                                                                        <h5>{this.state.series3[1]}</h5>
                                                                        <br/><br/><br/>
                                                                        <h5>{this.state.series3[1]+this.state.series3[0]}</h5>
                                                                        </center>
                                                                    </td>
                                                                    <td>
                                                                    <h5>{((this.state.series3[0]/(this.state.series3[1]+this.state.series3[0]))*100).toFixed(2)}</h5>
                                                                    <h5>{((this.state.series3[1]/(this.state.series3[1]+this.state.series3[0]))*100).toFixed(2)}</h5>

                                                                        </td>

                                                                    <td>
                                                                        <div id="chart-3">
                                                                            <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={200} width={200} />
                                                                        </div>
                                                                    </td>
                                                                 
                                                                </tr>
                                                                

                                                            </tbody>
                                                            </center>

                                                        </table>

                                                    </div>
                                                </div>
                                            </td>

                                        </tbody>
                                    </table>
                                    <tfoot >
                                    <button className="btn btn-success" onClick={this.print.bind(this)}>PRINT NOW</button> 
                                    </tfoot>
                                </div>

                            </section>

                        </article>
                    </header>
                </main>





            </div>




        );
    }
}

export default BookingReport;