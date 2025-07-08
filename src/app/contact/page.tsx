'use client';

import { useState } from 'react';

export default function Contact() {




  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 text-center mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>



        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Ways to Connect</h2>
          <div className="space-y-2 text-gray-600">
            <p>Email: cbirge@stanford.edu</p>
            <p>LinkedIn: linkedin.com/in/clairebirge</p>
            <p>GitHub: github.com/clairebirge</p>
          </div>
        </div>
      </div>
    </div>
  );
} 