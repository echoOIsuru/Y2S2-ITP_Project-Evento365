import React, { Component } from 'react';

import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './itemrent.css';
import RentalItemService from '../rentingServices/RentalItemService';

class rep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flag:true,
          series: [{
            name: 'Item Rent quantities',
            data: []  //series.data
          },],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
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
              categories: ['Feb', 'Mar', 'Apr'], 
            },
            yaxis: {
              title: {
                text: 'Quantity'
              }
            },
            fill: {
              opacity: 1,
              colors : 'black',
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " items rented"
                }
              }
            }
          },

          flag:true,
          series2: [{
            name: 'Item Rent prices',
            data: []  //series.data
          },],
          options2: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
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
              categories: ['Feb', 'Mar', 'Apr'], 
            },
            yaxis: {
              title: {
                text: 'Price'
              }
            },
            fill: {
              opacity: 1,
              colors : 'black',
            //   colors: ['#F44336', '#E91E63', '#9C27B0']
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "Total price : " + val
                }
              }
            }
          },
        
        
        };
      }

      componentDidMount(){
        RentalItemService.retrieveDetails().then((res) => {
          // this.setState({temporaryitems: res.data});
          var rentalitems = []
          var cat = []
          var cat2 = []
          var prices = []
          var i = 0
          var j = 0
          var k = 0
          var l = 0
  
          res.data.forEach(element => {
            
               rentalitems[i] = element.quantity;
              i++;
          });
  
          res.data.forEach(element => {
            
              cat[j] = element.name;
              j++;
          });
        //series.data

        //2
        res.data.forEach(element => {
            
              cat2[k] = element.name;
              k++;
          });

        //price2
        res.data.forEach(element => {
               prices[l] =element.price;
              l++;
          });

        //   options.xaxis.categories
          this.setState(temp=>({
              series:[{
                  data : rentalitems
              }
            ]
          }))


          this.setState(temp=>({
              options:{xaxis:{
                  categories:cat
              }}
          }))

          //2
          this.setState(temp=>({
            options2:{xaxis:{
                categories:cat2
            }}
        }))

        this.setState(temp=>({
            series2:[{
                data : prices
            }
          ]
        }))

        console.log(this.state.options2.xaxis.categories,'halooo');

        // this.state.series[0].data = rentalitems;
        //this.state.xaxis.categories

        console.log(rentalitems, "sdaasdsadsadasd");
        console.log(cat, "sdaasdsadsadasd")
          
  
  
        //   this.state.t1 = rentalitems;
        //   this.state.t2 = cat;
  
        // this.setState({
        //     flag :true
        // })
  
  
          
  
      })
    //   this.method1(this.state.t1,this.state.t2)
      }

      print(){
          window.print();
      }

    render() {
        return (
            <div class="section-to-print">
                
                <br/><br/><br/><br/><br/>
                <center>
                <h1 style={{fontWeight:"bold"}}> EVENTO 365 ITEM RENTING OVERVIEW </h1>
                </center>
                <center>
                    <div class="container">
                        <table style={{borderRadius:'20px',marginTop:'50px',border:'0px'}}>
                            <tr style={{height:'50px'}}>

                            </tr>
                            <tr style={{height:'100px'}}>
                                <center>
                                <h1> Overview of the rented item quantities</h1>
                                </center>
                            </tr>
                            <tr style={{height:'450px'}}>
                        <div class="reportStyle">
                            {this.state.flag==true?<div id="chart">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                            </div>:<div></div>}
                        </div>
                            </tr>
                            <tr style={{height:'100px'}}>
                                <center>
                                <h1> Overview of the rented item prices</h1>
                                </center>
                            </tr>
                            <tr style={{height:'450px'}}>
                        <div class="reportStyle">
                            {this.state.flag==true?<div id="chart">
                            <ReactApexChart options={this.state.options2} series={this.state.series2} type="bar" height={350} />
                            </div>:<div></div>}
                        </div>
                            </tr>
                        </table>
                    </div>
                     <div> <button class="btn btn-info" onClick={this.print} style={{marginTop:'30px',marginBottom:'30px',width:'200px',height:'50px' }}> Print</button> </div>
                </center>
            </div>    
    
        );
    }
}

export default rep;
