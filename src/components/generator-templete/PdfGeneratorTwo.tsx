/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { ChangeEvent, JSX, useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, pdf } from '@react-pdf/renderer';


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

// Register fonts for @react-pdf/renderer
// import { Font } from '@react-pdf/renderer';

// Font.register({
//   family: 'Times New Roman',
//   fonts: [
//     {
//       src: '/fonts/times-new-roman.ttf',
//       fontWeight: 'normal'
//     },
//     {
//       src: '/fonts/times-new-roman-bold.ttf',
//       fontWeight: 'bold'
//     }
//   ]
// });



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 60,
    // fontFamily: 'Times New Roman',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  universityName: {
    fontSize: 18,
    fontWeight: '',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: 160,
    fontWeight: 'semibold',
  },
  labelTwo: {
    width: 125,
    fontWeight: 'semibold',
  },
  colon: {
    width: 10,
    textAlign: 'center',
  },
  value: {
    flex: 1,
  },
  box: {
    border: '1 solid black',
    padding: 10,
    marginBottom: 15,
  },
  boxTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  submittedByBox: {
    border: '1 solid black',
    padding: 10,
    width: '70%',
    alignSelf: 'flex-end',
  },
});

export default function PdfGeneratorTwo(): JSX.Element {
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

  const AssginmentPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image
            src="/ugv_logo.jpg"
            style={styles.logo}
          />
          <Text style={styles.universityName}>UNIVERSITY OF GLOBAL VILLAGE (UGV), BARISHAL</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Assignment No</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.assignmentNo}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Assignment Name</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.assignmentName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Course Title</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.courseTitle}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Course Code</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.courseCode}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Session</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.session}</Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Submitted To,</Text>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Name</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.submittedToName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Designation</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.submittedToDesignation}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Department</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.submittedToDepartment}</Text>
          </View>
        </View>

        <View style={styles.submittedByBox}>
          <Text style={styles.boxTitle}>Submitted By,</Text>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Name</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.studentName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Department</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.studentDepartment}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Student ID</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.studentID}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Group</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.studentGroup}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelTwo}>Section</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>{formData.studentSection}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
// Ensure PDFViewer is only rendered on client side
const PDFPreview = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<AssginmentPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    generatePdf();
  }, []);

console.log("pdf url", pdfUrl);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {!isMobile && (
        <PDFViewer style={{ width: '100%', height: '90vh' }}>
          <AssginmentPDF />
        </PDFViewer>
      )}

      {/* {isMobile && pdfUrl && (
        <iframe
          src={pdfUrl}
          title="PDF"
          style={{ width: '100%', height: '90vh', border: 'none' }}
        />
      )} */}

      {pdfUrl && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a
            href={pdfUrl}
            download="document.pdf"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4f46e5',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">UGV Assignment Cover Page - Template 2</h1>
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
              <h2 className="text-lg font-semibold text-gray-700">Preview PDF</h2>
              <p className="text-sm text-gray-500">Preview your PDF below</p>
            </div>
            <div className="w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden">
              <PDFPreview />
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-md font-medium text-blue-800 mb-2">How to use:</h3>
        <ol className="list-decimal pl-5 text-sm text-blue-700 space-y-1">
          <li>Fill in all the required fields in the form</li>
          <li>Preview your PDF in the viewer</li>
          <li>Use browser&apos;s print function to save or print the PDF</li>
          <li>The PDF matches the UGV assignment cover page format</li>
        </ol>
      </div>
    </div>
  );
}