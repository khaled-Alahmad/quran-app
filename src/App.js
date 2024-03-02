import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// تعيين مسار workerSrc إلى ملف الـ worker المناسب
import aa from './quran.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 2, 1));

  const goToNextPage = () =>
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 2, numPages));

  // تأكد من أن المسار إلى ملف PDF صحيح ومتوفر
  // إذا كان ملف PDF في المجلد العام, يمكنك استخدام المسار المباشر إليه
  const pdfFile = '/quran.pdf'; // تحديث المسار وفقًا لموقع ملف PDF في مشروعك

  return (
    <div>
      

      <Document
        file={aa}
        onLoadSuccess={onDocumentLoadSuccess}
        // options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
      >
        <p className='ssss'>
        <Page pageNumber={pageNumber} />
        <Page pageNumber={pageNumber+1} />
        </p>
      </Document>
      <div className='btnr'>

        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
        <p >
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default App;
