import React, { useState } from 'react';
import { Plus, Search, Filter, PackageOpen, X } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const CargoRequests = () => {
  const [showForm, setShowForm] = useState(false);
  const [requests, setRequests] = useState([]);

  const stations = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad'];
  const cargoTypes = ['Coal', 'Iron Ore', 'Cement', 'Food Grains', 'Fertilizers', 'Steel', 'Automobiles', 'Petroleum'];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Cargo Requests</h1>
          <p className="text-slate-500 mt-1">Manage freight booking requests</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200"
        >
          <Plus className="w-4 h-4" />
          New Request
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card title="New Cargo Request" className="mb-8">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Origin Station</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option value="">Select Station</option>
                    {stations.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Destination Station</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option value="">Select Station</option>
                    {stations.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Cargo Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option value="">Select Type</option>
                    {cargoTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Cargo Weight (tons)</label>
                  <input type="number" placeholder="Enter weight" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Wagons Required</label>
                  <input type="number" defaultValue="1" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Priority</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
                <div className="md:col-span-3 space-y-2">
                  <label className="text-sm font-medium text-slate-700">Special Instructions</label>
                  <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Any additional details..."></textarea>
                </div>
                <div className="md:col-span-3 flex gap-3">
                  <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">Submit Request</button>
                  <button type="button" onClick={() => setShowForm(false)} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-6 py-2 rounded-lg font-semibold transition-all">Cancel</button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by request number, station, or cargo type..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="w-full md:w-40 px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option value="All Status">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Assigned">Assigned</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      <Card className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
            <PackageOpen className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">No cargo requests found</h3>
            <p className="text-sm text-slate-500">Click "New Request" to create your first booking</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CargoRequests;
