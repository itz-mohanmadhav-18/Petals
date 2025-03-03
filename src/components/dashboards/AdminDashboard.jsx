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
  Star,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const Dashboard = () => {
  // Sample data
  const upcomingEvents = [
    { id: 1, title: "Science Project Submission", time: "Today, 2:00 PM", type: "assignment" },
    { id: 2, title: "Mathematics Class", time: "Tomorrow, 9:30 AM", type: "class" },
    { id: 3, title: "Art Exhibition", time: "Friday, 3:00 PM", type: "event" }
  ];
  
  const progressData = [
    { subject: "Mathematics", progress: 78, color: "bg-blue-500" },
    { subject: "Science", progress: 92, color: "bg-green-500" },
    { subject: "English", progress: 65, color: "bg-amber-500" },
    { subject: "History", progress: 81, color: "bg-purple-500" },
  ];
  
  const announcements = [
    { id: 1, title: "School holiday on March 15th", date: "Mar 1", priority: "normal" },
    { id: 2, title: "Annual Sports Day registration open", date: "Feb 28", priority: "high" },
    { id: 3, title: "Parent-Teacher meeting scheduled", date: "Feb 25", priority: "high" },
  ];
  
  const assignments = [
    { id: 1, subject: "Mathematics", title: "Quadratic Equations", dueDate: "Mar 5", status: "pending" },
    { id: 2, subject: "Science", title: "Lab Report: Photosynthesis", dueDate: "Mar 7", status: "pending" },
    { id: 3, subject: "English", title: "Essay on Modern Literature", dueDate: "Mar 10", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-brown-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-amber-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-brown-800">Welcome back, John!</h1>
              <p className="text-brown-600 mt-1">Here's what's happening with your academic journey today.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-800">
                    <Award size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-brown-600">Current GPA</p>
                    <p className="text-lg font-bold text-amber-800">3.8/4.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Upcoming Classes", value: "3", icon: <BookOpen className="text-blue-600" size={20} />, color: "bg-blue-50 border-blue-100" },
            { title: "Assignments Due", value: "2", icon: <FileText className="text-red-600" size={20} />, color: "bg-red-50 border-red-100" },
            { title: "New Announcements", value: "5", icon: <Bell className="text-green-600" size={20} />, color: "bg-green-50 border-green-100" },
            { title: "Study Groups", value: "2", icon: <Users className="text-purple-600" size={20} />, color: "bg-purple-50 border-purple-100" },
          ].map((card, index) => (
            <div key={index} className={`${card.color} border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-brown-600">{card.title}</h3>
                  <p className="text-2xl font-bold mt-1 text-brown-800">{card.value}</p>
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
          {/* Upcoming Events */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-5 border border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-brown-800">Upcoming Events</h2>
              <button className="text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center">
                View All <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
            
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    event.type === 'assignment' ? 'bg-red-100 text-red-600' : 
                    event.type === 'class' ? 'bg-blue-100 text-blue-600' : 
                    'bg-green-100 text-green-600'
                  }`}>
                    {event.type === 'assignment' ? <CheckSquare size={18} /> : 
                     event.type === 'class' ? <BookOpen size={18} /> : 
                     <Calendar size={18} />}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-sm font-medium text-brown-800">{event.title}</h3>
                    <div className="flex items-center mt-1">
                      <Clock size={12} className="text-brown-500" />
                      <span className="text-xs text-brown-500 ml-1">{event.time}</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-amber-100 text-amber-700">
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Academic Progress */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-brown-800">Academic Progress</h2>
                <button className="text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center">
                  View Report <Download size={14} className="ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {progressData.map((subject, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-brown-700">{subject.subject}</span>
                      <span className="text-sm font-bold text-brown-800">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${subject.color} h-2.5 rounded-full`} 
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-md p-5 border border-amber-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-brown-800">Announcements</h2>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">5 New</span>
              </div>
              
              <div className="space-y-3">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-b border-amber-100 last:border-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-brown-800">{announcement.title}</h3>
                      {announcement.priority === 'high' && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">Important</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-brown-500">{announcement.date}</span>
                      <button className="text-xs text-amber-700 hover:text-amber-900">Read more</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Assignments Due */}
            <div className="bg-white rounded-xl shadow-md p-5 border border-amber-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-brown-800">Assignments Due</h2>
                <button className="text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center">
                  View All <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              
              <div className="space-y-3">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="p-3 rounded-lg border border-amber-100 hover:bg-amber-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{assignment.subject}</span>
                      <span className="text-xs text-brown-500">Due: {assignment.dueDate}</span>
                    </div>
                    <h3 className="text-sm font-medium text-brown-800 mt-2">{assignment.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center text-amber-800">
                          <CheckSquare size={12} />
                        </div>
                        <span className="text-xs text-brown-600 ml-1">Not started</span>
                      </div>
                      <button className="text-xs font-medium text-amber-700 hover:text-amber-900">Start now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl shadow-md p-5">
              <h2 className="text-lg font-semibold text-white mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                  <Calendar size={20} className="mb-1" />
                  View Schedule
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                  <MessageSquare size={20} className="mb-1" />
                  Contact Teacher
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                  <FileText size={20} className="mb-1" />
                  View Reports
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-3 text-white text-sm font-medium flex flex-col items-center">
                  <Users size={20} className="mb-1" />
                  Study Groups
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;