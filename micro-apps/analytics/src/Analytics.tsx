import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Eye, Download, Settings } from "lucide-react";

const metrics = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "-2.1%",
    trend: "down",
    icon: ShoppingCart,
    color: "text-orange-400",
  },
  {
    title: "Page Views",
    value: "98,765",
    change: "+15.3%",
    trend: "up",
    icon: Eye,
    color: "text-purple-400",
  },
];

const chartData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4500 },
  { month: 'May', value: 6000 },
  { month: 'Jun', value: 5500 },
];

export const Analytics = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30">
          📊 Micro App
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Analytics Dashboard
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Track your performance metrics and business insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          
          return (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 ${metric.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.trend === "up" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-red-500/20 text-red-400"
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </div>
              
              <div>
                <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
            <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors duration-200">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="url(#colorGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-500/30 text-white transition-all duration-200">
              <Download className="w-5 h-5" />
              <span>Export Report</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200">
              <Settings className="w-5 h-5" />
              <span>Configure Metrics</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200">
              <Eye className="w-5 h-5" />
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;