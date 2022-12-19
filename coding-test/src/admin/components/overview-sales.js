import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class OverviewSales extends Component {
    dates = new Date();
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                    enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },
        }
    }

    render() {
        return (
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
            </div>
        </div>
        );
    }
}

export default OverviewSales;