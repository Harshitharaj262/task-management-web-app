// Correct export syntax
function formatDoughnutData(data1, data2) {
    let doughnutData = {
      status: {
        labels: ["TODO", "IN PROGRESS", "DONE"],
        datasets: [{
          data: [0, 0, 0],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"]
        }]
      },
      priority: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
          data: [0, 0, 0],
          backgroundColor: ["#ff0000", "#ff8c00", "#00b300"]
        }]
      }
    };
  
    const statusMapping = {
      "TODO": 0,
      "IN PROGRESS": 1,
      "DONE": 2
    };
  
    const priorityMapping = {
      "High": 0,
      "Medium": 1,
      "Low": 2
    };
  
    data1.forEach(item => {
      const statusIndex = statusMapping[item._id];
      if (statusIndex !== undefined) {
        doughnutData.status.datasets[0].data[statusIndex] += item.count;
      }
    });
  
    data2.forEach(item => {
      const priorityIndex = priorityMapping[item._id];
      if (priorityIndex !== undefined) {
        doughnutData.priority.datasets[0].data[priorityIndex] += item.count;
      }
    });
  
    return doughnutData;
  }
  
  export default formatDoughnutData;
  