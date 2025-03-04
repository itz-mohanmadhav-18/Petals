import React, { useState } from 'react';
import { 
    Calendar, 
    BookOpen, 
    Bell, 
    Users, 
    FileText, 
    TrendingUp, 
    CheckSquare,
    Clock,
    Award,
    BarChart,
    ArrowRight,
    Download,
    Settings,
    ChevronRight,
    MessageSquare,
    Clipboard,
    User,
    UserCheck,
    DollarSign,
    Home,
    AlertTriangle,
    Layers
} from 'lucide-react';

const AdminDashboard = () => {
    // Sample data for admin dashboard
    const recentActivities = [
        { id: 1, title: "New student registered", time: "Today, 2:00 PM", type: "registration" },
        { id: 2, title: "Teacher submitted grades", time: "Today, 11:30 AM", type: "submission" },
        { id: 3, title: "Updated school calendar", time: "Yesterday, 3:00 PM", type: "update" }
    ];
    
    const performanceData = [
        { department: "Mathematics", attendance: 92, color: "bg-blue-500" },
        { department: "Science", attendance: 88, color: "bg-green-500" },
        { department: "English", attendance: 79, color: "bg-amber-500" },
        { department: "History", attendance: 85, color: "bg-purple-500" },
    ];
    
    const notifications = [
        { id: 1, title: "System maintenance scheduled", date: "Mar 1", priority: "high" },
        { id: 2, title: "New curriculum approval needed", date: "Feb 28", priority: "normal" },
        { id: 3, title: "Staff meeting reminder", date: "Feb 25", priority: "high" },
    ];
    
    const pendingTasks = [
        { id: 1, category: "Approvals", title: "Teacher leave requests", count: 3, status: "pending" },
        { id: 2, category: "Review", title: "Curriculum changes", count: 2, status: "pending" },
        { id: 3, category: "Finance", title: "Budget approval", count: 1, status: "urgent" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800">Welcome back, Admin!</h1>
                            <p className="text-slate-600 mt-1">Here's your administrative overview for today.</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-3">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                                <Settings size={16} className="mr-2" />
                                System Settings
                            </button>
                            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                                <User size={16} className="mr-2" />
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                        { title: "Total Students", value: "1,253", icon: <Users className="text-blue-600" size={20} />, color: "bg-blue-50 border-blue-100" },
                        { title: "Total Staff", value: "86", icon: <UserCheck className="text-green-600" size={20} />, color: "bg-green-50 border-green-100" },
                        { title: "Revenue", value: "$52.6K", icon: <DollarSign className="text-emerald-600" size={20} />, color: "bg-emerald-50 border-emerald-100" },
                        { title: "Pending Issues", value: "7", icon: <AlertTriangle className="text-red-600" size={20} />, color: "bg-red-50 border-red-100" },
                    ].map((card, index) => (
                        <div key={index} className={`${card.color} border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm font-medium text-slate-600">{card.title}</h3>
                                    <p className="text-2xl font-bold mt-1 text-slate-800">{card.value}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-white bg-opacity-60">
                                    {card.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Main Dashboard Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Activity and Performance */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-5 border border-blue-100">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-slate-800">Recent Activities</h2>
                            <button className="text-xs font-medium text-blue-700 hover:text-blue-900 flex items-center">
                                View All <ChevronRight size={14} className="ml-1" />
                            </button>
                        </div>
                        
                        <div className="space-y-3">
                            {recentActivities.map(activity => (
                                <div key={activity.id} className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        activity.type === 'registration' ? 'bg-green-100 text-green-600' : 
                                        activity.type === 'submission' ? 'bg-blue-100 text-blue-600' : 
                                        'bg-amber-100 text-amber-600'
                                    }`}>
                                        {activity.type === 'registration' ? <User size={18} /> : 
                                         activity.type === 'submission' ? <FileText size={18} /> : 
                                         <Calendar size={18} />}
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <h3 className="text-sm font-medium text-slate-800">{activity.title}</h3>
                                        <div className="flex items-center mt-1">
                                            <Clock size={12} className="text-slate-500" />
                                            <span className="text-xs text-slate-500 ml-1">{activity.time}</span>
                                        </div>
                                    </div>
                                    <button className="p-2 rounded-full hover:bg-slate-100 text-blue-700">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        {/* Department Performance */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-slate-800">Department Attendance</h2>
                                <button className="text-xs font-medium text-blue-700 hover:text-blue-900 flex items-center">
                                    Download Report <Download size={14} className="ml-1" />
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                {performanceData.map((dept, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-slate-700">{dept.department}</span>
                                            <span className="text-sm font-bold text-slate-800">{dept.attendance}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div 
                                                className={`${dept.color} h-2.5 rounded-full`} 
                                                style={{ width: `${dept.attendance}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Financial Summary */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-slate-800">Financial Summary</h2>
                                <div className="flex space-x-2">
                                    <button className="bg-slate-100 px-3 py-1 rounded text-xs font-medium text-slate-700">Monthly</button>
                                    <button className="bg-blue-600 px-3 py-1 rounded text-xs font-medium text-white">Quarterly</button>
                                    <button className="bg-slate-100 px-3 py-1 rounded text-xs font-medium text-slate-700">Yearly</button>
                                </div>
                            </div>
                            
                            <div className="h-64 bg-slate-50 flex items-center justify-center rounded-lg border border-dashed border-slate-300">
                                <div className="flex flex-col items-center text-slate-500">
                                    <BarChart size={48} className="mb-2 opacity-50" />
                                    <p className="text-sm">Financial chart visualization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Notifications */}
                        <div className="bg-white rounded-xl shadow-md p-5 border border-blue-100">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-slate-800">Notifications</h2>
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">7 New</span>
                            </div>
                            
                            <div className="space-y-3">
                                {notifications.map(notification => (
                                    <div key={notification.id} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-sm font-medium text-slate-800">{notification.title}</h3>
                                            {notification.priority === 'high' && (
                                                <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">Urgent</span>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-xs text-slate-500">{notification.date}</span>
                                            <button className="text-xs text-blue-700 hover:text-blue-900">View details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Pending Tasks */}
                        <div className="bg-white rounded-xl shadow-md p-5 border border-blue-100">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-slate-800">Pending Tasks</h2>
                                <button className="text-xs font-medium text-blue-700 hover:text-blue-900 flex items-center">
                                    View All <ChevronRight size={14} className="ml-1" />
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                {pendingTasks.map(task => (
                                    <div key={task.id} className={`p-3 rounded-lg border ${task.status === 'urgent' ? 'border-red-200 bg-red-50' : 'border-slate-100'} hover:shadow-sm transition-all`}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{task.category}</span>
                                            <span className={`text-xs ${task.status === 'urgent' ? 'text-red-600 font-medium' : 'text-slate-500'}`}>
                                                {task.count} {task.count === 1 ? 'item' : 'items'}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-medium text-slate-800 mt-2">{task.title}</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center">
                                                <div className={`w-6 h-6 rounded-full ${task.status === 'urgent' ? 'bg-red-200 text-red-700' : 'bg-amber-200 text-amber-700'} flex items-center justify-center`}>
                                                    <Clock size={12} />
                                                </div>
                                                <span className="text-xs text-slate-600 ml-1">
                                                    {task.status === 'urgent' ? 'Urgent' : 'Pending'}
                                                </span>
                                            </div>
                                            <button className="text-xs font-medium text-blue-700 hover:text-blue-900">Review</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Quick Access */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md p-5">
                            <h2 className="text-lg font-semibold text-white mb-3">Admin Tools</h2>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                                    <Users size={20} className="mb-1" />
                                    User Management
                                </button>
                                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                                    <Settings size={20} className="mb-1" />
                                    System Config
                                </button>
                                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                                    <Layers size={20} className="mb-1" />
                                    Content Manager
                                </button>
                                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                                    <FileText size={20} className="mb-1" />
                                    Reports
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;