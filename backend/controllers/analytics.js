import Task from '../models/task.js'
import User from '../models/user.js'
import formatDoughnutData from '../utils/formatDoughnutData.js';
import formatLineData from '../utils/formatLineGraph.js';

export const getAnalytics = async (req, res) => {
    try {
        const totalTasks = await Task.countDocuments();
        const totalTeams = await User.countDocuments();
        const weeklyMetrics = await Task.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(new Date().setUTCHours(0, 0, 0, 0) - (new Date().getUTCDay() * 24 * 60 * 60 * 1000)),
                $lt: new Date(new Date().setUTCHours(23, 59, 59, 999)) 
              }
            }
          },
          {
            $project: {
              date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
            }
          },
          {
            $group: {
              _id: "$date",
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
        

          const lineChartData=formatLineData(weeklyMetrics)
          
          const statusDistribution = await Task.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } },
          ]);
      
          const priorityDistribution = await Task.aggregate([
            { $group: { _id: "$priority", count: { $sum: 1 } } },
          ]);
          
          const doughnutChart = formatDoughnutData(statusDistribution,priorityDistribution)
      
          res.json({ tasksCount:totalTasks, teamsCount:totalTeams, lineGraphData:lineChartData, doughnutData:doughnutChart });
        

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {getAnalytics}