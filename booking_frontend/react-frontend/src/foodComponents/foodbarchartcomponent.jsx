import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';
import ApexCharts from 'react-apexcharts';


import ReactApexChart from 'react-apexcharts';

export default class foodbarchartcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            //  bookfood: [],
            bookfoodsum:[],
            bookfoodcount:[],
            bookfoodd:[],

            flag: true,

            series: [{
                name: 'Food Orders',
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
                    columnWidth: '55%',
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

    cancelfoodpage(){
        this.props.history.push('freport');
     }

    componentDidMount(){
        
        FoodService.getReportfoodonesum().then((res) => {
            this.setState({ bookfoodsum: res.data});
        });
        FoodService.getReportfoodnooforders().then((res) => {
            this.setState({ bookfoodcount: res.data});
        });

        FoodService.getReportfood().then((res) => {
            this.setState({ bookfoodd: res.data});
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

                options: { xaxis: {
                        categories: code
                    }
                }
                

        }))

    })
    

    } 

    print(){
        window.print();
    }

    render() {
        return (
            <div >
            <div className="text-center">

                <br></br><br></br><br></br><br></br><br></br><br></br>

                <img onClick={this.cancelfoodpage.bind(this)} style={{height:"50px" , marginTop:"-60px"  , marginLeft:"100px"}} src="../images/back.png"/>

                <h2 style={{marginBottom: "30px" , marginTop: "10px" , marginLeft:"80px" }} className="test-center">EVENTO356 CATERING SERVICE REPORT</h2>

                


                    <br></br><br></br>
                        

                    {/* <div className="bg-image"
                    style={{  backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImK3unqqIwTtwqXlfAPOvQNE90xHHKFgFYFrgya64_fzJd3l8TM80tKYcXvdrO_P-_5o&usqp=CAU')" }} > */}
                    <div >
                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={600} />
                    </div>
                    </div>
                    {/* </div> */}

                    <br></br><br></br>


                    <button className = "btn btn-success" style={{marginBottom: "30px" , marginTop: "20px" }} onClick = {this.print}> Print Report</button>




            </div>
          </div>
        )
    }
}
