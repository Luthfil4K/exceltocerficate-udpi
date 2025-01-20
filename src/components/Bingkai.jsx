import { useState } from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import FontRobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import FontRobotoItalic from "../assets/fonts/Roboto/Roboto-Italic.ttf";
import FontRobotoBoldItalic from "../assets/fonts/Roboto/Roboto-BoldItalic.ttf";
import FontRobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import { PDFDocument } from 'pdf-lib';
import { styles } from '../styles/stylePI';

import html2pdf from "html2pdf.js";

// Font.register({ family: 'Open Sans', src: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap' });

Font.register({
  family: "Roboto", // Nama font keluarga
  fonts: [
    {
      src: FontRobotoRegular,
    },
    {
      src: FontRobotoBoldItalic,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    {
      src: FontRobotoItalic,
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: FontRobotoBold,
      fontWeight: "bold",
    },
  ],
});



const table2 = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    margin: 20,
    backgroundColor: "#f4f4f9",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "white",
    borderColor:'white',
    border: '1px solid #ddd',  
  },

  td: {
    padding: "12px",
    textAlign: "left",
    border: "1px solid #ddd",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    border: "1px solid #ddd",
  },

  th: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
});

 
const tableStyles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: '20px',
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#ddd',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ddd',  // Garis pada header
    borderBottom: 'none',  // Menghilangkan garis bawah pada header
  },
  tableCell: {
    textAlign: 'left',
    paddingLeft: '10px',
    border: '1px solid #ddd', 

  },

  tableCellKelompok:{
    borderLeft:'1px solid #ddd',
    borderLeftColor:'white',
    paddingLeft: '10px',
  },

  cellNilai:{
    height:"70px",
    border:'1px solid #ddd',
    borderColor:'white',
    textAlign:'center',
    borderBottomColor:'white',
  },
  tableHeaderNoBottomBorder: {
    height:"70px",
    borderBottom:'none',
    borderLeft:'1px solid #ddd',
    borderLeftColor:'white',
    textAlign:'center',
  },
  cellnoHeight: {
    borderBottom:'1px solid #ddd',
    height:"40px",
    borderLeft:'1px solid #ddd',
    borderLeftColor:'white',
    borderBottomColor:'white',
  },
  noKolom:{
    border:'1px solid #ddd',
    borderColor:'white',
    textAlign:'center',
  },
  tableCellD:{
    paddingLeft:10,
    borderTop:'1px solid #ddd',
    borderLeft:'1px solid #ddd'
  }
});

const Bingkai = (props) => {
  console.log(props)
  console.log(props)

  const handleDownload = () => {
    setTimeout(() => {
      const element = document.getElementById("content"); // ID dari elemen yang ingin di-convert

      // Periksa apakah elemen ditemukan
      if (element) {
        console.log("Element found", element);
      } else {
        console.log("Element not found");
      }

      const options = {
        margin: 0.5, // Margin halaman
        filename: "file-converted.pdf", // Nama file output PDF
        image: { type: "jpeg", quality: 0.98 }, // Mengonversi gambar dalam format JPEG
        html2canvas: { scale: 2 }, // Skala render canvas
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }, // Menetapkan format A4
      };

      // Menggunakan html2pdf untuk menghasilkan PDF
      html2pdf().from(element).set(options).save();
    }, 1000); // Penundaan 100ms
  };

  const [pdfData, setPdfData] = useState([]);

  // Method to generate and split the PDF
  const handleSplitPdf = async () => {
    // Generate PDF as a blob from React-PDF
    const blob = await pdfDocumentToBlob();
    const arrayBuffer = await blob.arrayBuffer();

    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const newPdfDocs = [];

    // Split the document into two-page PDFs
    for (let i = 0; i < pdfDoc.getPageCount(); i += 2) {
      const newPdf = await PDFDocument.create();
      const pagesToAdd = [];

      // Add pages in pairs (two pages at a time)
      if (i < pdfDoc.getPageCount()) {
        pagesToAdd.push(await newPdf.copyPages(pdfDoc, [i]));
      }
      if (i + 1 < pdfDoc.getPageCount()) {
        pagesToAdd.push(await newPdf.copyPages(pdfDoc, [i + 1]));
      }

      // Add pages to the new document
      pagesToAdd.forEach((page) => {
        newPdf.addPage(page);
      });

      // Save the newly created PDF
      const pdfBytes = await newPdf.save();
      newPdfDocs.push(pdfBytes);
    }

    // Store the split PDFs in state for download
    setPdfData(newPdfDocs);
  };

  // Helper function to render React PDF document into a Blob
  const pdfDocumentToBlob = async () => {
    return new Promise((resolve, reject) => {
      const blob = new Blob([document.getElementById("pdfDocument").innerHTML], {
        type: 'application/pdf',
      });
      resolve(blob);
    });
  };

  // Function to download a generated PDF
  const downloadPdf = (pdfBytes, index) => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `split-pdf-${index + 1}.pdf`;
    link.click();
  };


  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid
        size={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ height: 700, width: 1000 }}>
          
        </Card>
      </Grid>
      <Typography>asdasd </Typography>
      <button onClick={handleSplitPdf}>Split PDF</button>
      <div>
        {pdfData.map((pdfBytes, index) => (
          <button key={index} onClick={() => downloadPdf(pdfBytes, index)}>
            Download PDF {index + 1}
          </button>
        ))}
      </div>
     
      {/* <h2>Tabel Nilai Siswa</h2>
      <div style={tableStyles.page}>
        <h2>Tabel Nilai Siswa</h2>
        <div style={tableStyles.section}>
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  NO
                </th>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  MATERI UJIAN DINAS
                </th>
                <th style={tableStyles.cellNilai} colSpan="2">
                  NILAI
                </th>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  NILAI TERTIMBANG DENGAN HURUF
                </th>
              </tr>
              <tr>
                
                <th style={tableStyles.cellnoHeight}>PRESENTASI (NPR)</th>
                <th style={tableStyles.cellnoHeight}>TERTIMBANG (NT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableStyles.noKolom}>(1)</td>
                <td style={tableStyles.noKolom}>(2)</td>
                <td style={tableStyles.noKolom}>(3)</td>
                <td style={tableStyles.noKolom}>(4)</td>
                <td style={tableStyles.noKolom}>(5)</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="4">
                  1
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK A</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>a. Pancasila</td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. UUD 1945</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>c. Propenas</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  2
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK B</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Peraturan Perundang-undangan dibidang kepegawaian
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. KORPRI</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="2">
                  3
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK C</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  Pengetahuan Perkantoran
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  4
                </td>
                <td style={tableStyles.tableCellD}>KELOMPOK D</td>
                <td style={tableStyles.tableCellD}></td>
                <td style={tableStyles.tableCellD}></td>
                <td style={tableStyles.tableCellD}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Tugas pokok, fungsi, struktur organisasi dan tata kerja
                  instansi yang bersangkutan
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>
                  b. Pengetahuan mengenai substantive instansi yang bersangkutan
                  dan pengetahuan lain yang ditentukan oleh pimpinan instansi
                  yang bersangkutan
                </td>
                <td style={tableStyles.tableCell}>80</td>
                <td style={tableStyles.tableCell}>88</td>
                <td style={tableStyles.tableCell}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  5
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK E</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Bahasa Indonesia
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. Sejarah Indonesia</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}></td>
                <td style={tableStyles.tableCell}>Jumlah</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </Grid>
  );
};

export default Bingkai;