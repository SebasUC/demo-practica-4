document.addEventListener('DOMContentLoaded', async function () {

    const chartContainer = document.getElementById('chart-container');
    const res = await fetch("https://mariofranavila.github.io/JSON_FileBar_Line/practica.json")
    const data = await res.json();

    const option = {
        xAxis: {
            type: 'category',
            data: data.trimestres
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Ventas',
                type: 'line',
                smooth: true,
                data: data.ingresos,
                itemStyle: {
                    color: 'skyblue'
                }
            },
        ],
        tooltip: {
            trigger: 'axis',
        }
    };

    const chart = echarts.init(chartContainer);
    chart.setOption(option);


})  