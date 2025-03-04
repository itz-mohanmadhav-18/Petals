import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// GraphQL mutation
const ADD_STUDENT = gql`
  mutation addStudent($input: StudentInput!) {
    data: addStudent(input: $input) {
      _id
    }
  }
`;

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'male',
    contact: '',
    email: '',
    fatherName: '',
    fatherContact: '',
    fatherEmail: '',
    motherName: '',
    motherContact: '',
    address: '',
    previousSchool: '',
    admissionDate: '',
    className: '',
    classSection: '',
    aadharNumber: ''
  });

  const [errors, setErrors] = useState({});

  // Initialize the mutation
  const [addStudent, { loading }] = useMutation(ADD_STUDENT, {
    onCompleted: (data) => {
      // Handle successful addition
      alert('Student added successfully!');
      navigate('/dashboard/admin'); // Navigate back to admin dashboard
    },
    onError: (error) => {
      console.error('Error adding student:', error);
      alert('Failed to add student. Please try again.');
    }
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    const requiredFields = ['name', 'dob', 'gender', 'contact', 'email', 'className', 'classSection'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.fatherEmail && !emailRegex.test(formData.fatherEmail)) {
      newErrors.fatherEmail = 'Invalid email format';
    }
    
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (formData.contact && !phoneRegex.test(formData.contact)) {
      newErrors.contact = 'Phone number must be 10 digits';
    }
    if (formData.fatherContact && !phoneRegex.test(formData.fatherContact)) {
      newErrors.fatherContact = 'Phone number must be 10 digits';
    }
    if (formData.motherContact && !phoneRegex.test(formData.motherContact)) {
      newErrors.motherContact = 'Phone number must be 10 digits';
    }
    
    // Aadhar validation (12 digits)
    if (formData.aadharNumber && !/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be 12 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addStudent({
        variables: {
          input: formData
        }
      });
    } else {
      window.scrollTo(0, 0); // Scroll to top to show errors
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Student</h1>
      
      {Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 font-semibold">Please correct the following errors:</p>
          <ul className="list-disc pl-5 mt-2">
            {Object.entries(errors).map(([field, error]) => (
              <li key={field} className="text-red-600">{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Information */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">Student Information</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">
              Date of Birth*
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
              Contact Number*
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`w-full px-3 py-2 border ${errors.contact ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadharNumber">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              placeholder="12-digit Aadhar number"
              className={`w-full px-3 py-2 border ${errors.aadharNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.aadharNumber && <p className="text-red-500 text-sm mt-1">{errors.aadharNumber}</p>}
          </div>
          
          {/* Parent Information */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2 mt-4">Parent Information</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherName">
              Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherContact">
              Father's Contact
            </label>
            <input
              type="text"
              id="fatherContact"
              name="fatherContact"
              value={formData.fatherContact}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`w-full px-3 py-2 border ${errors.fatherContact ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.fatherContact && <p className="text-red-500 text-sm mt-1">{errors.fatherContact}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherEmail">
              Father's Email
            </label>
            <input
              type="email"
              id="fatherEmail"
              name="fatherEmail"
              value={formData.fatherEmail}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.fatherEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.fatherEmail && <p className="text-red-500 text-sm mt-1">{errors.fatherEmail}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="motherName">
              Mother's Name
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="motherContact">
              Mother's Contact
            </label>
            <input
              type="text"
              id="motherContact"
              name="motherContact"
              value={formData.motherContact}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`w-full px-3 py-2 border ${errors.motherContact ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.motherContact && <p className="text-red-500 text-sm mt-1">{errors.motherContact}</p>}
          </div>
          
          {/* Address */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          {/* Academic Information */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2 mt-4">Academic Information</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="previousSchool">
              Previous School
            </label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="admissionDate">
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="className">
              Class*
            </label>
            <select
              id="className"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.className ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select Class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              <option value="fifth">Fifth</option>
              <option value="sixth">Sixth</option>
              <option value="seventh">Seventh</option>
              <option value="eighth">Eighth</option>
              <option value="ninth">Ninth</option>
              <option value="tenth">Tenth</option>
              <option value="eleventh">Eleventh</option>
              <option value="twelfth">Twelfth</option>
            </select>
            {errors.className && <p className="text-red-500 text-sm mt-1">{errors.className}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="classSection">
              Section*
            </label>
            <select
              id="classSection"
              name="classSection"
              value={formData.classSection}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.classSection ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            {errors.classSection && <p className="text-red-500 text-sm mt-1">{errors.classSection}</p>}
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={() => navigate('/dashboard/admin')}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {loading ? 'Saving...' : 'Add Student'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;