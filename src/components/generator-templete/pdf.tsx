import React from 'react';

export default function AssignmentCoverPage() {
  return (
    <div className="mx-auto max-w-2xl bg-white p-8 font-serif">
      {/* Logo and University Name */}
      <div className="flex flex-col items-center mb-8">
        <img 
          src="../../../public/ugv_logo.jpg" 
          alt="University of Global Village Logo" 
          className="w-20 h-20 mb-2"
        />
        <h1 className="text-lg font-bold text-center mt-2">UNIVERSITY OF GLOBAL VILLAGE (UGV), BARISHAL</h1>
      </div>

      {/* Assignment Details */}
      <div className="mb-8">
        <div className="flex mb-2">
          <div className="w-40 font-bold">Assignment No</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-40 font-bold">Assignment Name</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-40 font-bold">Course Title</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-40 font-bold">Course Code</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-40 font-bold">Session</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Submitted To Box */}
      <div className="border border-black p-4 mb-6">
        <div className="font-bold mb-2">Submitted To,</div>
        <div className="flex mb-2">
          <div className="w-32 font-bold">Name</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-32 font-bold">Designation</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-32 font-bold">Department</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Submitted By Box */}
      <div className="border border-black p-4 ml-auto w-80">
        <div className="font-bold mb-2">Submitted By,</div>
        <div className="flex mb-2">
          <div className="w-28 font-bold">Name</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-28 font-bold">Department</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-28 font-bold">Student ID</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-28 font-bold">Group</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
        <div className="flex mb-2">
          <div className="w-28 font-bold">Section</div>
          <div className="w-4 text-center">:</div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}