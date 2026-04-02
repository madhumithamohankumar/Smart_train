import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Fuel, Leaf, DollarSign, Train } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

const Analytics = () => {
  const metrics = [
    { label: 'Fuel Saved', value: '0L', change: '+0% from baseline', icon: Fuel, color: 'bg-green-600', text: 'text-green-600', bg: 'bg-green-50' },
    { label: 'CO2 Reduced', value: 'NaNt', change: '+0% from baseline', icon: Leaf, color: 'bg-blue-600', text: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Revenue Impact', value: '$0', change: 'Additional revenue generated', icon: DollarSign, color: 'bg-purple-600', text: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Empty Runs Prevented', value: '0', change: 'Train trips optimized', icon: Train, color: 'bg-orange-600', text: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const rakeData = [
    { name: 'Empty', value: 0, color: '#22c55e' },
    { name: 'Loaded', value: 0, color: '#3b82f6' },
    { name: 'In Transit', value: 0, color: '#eab308' },
    { name: 'Maintenance', value: 0, color: '#ef4444' },
  ];

  const cargoData = [
    { name: 'Pending', value: 0, color: '#f97316' },
    { name: 'Assigned', value: 0, color: '#a855f7' },
    { name: 'In Transit', value: 0, color: '#f59e0b' },
    { name: 'Delivered', value: 0, color: '#10b981' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
        <p className="text-slate-500 mt-1">System performance and impact metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className={cn("border-none", metric.color)}>
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <metric.icon className="w-12 h-12 text-white/10 -mr-4 -mt-4" />
            </div>
            <div className="text-white">
              <p className="text-sm font-medium opacity-80">{metric.label}</p>
              <h3 className="text-3xl font-bold mt-1">{metric.value}</h3>
              <p className="text-xs mt-2 opacity-90">{metric.change}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Rake Utilization">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={rakeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {rakeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Cargo Request Status">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cargoData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {cargoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
