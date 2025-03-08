import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';

const CREATE_CLASS = gql`
  mutation CreateClass($input: CreateClassInput!) {
    createClass(input: $input) {
      _id
      schoolID
      classTeacherID
      subjects
      studentsCount
    }
  }
`;

function AddClass() {
  const [formData, setFormData] = useState({
    className: '',
    classSection: '',
    schoolID: '',
    classTeacherID: '',
    subjectTeachers: [],
    enrolledStudents: [],
    subjects: []
  });
  
  const [currentSubject, setCurrentSubject] = useState('');
  const [currentTeacherID, setCurrentTeacherID] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [createClass, { loading }] = useMutation(CREATE_CLASS, {
    onCompleted: (data) => {
      setMessage('Class created successfully!');
      setFormData({
        className: '',
        classSection: '',
        schoolID: '',
        classTeacherID: '',
        subjectTeachers: [],
        enrolledStudents: [],
        subjects: []
      });
    },
    onError: (error) => {
      setError(error.message || 'Failed to create class');
    }
  });

  const classOptions = [
    'nursery', 'lkg', 'ukg', 'first', 'second', 'third', 'fourth', 'fifth',
    'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ];

  const sectionOptions = ['A', 'B', 'C', 'D', 'E'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addSubjectTeacher = () => {
    if (currentSubject && currentTeacherID) {
      setFormData({
        ...formData,
        subjectTeachers: [...formData.subjectTeachers, { 
          Subject: currentSubject, 
          Teacher: currentTeacherID 
        }]
      });
      setCurrentSubject('');
      setCurrentTeacherID('');
    }
  };

  const removeSubjectTeacher = (index) => {
    const updatedSubjectTeachers = [...formData.subjectTeachers];
    updatedSubjectTeachers.splice(index, 1);
    setFormData({
      ...formData,
      subjectTeachers: updatedSubjectTeachers
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    try {
      // Fix: Always send empty arrays instead of null for array fields
      await createClass({ 
        variables: { 
          input: {
            ...formData,
            // Always provide arrays, even if empty
            enrolledStudents: formData.enrolledStudents.length > 0 ? formData.enrolledStudents : [],
            subjectTeachers: formData.subjectTeachers.length > 0 ? formData.subjectTeachers : [],
            subjects: formData.subjects.length > 0 ? formData.subjects : []
          } 
        } 
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubjectAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, e.target.value]
      });
      e.target.value = '';
    }
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects.splice(index, 1);
    setFormData({
      ...formData,
      subjects: updatedSubjects
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b pb-2">Add New Class</h2>
      
      {message && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
          {message}
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">Class Name:</label>
            <select 
              name="className" 
              value={formData.className} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Class</option>
              {classOptions.map(option => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">Section:</label>
            <select 
              name="classSection" 
              value={formData.classSection} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Section</option>
              {sectionOptions.map(section => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">School ID:</label>
            <input 
              type="text" 
              name="schoolID" 
              value={formData.schoolID} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">Class Teacher ID:</label>
            <input 
              type="text" 
              name="classTeacherID" 
              value={formData.classTeacherID} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Optional"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty if no class teacher is assigned yet</p>
          </div>
        </div>
        
        <div className="form-group bg-amber-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800 mb-3">Subject Teachers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <input 
              type="text" 
              placeholder="Subject" 
              value={currentSubject}
              onChange={(e) => setCurrentSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input 
              type="text" 
              placeholder="Teacher ID" 
              value={currentTeacherID}
              onChange={(e) => setCurrentTeacherID(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button 
              type="button" 
              onClick={addSubjectTeacher}
              className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition duration-200"
              disabled={!currentSubject || !currentTeacherID}
            >
              Add Teacher
            </button>
          </div>
          
          {formData.subjectTeachers.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.subjectTeachers.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                  <span className="font-medium">{item.Subject}: <span className="text-gray-600">{item.Teacher}</span></span>
                  <button 
                    type="button" 
                    onClick={() => removeSubjectTeacher(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="form-group bg-amber-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800 mb-3">Subjects</h3>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Press Enter to add subject" 
              onKeyPress={handleSubjectAdd}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <p className="text-xs text-gray-500 mt-1">Press Enter after typing each subject</p>
          </div>
          
          {formData.subjects.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {formData.subjects.map((subject, index) => (
                <div key={index} className="bg-white px-3 py-2 rounded-md shadow-sm flex items-center">
                  <span className="mr-2">{subject}</span>
                  <button 
                    type="button" 
                    onClick={() => removeSubject(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition duration-200 flex items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : 'Create Class'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClass;

