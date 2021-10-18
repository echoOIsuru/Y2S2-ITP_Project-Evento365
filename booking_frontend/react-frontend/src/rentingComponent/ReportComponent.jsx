import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './itemrent.css';
import { Input } from '@material-ui/core';

class ReportComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            t1:[],
            t2:[]
        
        
        };
      }
    //   this.method1 = this.method1.bind(this);   
    

    componentDidMount(){
      RentalItemService.retrieveDetails().then((res) => {
        // this.setState({temporaryitems: res.data});
        var rentalitems = []
        var cat = []
        var i = 0

        res.data.forEach(element => {
            console.log(element.name);
            cat[i] = element.name;
            //this.state.series.data[i] =element.quantity;
            i++;
        });

        res.data.forEach(element => {
            console.log(element.quantity);
            rentalitems[i] = element.quantity;
            //this.state.series.data[i] =element.quantity;
            i++;
        });
        console.log(rentalitems,"asdasdasdasd");
        console.log(cat,"asdasdasdasd");


        


        this.state.t1 = rentalitems;
        this.state.t2 = cat;

        console.log(this.state.t1,"aaaaaaaaaaa");
        console.log(this.state.t1,"bbbbbbbbbbb");

        

        // console.log(this.state.series.data,"aabcdefgh");
        // console.log(this.state.options.xaxis.categories,"aabcdefgh");
        // console.log(res.data,'aaaaaaaaaaaaaaaaaaaaaa');
        // let ab = res.data;
        // ab[1].name;

        // var len = temporaryitems.length;
        
        // for (var i = 0; i < len; i++){
        //     if(items[i].name = this.state.name){
        //         flag = 1
        //     }
        // }
    })
    this.method1(this.state.t1,this.state.t2)
    }


    method1(v1,v2){

        console.log(v1,'v11111111111111');
        console.log(v2,'v22222222222222');
        const ee={
        series: [{
            name: 'Net Profit',
            data: v1
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
              categories: v2,
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            
          },}


          return(
                    <div>                       
                    <div id="chart">
                    <ReactApexChart options={ee.options} series={ee.series} type="bar" height={350} />
                    </div>
                    </div>

          )
    }


    addMore(){
        window.print();
    }

    abc(){
      return this.method1(this.state.t1,this.state.t2)
    }



    render() {
      let a = this.method1(this.state.t1,this.state.t2)
        return (
            <div>
                <center>
                    <div class="reportstyle">
                    {
                      a
                    }
                            
                <input type='text' onChange= {this.abc.bind(this)} className="btn btn-info"/>


                <button onClick= {this.print} className="btn btn-info"> Print </button> 
                </div>
                </center>
            </div>
        );
    }
}

export default ReportComponent;