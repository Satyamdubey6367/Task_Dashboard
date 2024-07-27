const ctx1 = document.getElementById('weeklyOverviewChart').getContext('2d');
const weeklyOverviewChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Success',
            data: [600, 800, 1200, 1500, 1800, 2400, 2100],
            backgroundColor: '#4c5a85'
        }, {
            label: 'Fail',
            data: [400, 300, 200, 100, 50, 30, 20],
            backgroundColor: '#db4c39'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('trafficStatusChart').getContext('2d');
const trafficStatusChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Total Traffic',
            data: [9000, 10000, 11000, 12000, 13000, 14000, 15000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
