window.addEventListener('DOMContentLoaded', () => {
    const data = {
        labels: [
            'JavaScript',
            'HTML/CSS',
            'PHP',
            'Photosho',
            'Illustrator',
        ],
        datasets: [{
            label: 'skill set',
            data: [85, 80, 90, 81, 80],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    const options = {
        elements: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16
                    }
                }
            }
        }
    };

    const config = {
        type: 'radar',
        data: data,
        options: options
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

})