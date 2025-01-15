import React, { useState, useRef } from 'react';
import { PDFViewer, Document, Page } from '@react-pdf-viewer/core';
import { PDFDocument } from 'pdf-lib';
import { Text, View, Image } from '@react-pdf/renderer';

const MyPdfViewer = (props) => {
  const [numPages, setNumPages] = useState(0);
  
  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = async () => {
    // Membuat PDF dari template
    const pdfDoc = await PDFDocument.create();

    // Menambahkan halaman ke PDF menggunakan data yang ada
    const pages = await Promise.all(
      props.datadata.map(async (data) => {
        const page = pdfDoc.addPage([595, 842]); // Ukuran A4
        const { height } = page.getSize();
        const fontSize = 12;

        // Menambahkan konten ke halaman sesuai dengan data
        page.drawText(`SURAT TANDA LULUS UJIAN DINAS`, { x: 50, y: height - 50, size: fontSize });
        page.drawText(`Nomor: ${data.nomor_ijazah}/UD/I/2024`, { x: 50, y: height - 80, size: fontSize });
        page.drawText(`Nama: ${data.nama_peserta}`, { x: 50, y: height - 110, size: fontSize });
        page.drawText(`NIP: ${data.nip}`, { x: 50, y: height - 140, size: fontSize });
        page.drawText(`Tempat, Tanggal Lahir: ${data.tempat_tanggal_lahir}`, { x: 50, y: height - 170, size: fontSize });
        page.drawText(`Pangkat/Golongan: ${data.pangkat} / ${data.golongan}`, { x: 50, y: height - 200, size: fontSize });
        // Tambahkan sisa teks dan format sesuai dengan template surat
        return page;
      })
    );

    // Pembagian PDF setiap 2 halaman per file
    const numGroups = Math.ceil(pages.length / 2);
    for (let i = 0; i < numGroups; i++) {
      const newPdf = await PDFDocument.create();
      
      const startPage = i * 2;
      const endPage = startPage + 2;

      for (let j = startPage; j < endPage && j < pages.length; j++) {
        const copiedPage = await newPdf.copyPages(pdfDoc, [j]);
        newPdf.addPage(copiedPage[0]);
      }

      // Menyimpan file PDF yang terpisah
      const pdfBytes = await newPdf.save();

      // Membuat URL untuk file dan memulai unduhan
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = `document_part_${i + 1}.pdf`;
      link.click();
    }
  };

  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <Document file={props.data} onLoadSuccess={handleDocumentLoadSuccess}>
          {props.datadata.map((data, index) => (
            <Page key={index} size="A4" style={{ padding: 20 }}>
              {/* Konten surat di dalam layout PDF */}
              <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>SURAT TANDA LULUS UJIAN DINAS</Text>
                <Text>Nomor: {data.nomor_ijazah}/UD/I/2024</Text>
                <Text>Nama: {data.nama_peserta}</Text>
                <Text>NIP: {data.nip}</Text>
                <Text>Tempat, Tanggal Lahir: {data.tempat_tanggal_lahir}</Text>
                <Text>Pangkat/Golongan: {data.pangkat} / {data.golongan}</Text>
                {/* Tambahkan bagian lain sesuai template surat */}
              </View>
            </Page>
          ))}
        </Document>
      </PDFViewer>

      <button onClick={handleDownload}>Unduh PDF Terpisah</button>
    </div>
  );
};

export default MyPdfViewer;
