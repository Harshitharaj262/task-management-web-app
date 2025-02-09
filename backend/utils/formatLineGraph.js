
function formatLineData(data) {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
   
      ];
      const taskCounts = new Array(7).fill(0);
      data.forEach((item) => {
        const date = new Date(item._id);
        const dayOfWeek = date.getDay();

        taskCounts[dayOfWeek] = item.count;
      });
      return {
        labels: daysOfWeek,
        datasets: [
          {
            label: "Task Count",
            data: taskCounts,
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false, 
          },
        ],
      };
   
  }
  
  export default formatLineData;
  