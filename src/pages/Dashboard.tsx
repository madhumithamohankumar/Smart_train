import React from 'react';
import { 
  Train, 
  Package, 
  Sparkles, 
  Fuel, 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  RefreshCcw
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const Dashboard = () => {
  const stats = [
    { label: 'Total Rakes', value: '0', sub: '0 empty, 0 in transit', icon: Train, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Cargo Requests', value: '0', sub: '0 pending, 0 in transit', icon: Package, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'AI Recommendations', value: '0', sub: '0 pending approval', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Fuel Saved', value: '0L', sub: '0 empty runs prevented', icon: Fuel, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const impactMetrics = [
    { label: 'Fuel Savings', value: '0%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'CO2 Reduction', value: '0%', icon: Leaf, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Revenue Increase', value: '0%', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Empty Runs Prevented', value: '0', icon: Package, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">AI Smart Freight System Overview</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200">
          <RefreshCcw className="w-4 h-4" />
          Generate AI Recommendations
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={cn("p-3 rounded-xl", stat.bg)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-xs text-slate-400">{stat.sub}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card title="AI Impact Metrics">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center space-y-3">
              <div className={cn("p-4 rounded-full", metric.bg)}>
                <metric.icon className={cn("w-8 h-8", metric.color)} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900">{metric.value}</h4>
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Rake Status">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">Empty</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">Loaded</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">In Transit</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">Maintenance</span>
              <span className="font-bold">0</span>
            </div>
          </div>
        </Card>

        <Card title="Cargo Status">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">Pending</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">Assigned</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-600">In Transit</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">Delivered</span>
              <span className="font-bold">0</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
