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
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

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

const styles = StyleSheet.create({
  // fontFamily:'Roboto'

  page: {
    position: "relative", // Membuat elemen menjadi relatif agar gambar bisa ditempatkan di atasnya
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute", // Menempatkan gambar di belakang semua elemen lainnya
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    zIndex: 10, // Menjaga proporsi gambar agar menutupi seluruh halaman
  },
  layout: {
    paddingTop: 220,
    paddingHorizontal: 100,
    flexGrow: 1,
  },
  kop: {
    width: "100%",
    height: 60,
    alignItems: "center",
    marginBottom: 10,
    bps: {
      fontSize: 12,
      marginBottom: 10,
      fontWeight: "bold",
      fontStyle: "italic",
      fontFamily: "Roboto",
    },
    namaSurat: {
      fontSize: 12,
      marginBottom: 10,
      fontWeight: "bold",
      // fontStyle: 'italic',
      fontFamily: "Roboto",
    },
    nomorSurat: {
      fontSize: 12,
    },
  },
  isi: {
    width: "100%",
    height: 40,
    marginBottom: 20,
    isiSurat: {
      fontSize: 12,
    },
  },
  keteranganIsi: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    isiKiri: {
      width: "35%",
      height: 100,
    },
    isiKanan: {
      width: "66%",
      height: 100,
    },
    formatIdentitas: {
      marginBottom: 4,
      fontSize: 12,
    },
  },
  keteranganLulus: {
    width: "100%",
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    lulusText: {
      fontSize: 20,
      fontWeight: "bold",
      // fontStyle: 'italic',
      fontFamily: "Roboto",
    },
  },
  penutup: {
    width: "100%",
    height: 30,
    marginBottom: 20,
    penutupText: {
      fontSize: 12,
    },
  },
  fotoTtd: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    isiKiri: {
      paddingLeft: 50,
      width: "36%",
      height: 120,
      layoutFoto: {
        width: 90,
        height: 120,
        border: "3px black",
      },
    },
    stempel: {
      marginLeft: 120,
      position: "absolute",
      justifyContent: "center",
      marginTop: 10,
      alignItems: "center",
      layoutFoto: {
        width: 100,
        height: 100,
      },
    },
    ttd: {
      justifyContent: "center",
      marginLeft: 180,
      position: "absolute",
      alignItems: "center",
      layoutFoto: {
        width: 100,
        height: 100,
      },
    },
    isiKanan: {
      width: "80%",
      height: 120,
      alamat: {
        alignItems: "center",
        height: 50,
      },
      ttd: {
        height: 60,
        layoutFoto: {
          width: 90,
          height: 90,
        },
      },
      namaTtd: {
        height: 30,
        alignItems: "center",
        layoutFoto: {
          width: 90,
          height: 90,
        },
      },
      normalText: {
        fontSize: 12,
      },
    },
  },
  normalText: {
    fontSize: 11,
  },
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
    padding: '10px',
    border: '1px solid #ddd',  // Garis antar cell
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
    verticalAlign: 'bottom',
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
    borderLeft:'1px solid #ddd',
    borderColor:'white',
    textAlign:'center',
  }
});

