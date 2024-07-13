const ctx = document.getElementById("wppoolChart").getContext("2d");
const wppoolChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [10, 40, 25, 50, 90, 70, 60],
        borderColor: "rgba(252, 113, 77, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Google",
        data: [20, 60, 45, 70, 86, 90, 80],
        borderColor: "#2042B6",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Microsoft",
        data: [30, 50, 35, 60, 100, 80, 70],
        borderColor: "#7CA63A",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Twitter",
        data: [15, 30, 20, 40, 75, 55, 45],
        borderColor: "#6F34A1",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  },
  options: {
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: -10,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          stepSize: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
        backgroundColor: "white",
        titleColor: "black",
        titleFont: { weight: "bold" },
        bodyColor: "#191618",
        borderColor: "black",
        borderWidth: 1,
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
