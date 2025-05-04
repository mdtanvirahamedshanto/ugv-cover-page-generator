"use client"
import React, { useState, ChangeEvent } from 'react';
import { jsPDF } from 'jspdf';
import { Save } from 'lucide-react';

// Define the types for our form data
interface FormData {
  assignmentNo: string;
  assignmentName: string;
  courseTitle: string;
  courseCode: string;
  session: string;
  submittedToName: string;
  submittedToDesignation: string;
  submittedToDepartment: string;
  studentName: string;
  studentDepartment: string;
  studentID: string;
  studentGroup: string;
  studentSection: string;
}

export default function PdfGeneratorOne(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    assignmentNo: '',
    assignmentName: '',
    courseTitle: '',
    courseCode: '',
    session: '',
    submittedToName: '',
    submittedToDesignation: '',
    submittedToDepartment: '',
    studentName: '',
    studentDepartment: '',
    studentID: '',
    studentGroup: '',
    studentSection: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generatePDF = (): void => {
    const doc = new jsPDF();
    
    // Set font
    doc.setFont('helvetica', 'normal');
    
    // Add UGV logo (simulated with text since we can't use external images)
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text("UNIVERSITY OF GLOBAL VILLAGE (UGV), BARISHAL", 105, 20, { align: 'center' });
    
    // Add header line
    doc.setDrawColor(210, 30, 30);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    
    // Add form fields
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    let y = 35;
    
    // Assignment details
    doc.text(`Assignment No       : ${formData.assignmentNo}`, 20, y); y += 10;
    doc.text(`Assignment Name : ${formData.assignmentName}`, 20, y); y += 10;
    doc.text(`Course Title         : ${formData.courseTitle}`, 20, y); y += 10;
    doc.text(`Course Code        : ${formData.courseCode}`, 20, y); y += 10;
    doc.text(`Session                : ${formData.session}`, 20, y); y += 20;
    
    // Submitted To box
    doc.rect(20, y, 170, 30);
    doc.text("Submitted To,", 22, y + 6);
    doc.text(`Name              : ${formData.submittedToName}`, 22, y + 14);
    doc.text(`Designation    : ${formData.submittedToDesignation}`, 22, y + 22);
    doc.text(`Department    : ${formData.submittedToDepartment}`, 22, y + 30);
    
    y += 40;
    
    // Submitted By box
    doc.rect(110, y, 80, 50);
    doc.text("Submitted By,", 112, y + 6);
    doc.text(`Name          : ${formData.studentName}`, 112, y + 14);
    doc.text(`Department : ${formData.studentDepartment}`, 112, y + 22);
    doc.text(`Student ID  : ${formData.studentID}`, 112, y + 30);
    doc.text(`Group        : ${formData.studentGroup}`, 112, y + 38);
    doc.text(`Section      : ${formData.studentSection}`, 112, y + 46);
    
    // Save the PDF
    doc.save('UGV_Assignment.pdf');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">UGV Assignment PDF Generator</h1>
        <p className="text-gray-600">Fill in the details to generate your assignment cover page</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Assignment Details</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Assignment No</label>
              <input
                type="text"
                name="assignmentNo"
                value={formData.assignmentNo}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Assignment Name</label>
              <input
                type="text"
                name="assignmentName"
                value={formData.assignmentName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Title</label>
              <input
                type="text"
                name="courseTitle"
                value={formData.courseTitle}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Code</label>
              <input
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Session</label>
              <input
                type="text"
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Submission Information</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Submitted To (Name)</label>
              <input
                type="text"
                name="submittedToName"
                value={formData.submittedToName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                type="text"
                name="submittedToDesignation"
                value={formData.submittedToDesignation}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="submittedToDepartment"
                value={formData.submittedToDepartment}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Student Information</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="studentDepartment"
                value={formData.studentDepartment}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Group</label>
              <input
                type="text"
                name="studentGroup"
                value={formData.studentGroup}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Section</label>
              <input
                type="text"
                name="studentSection"
                value={formData.studentSection}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded shadow flex items-center justify-center">
          <div className="w-full">
            <div className="text-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Generate PDF</h2>
              <p className="text-sm text-gray-500">Click the button below to create your PDF</p>
            </div>
            <button
              onClick={generatePDF}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
            >
              <Save className="mr-2" size={20} />
              Generate PDF
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-md font-medium text-blue-800 mb-2">How to use:</h3>
        <ol className="list-decimal pl-5 text-sm text-blue-700 space-y-1">
          <li>Fill in all the required fields in the form above</li>
          <li>Click the &quot;Generate PDF&quot; button</li>
          <li>Your PDF will download automatically</li>
          <li>The PDF will match the UGV assignment cover page format</li>
        </ol>
      </div>
    </div>
  );
}