import React from 'react';
import { Bell, BellOff } from 'lucide-react';
import { Card } from '../components/ui/Card';

const Notifications = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with system alerts</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">All</button>
          <button className="bg-white text-slate-600 border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold">Unread (0)</button>
        </div>
      </div>

      <Card className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
            <Bell className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">No notifications</h3>
            <p className="text-sm text-slate-500">You're all caught up!</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Notifications;
