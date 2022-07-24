// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Bartlett", "Bel Air", "Bergen"],
    datasets: [{
      data: [20, 50, 30],
      backgroundColor: ['#7CB9E8', '#00308F', '#72A0C1'],
    }],
  },
});

var ctx1 = document.getElementById("myPieChart1");
var myPieChart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ["Dining", "Sofa", "Stool", "Office", "Kids", "Banquette"],
    datasets: [{
      data: [5, 25, 10, 20, 20, 20],
      backgroundColor: ['#002D62', '#0066b2', '#5072A7', '#A3C1AD', '#008E97', '#6F00FF'],
    }],
  },
});
