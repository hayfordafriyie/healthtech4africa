import React, { useState } from 'react';

const NLPTool = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState([]);

  const processText = () => {
    // Dummy NLP processing: just simulating extracting keywords/diseases from text
    const dummyKeywords = ['malaria', 'pneumonia', 'nutrition'];
    const foundKeywords = dummyKeywords.filter((keyword) => text.toLowerCase().includes(keyword));
    setKeywords(foundKeywords);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">NLP Health Text Analyzer</h3>
      <p className="text-gray-700 mb-4">Enter a health report to analyze the key diseases or health conditions mentioned.</p>

      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter health report text..."
          className="p-2 border border-gray-300 rounded w-full h-32"
        ></textarea>
      </div>

      <button
        onClick={processText}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-4"
      >
        Process Text
      </button>

      {keywords.length > 0 && (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <h3 className="text-xl">Found Keywords</h3>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NLPTool;
