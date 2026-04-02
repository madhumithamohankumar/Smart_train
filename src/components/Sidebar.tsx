import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  TrainFront as Train, 
  Sparkles, 
  Map as MapIcon, 
  BarChart3, 
  Bell, 
  User,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Cargo Requests', path: '/cargo' },
  { icon: Train, label: 'Rake Management', path: '/rakes' },
  { icon: Sparkles, label: 'AI Recommendations', path: '/ai-recommendations' },
  { icon: MapIcon, label: 'Map View', path: '/map' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-400">Freight AI</h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Smart Rake Allocation</p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <p className="px-2 mb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Menu</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "hover:bg-slate-800 hover:text-white"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 mt-auto">
        <div className="flex items-center gap-3 px-2 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">
            MM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">MADHUMITHA M</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Industry</span>
          </div>
        </div>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