const Bingkai = (props) => {
  // const [data,setData] = useState(props.map(a=>({
  //   // nomorIjazah:a.nomorIjazah,
  //   // nama:a.nama,
  //   // nip:a.nip,
  //   // tempatLahir:a.tempatLahir,
  //   // tanggalLahir :a.tanggalLahir,
  //   // pangkat:a.pangkat,
  //   // golongan:a.golongan,
  //   // unitKerja:a.unitKerja,
  //   // unitKerja:a.unitKerja,
  //   // linkFoto:a.linkFoto,
  //   // tanggalTtd:a.tanggalTtd,

  // })))
  const [data, setData] = useState({
    nomorIjazah: "a.nomorIjazah",
    nama: "a.nama",
    nip: "a.nip",
    tempatLahir: "a.tempatLahir",
    tanggalLahir: "a.tanggalLahir",
    pangkat: "a.pangkat",
    golongan: "a.golongan",
    unitKerja: "a.unitKerja",
    unitKerja: "a.unitKerja",
    linkFoto: "a.linkFoto",
    tanggalTtd: "a.tanggalTtd",
  });

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
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Document>
              <Page size="A4" style={styles.page}>
                <Image
                  src="bingkaiGaruda-01-01.png" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                  style={styles.backgroundImage}
                />
                <View style={styles.layout}>
                  <View style={styles.kop}>
                    <Text style={styles.kop.bps}>BADAN PUSAT STATISTIK</Text>
                    <Text style={styles.kop.namaSurat}>
                      SURAT TANDA LULUS UJIAN DINAS
                    </Text>
                    <Text style={styles.kop.nomorSurat}>
                      Nomor : 531250/UD/I/2024
                    </Text>
                  </View>
                  <View style={styles.isi}>
                    <Text style={styles.isi.isiSurat}>
                      Badan Pusat Statistik berdasarkan Peraturan Pemerintah
                      Nomor 11 Tahun 2017 dan ketentuan-ketentuan pelaksanaannya
                      menyatakan bahwa :
                    </Text>
                  </View>
                  <View style={styles.keteranganIsi}>
                    <View style={styles.keteranganIsi.isiKiri}>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        Nama
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        NIP
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        Tempat, Tanggal Lahir
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        Pangkat/Golongan
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        Unit Kerja
                      </Text>
                    </View>
                    <View style={styles.keteranganIsi.isiKanan}>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : {data.nomorIjazah}
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : {data.nip}
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : {data.tempatLahir}, {data.tanggalLahir}
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : {data.pangkat / data.golongan}
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : {data.unitKerja}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.keteranganLulus}>
                    <Text style={styles.keteranganLulus.lulusText}>LULUS</Text>
                  </View>
                  <View style={styles.penutup}>
                    <Text style={styles.penutup.penutupText}>
                      Ujian Dinas Tingkat I Badan Pusat Statistik tahun 2024.
                    </Text>
                  </View>
                  <View style={styles.fotoTtd}>
                    <View style={styles.fotoTtd.isiKiri}>
                      {/* <View style={styles.fotoTtd.isiKiri.layoutFoto}></View> */}
                      <Image
                        src="Foto_Tukimin - ariv ahmad97.jpeg" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                        // src=`${data.linkFoto}` // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                        style={styles.fotoTtd.isiKiri.layoutFoto}
                      />
                    </View>
                    <View style={styles.fotoTtd.stempel}>
                      <Image
                        src="STEMPEL-BPSpng.png" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                        style={styles.fotoTtd.stempel.layoutFoto}
                      />
                    </View>
                    <View style={styles.fotoTtd.ttd}>
                      <Image
                        src="tanda tangan png.png" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                        style={styles.fotoTtd.ttd.layoutFoto}
                      />
                    </View>
                    <View style={styles.fotoTtd.isiKanan}>
                      <View style={styles.fotoTtd.isiKanan.alamat}>
                        <Text style={styles.fotoTtd.isiKanan.normalText}>
                          Jakarta, {data.tanggalTtd}
                        </Text>
                        <Text style={styles.fotoTtd.isiKanan.normalText}>
                          a.n. KEPALA BADAN PUSAT STATISTIK,
                        </Text>
                        <Text style={styles.fotoTtd.isiKanan.normalText}>
                          Kepala Biro Sumber Daya Manusia,
                        </Text>
                      </View>
                      <View style={styles.fotoTtd.isiKanan.ttd}>
                        {/* <Text style={styles.fotoTtd.isiKanan.normalText}>Jakarta, 10 Agustus 2024</Text>   */}
                      </View>
                      <View style={styles.fotoTtd.isiKanan.namaTtd}>
                        <Text style={styles.fotoTtd.isiKanan.normalText}>
                          Dr. Eni Lestariningsih, S.Si, M.A.
                        </Text>
                        <Text style={styles.fotoTtd.isiKanan.normalText}>
                          NIP . 197003101994012001
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </Card>
      </Grid>

      {/* <div id="content" style={{ padding: "10px", backgroundColor:'f0f0f0',color:'black' }}>
        <h1 style={{ color: 'black' }}>Hello PDF</h1>
        <p style={{ color: 'black' }}>This content will appear in the PDF.</p>
        <div style={styles.layout}>
          <div style={styles.kop}>
            <p style={styles.kop.bps}>BADAN PUSAT STATISTIK</p>
            <p style={styles.kop.namaSurat}>SURAT TANDA LULUS UJIAN DINAS</p>
            <p style={styles.kop.nomorSurat}>Nomor : 531250/UD/I/2024</p>
          </div>
          <div style={styles.isi}>
            <p style={styles.isi.isiSurat}>
              Badan Pusat Statistik berdasarkan Peraturan Pemerintah Nomor 11
              Tahun 2017 dan ketentuan-ketentuan pelaksanaannya menyatakan bahwa
              :
            </p>
          </div>
          <div style={styles.keteranganIsi}>
            <div style={styles.keteranganIsi.isiKiri}>
              <p style={styles.keteranganIsi.formatIdentitas}>Nama</p>
              <p style={styles.keteranganIsi.formatIdentitas}>NIP</p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                Tempat, Tanggal Lahir
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                Pangkat/Golongan
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>Unit Kerja</p>
            </div>
            <div style={styles.keteranganIsi.isiKanan}>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.nomorIjazah}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>: {data.nip}</p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.tempatLahir}, {data.tanggalLahir}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.pangkat / data.golongan}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.unitKerja}
              </p>
            </div>
          </div>
          <div style={styles.keteranganLulus}>
            <p style={styles.keteranganLulus.lulusp}>LULUS</p>
          </div>
          <div style={styles.penutup}>
            <p style={styles.penutup.penutupp}>
              Ujian Dinas Tingkat I Badan Pusat Statistik tahun 2024.
            </p>
          </div>
   
        </div>
      </div> */}

      {/* <button onClick={handleDownload}>unduh disiini</button> */}


      <h2>Tabel Nilai Siswa</h2>
      <div style={tableStyles.page}>
        <h2>Tabel Nilai Siswa</h2>
        <div style={tableStyles.section}>
        <table style={tableStyles.table}>
          <thead>
            <tr>
              <th style={ tableStyles.tableHeaderNoBottomBorder}colSpan="1">NO</th>
              <th style={ tableStyles.tableHeaderNoBottomBorder }>
                MATERI UJIAN DINAS
              </th>
              <th style={ tableStyles.cellNilai } colSpan="2">
                NILAI
              </th>
              <th style={ tableStyles.tableHeaderNoBottomBorder }colSpan="2">
                NILAI TERTIMBANG DENGAN HURUF
              </th>
            </tr>
            <tr>
              <th style={tableStyles.cellnoHeight }></th>
              <th style={tableStyles.cellnoHeight}></th>
              <th style={tableStyles.cellnoHeight}>PRESENTASI (NPR)</th>
              <th style={tableStyles.cellnoHeight}>TERTIMBANG (NT)</th>
              <th style={tableStyles.cellnoHeight}></th>
            </tr>
          </thead>
          <tbody>
            {/* Baris pertama dengan NO=1 */}
            <tr>
              <td style={tableStyles.noKolom}>(1)</td>
              <td style={tableStyles.noKolom}>(2)</td>
              <td style={tableStyles.noKolom}>(3)</td>
              <td style={tableStyles.noKolom}>(4)</td>
              <td style={tableStyles.noKolom}>(5)</td>
            </tr>
            <tr>
              <td style={tableStyles.tableCell} rowSpan="3">
                1
              </td>
              <td style={tableStyles.tableCell}>Kelompok A</td>
              <td style={tableStyles.tableCell}></td>
              <td style={tableStyles.tableCell}></td>
              <td style={tableStyles.tableCell}></td>
            </tr>
            <tr>
              <td style={tableStyles.tableCell}>Siti</td>
              <td style={tableStyles.tableCell}>80</td>
              <td style={tableStyles.tableCell}>88</td>
              <td style={tableStyles.tableCell}>B</td>
            </tr>
            <tr>
              <td style={tableStyles.tableCell}>Budi</td>
              <td style={tableStyles.tableCell}>85</td>
              <td style={tableStyles.tableCell}>90</td>
              <td style={tableStyles.tableCell}>A</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

    </Grid>
  );
};

export default Bingkai;
