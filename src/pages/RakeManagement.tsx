import React from 'react';
import { Plus, Search, Train, Info } from 'lucide-react';
import { Card } from '../components/ui/Card';

const RakeManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Rake Management</h1>
          <p className="text-slate-500 mt-1">Manage freight trains and wagons</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200">
          <Plus className="w-4 h-4" />
          Add Rake
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by rake number, station, or type..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="w-full md:w-40 px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option value="All Status">All Status</option>
            <option value="Empty">Empty</option>
            <option value="Loaded">Loaded</option>
            <option value="In Transit">In Transit</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <Card className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
            <Train className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">No rakes found</h3>
            <p className="text-sm text-slate-500">Add rakes to start managing your fleet</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RakeManagement;
