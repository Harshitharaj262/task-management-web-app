import Task from '../models/task.js'
import User from '../models/user.js'
import formatDoughnutData from '../models/utils/formatDoughnutData.js';

export const getAnalytics = async (req, res) => {
    try {
        const totalTasks = await Task.countDocuments();
        const totalTeams = await User.countDocuments();
        const weeklyMetrics = await Task.aggregate([
            {
              $match: {
                createdAt: {
                  $gte: new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1))),
                  $lt: new Date(new Date().setDate(new Date().getDate() + (7 - new Date().getDay())))
                }
              }
            },
            {
              $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                count: { $sum: 1 }
              }
            },
            { $sort: { _id: 1 } }
          ]);
          
          const statusDistribution = await Task.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } },
          ]);
      
          const priorityDistribution = await Task.aggregate([
            { $group: { _id: "$priority", count: { $sum: 1 } } },
          ]);
          
          const doughnutChart = formatDoughnutData(statusDistribution,priorityDistribution)
      
          res.json({ tasksCount:totalTasks, teamsCount:totalTeams, lineGraphData:weeklyMetrics, doughnutData:doughnutChart });
        

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {getAnalytics}