import React from 'react';
import { User, Mail, Phone, Building2, Save } from 'lucide-react';
import { Card } from '../components/ui/Card';

const Profile = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account information</p>
      </div>

      <Card title="Account Information">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input 
              type="text" 
              defaultValue="MADHUMITHA M"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Address
            </label>
            <input 
              type="email" 
              defaultValue="madhumithamohankumar@gmail.com"
              disabled
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" 
            />
            <p className="text-[10px] text-slate-400">Email cannot be changed</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Phone Number
            </label>
            <input 
              type="tel" 
              defaultValue="+91 9876543210"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Company Name
            </label>
            <input 
              type="text" 
              placeholder="Your company name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            />
          </div>
          <div className="md:col-span-2">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </form>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Account Status">
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Role</span>
              <span className="text-lg font-bold text-slate-800">User</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Verification Status</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-sm font-bold border border-yellow-100">
                  Pending
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
