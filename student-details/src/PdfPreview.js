import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const PdfPreview = () => {
  return (
    <PDFViewer
      document={{
        url: 'https://s3.us-east-2.amazonaws.com/resources.seeradio.com/pdf/Infographic.pdf',
      }}
    />
  )
}

export default PdfPreview;