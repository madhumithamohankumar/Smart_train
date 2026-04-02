import React from 'react';
import { Sparkles, RefreshCcw, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

const AIRecommendations = () => {
  const steps = [
    { id: 1, label: 'Find empty rakes' },
    { id: 2, label: 'Match with cargo' },
    { id: 3, label: 'Calculate efficiency' },
    { id: 4, label: 'Optimize route' },
    { id: 5, label: 'Recommend best match' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Recommendations</h1>
          <p className="text-slate-500 mt-1">Intelligent rake-cargo allocation suggestions</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-purple-200">
          <Sparkles className="w-4 h-4" />
          Generate New Recommendations
        </button>
      </div>

      <Card>
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">How AI Allocation Works</h3>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <span className="text-sm font-medium text-slate-600">{step.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Card>

      <div className="flex gap-3">
        {['All', 'Pending', 'Approved', 'Rejected'].map((filter) => (
          <button
            key={filter}
            className={cn(
              "px-5 py-2 rounded-lg text-sm font-semibold transition-all",
              filter === 'All' 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <Card className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">No Recommendations</h3>
            <p className="text-sm text-slate-500">Click "Generate New Recommendations" to get AI suggestions</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIRecommendations;
