const canvas = document.getElementById('canvas').getContext('2d');
let chart = new Chart (canvas, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: "",
            data: [21.9, 40.50, 80.50, 45.50, 35.98, 60.80, 35.50],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ]
        }]
        
    },
    options: {
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: { color: "hsl(28, 10%, 53%)", beginAtZero: true },
                grid: {
                    display: false,
                },
            },
        },
    },
    
});


