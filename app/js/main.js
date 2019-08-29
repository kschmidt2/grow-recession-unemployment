// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'variwide',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            marginLeft: 40
        }, 
        title: {
            text: null
        },
        series: [{
            data: [
                ["Nov. 1948 – Oct. '49",7.9,11],
                ["July 1953 – May '54",5.9,10],
                ["Aug. 1957 – April '58",7.4,8],
                ["April 1960 – Feb. '61",6.9,10],
                ["Dec. 1969 – Nov. '70",5.9,11],
                ["Nov. 1973 – March '75",8.6,16],
                ["Jan. 1980 – July '80",7.8,6],
                ["July 1981 – Nov. '82",10.8,16],
                ["July 1990 – March '91",6.8,8],
                ["March 2001 – Nov. '01",5.5,8],
                ["Dec. 2007 – June '09",9.5,18]
            ],
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    // useHTML: true,  
                    format: '{point.z:,.0f}',
                    allowOverlap: true,
                    verticalAlign: 'top',
                    align: 'center'
                },
                pointPadding: .02
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Duration of recession, in months',
                align: 'low'
            },
            type: 'category',
            labels: {
                enabled: false,
                overflow: 'allow',
                padding: 20,
                style: {
                    whiteSpace: 'wrap'
                },
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 12,
            tickAmount: 5
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            pointFormat: '<b>Peak unemployment rate:</b> {point.y:.1f}%<br>' +
                '<b>Duration:</b> {point.z} months<br>'
        },
        annotations: [{
            shapes: [{
                type: 'path',
                points: [{
                    x: 0,
                    y: 5.74,
                    xAxis: 0,
                    yAxis: 0
                }, {
                    x: 500,
                    y: 5.74,
                    xAxis: 0,
                    yAxis: 0
                }]
            }],
            labels: [{
                point: {
                    x: 2000,
                    y: 2,
                    yAxis: 0,
                    xAxis: 0
                },
                useHTML: true,
                backgroundColor: 'white'
            }],
            labelOptions: {
                formatter: function () {
                    return "Historical <br/>average"
                }
            }
        }],
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        pointPadding: .05
                    }
                },
              }
            }]
        }
    });
});