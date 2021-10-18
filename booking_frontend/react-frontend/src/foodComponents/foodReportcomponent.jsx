import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';
import ApexCharts from 'react-apexcharts';



import ReactApexChart from 'react-apexcharts';

export default class foodReportcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            //  bookfood: [],
            bookfoodsum: [],
            bookfoodcount: [],
            bookfoodd: [],

            flag: true,

            series: [{
                name: 'Net Profit',
                data: []
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
                    enabled: true
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                yaxis: {
                    title: {
                        text: 'Number of Orders'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " Orders"
                        }
                    }
                }
            },

        }


    }

    cancelfoodpage() {
        this.props.history.push('startfood');
    }

    componentDidMount() {

        FoodService.getReportfoodonesum().then((res) => {
            this.setState({ bookfoodsum: res.data });
        });
        FoodService.getReportfoodnooforders().then((res) => {
            this.setState({ bookfoodcount: res.data });
        });

        FoodService.getReportfood().then((res) => {
            this.setState({ bookfoodd: res.data });
        });



        FoodService.getReportfood().then((res) => {

            var code = []
            var count = []

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

                code[j] = element.food_package_name;
                j++;
            });

            this.setState(temp => ({

                options: {
                    xaxis: {
                        categories: code
                    }
                }


            }))

        })


    }

    printbar() {
        this.props.history.push('freportbar');
    }





    print() {
        window.print();
    }


    render() {
        return (
            <div >
                <div className="text-center">

                    <br></br><br></br><br></br><br></br><br></br><br></br>

                    <img onClick={this.cancelfoodpage.bind(this)} style={{ height: "50px", marginTop: "-60px", marginLeft: "100px" }} src="../images/back.png" />
                    <div className="section-to-print">
                        <h2 style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "80px" }} className="test-center">EVENTO356 CATERING SERVICE REPORT</h2>



                        <br></br><br></br>



                        <div >
                            <div className="foodtable">
                                <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className="table table-striped table-bordered">
                                    <thead>
                                        <tr className="customerTR">
                                            <th style={{ textAlign: "center", fontSize: "20px", width: "10%" }}>Food package category</th>
                                            <th style={{ textAlign: "center", fontSize: "20px", width: "10%" }}>Food package Name</th>
                                            <th style={{ textAlign: "center", fontSize: "20px", width: "10%" }}>Number of orders</th>
                                        </tr>
                                    </thead>

                                    <tbody className="customerTbody">
                                        {
                                            this.state.bookfoodd.map(
                                                bookfoodd =>
                                                    <tr key={bookfoodd.order_food_id}>
                                                        <td style={{ textAlign: "center", fontSize: "17px", height: "20px" }}> {bookfoodd.food_package_id} </td>
                                                        <td style={{ textAlign: "center", fontSize: "17px" }}> {bookfoodd.food_package_name} </td>
                                                        <td style={{ textAlign: "center", fontSize: "17px" }}> {bookfoodd.count} </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <br></br><br></br>


                        <div >
                            <div className="foodtable">
                                <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className="table table-striped table-bordered">
                                    <thead>
                                        <tr className="customerTR">
                                            {/* <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Number of food orders</th> */}
                                            {/* <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Total income</th> */}
                                        </tr>
                                    </thead>

                                    <tbody className="customerTbody">
                                        {
                                            this.state.bookfoodsum.map(
                                                bookfoodsum =>
                                                    <tr key={bookfoodsum.order_food_id}>
                                                        <td style={{ textAlign: "center", fontSize: "20px", width: "10%", fontWeight: "bold" }}>Total income </td>
                                                        <td style={{ textAlign: "center", fontSize: "17px", width: "10%" }}> {bookfoodsum.sum} </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>

                                </table>


                            </div>
                        </div>

                        <div className="row" className="text-center" >
                            <div className="foodtable">

                                <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className="table table-striped table-bordered">
                                    <thead>
                                        <tr className="customerTR">
                                            {/* <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Number of food orders</th> */}
                                        </tr>
                                    </thead>

                                    <tbody className="customerTbody">
                                        {
                                            this.state.bookfoodcount.map(
                                                bookfoodcount =>
                                                    <tr key={bookfoodcount.order_food_id}>
                                                        <td style={{ textAlign: "center", fontSize: "20px", height: "20px", width: "10%", fontWeight: "bold" }}> Number of food orders </td>
                                                        <td style={{ textAlign: "center", fontSize: "17px", height: "20px", width: "10%" }}> {bookfoodcount.count} </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>

                                </table>



                            </div>
                        </div>

                    </div>

                    <button className="btn btn-success" style={{ marginBottom: "30px", marginTop: "20px" }} onClick={this.print.bind(this)}> Print Report</button>
                    <button className="btn btn-success" style={{ marginLeft: "10px", marginBottom: "30px", marginTop: "20px" }} onClick={this.printbar.bind(this)}> Bar chart</button>




                </div>
            </div>
        )
    }
}

