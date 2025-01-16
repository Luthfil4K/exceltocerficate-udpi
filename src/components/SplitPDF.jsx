import React, { useState } from 'react';
import {
  Document,
  Page,
  Text,
  PDFViewer,
  pdf,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip'; // Import JSZip
import { Grid, Card, Typography, Button } from '@mui/material';
import { styles } from '../styles/stylePI';

const SplitPDF = (props) => {
  const [pdfData, setPdfData] = useState([]);

  console.log(props)
  console.log(props)
  console.log(props)
  // Function to generate and split the PDF
  const handleSplitPdf = async () => {
    // Generate the PDF as a Blob using react-pdf
    const blob = await pdf(
      <Document id="pdfDocument">
        {props.datadata.map((data) => (
          <>
            {" "}
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
                    Nomor : {data.nomor_ijazah}/UD/I/2024
                  </Text>
                </View>
                <View style={styles.isi}>
                  <Text style={styles.isi.isiSurat}>
                    Badan Pusat Statistik berdasarkan Peraturan Pemerintah Nomor
                    11 Tahun 2017 dan ketentuan-ketentuan pelaksanaannya
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
                      : {data.nama_peserta}
                    </Text>
                    <Text style={styles.keteranganIsi.formatIdentitas}>
                      : {data.nip}
                    </Text>
                    <Text style={styles.keteranganIsi.formatIdentitas}>
                      : {data.tempat_tanggal_lahir}, {data.tempat_tanggal_lahir}
                    </Text>
                    <Text style={styles.keteranganIsi.formatIdentitas}>
                      : {data.pangkat} / {data.golongan}
                    </Text>
                    <Text style={styles.keteranganIsi.formatIdentitas}>
                      : {data.unit_eselon_II}
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
                        Jakarta, {data.tempat_tanggal_lahir}
                      </Text>
                      <Text style={styles.fotoTtd.isiKanan.normalText}>
                        a.n. KEPALA BADAN PUSAT STATISTIK,
                      </Text>
                      <Text style={styles.fotoTtd.isiKanan.normalText}>
                        Kepala Biro Sumber Daya Manusia,
                      </Text>
                    </View>
                    <View style={styles.fotoTtd.isiKanan.ttd}></View>
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
          </>
        ))}
      </Document>
      //   <Document>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 1...</Text>
      //     </Page>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 2...</Text>
      //     </Page>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 3...</Text>
      //     </Page>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 4...</Text>
      //     </Page>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 5...</Text>
      //     </Page>
      //     <Page size="A4" style={{ padding: 10 }}>
      //       <Text>Content for page 6...</Text>
      //     </Page>
      //   </Document>
    ).toBlob();

    // Convert the Blob to an ArrayBuffer to use with pdf-lib
    const arrayBuffer = await blob.arrayBuffer();

    // Load the PDF document using pdf-lib
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const newPdfDocs = [];

    // Split the PDF into two-page PDFs
    for (let i = 0; i < pdfDoc.getPageCount(); i += 2) {
      const newPdf = await PDFDocument.create();
      const pagesToAdd = [];

      // Add two pages at a time
      if (i < pdfDoc.getPageCount()) {
        const [page] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(page);
      }
      if (i + 1 < pdfDoc.getPageCount()) {
        const [page] = await newPdf.copyPages(pdfDoc, [i + 1]);
        newPdf.addPage(page);
      }

      // Save the new PDF and store it
      const pdfBytes = await newPdf.save();
      newPdfDocs.push(pdfBytes);
    }

    // Update the state with the split PDF data
    setPdfData(newPdfDocs);
  };

  // Function to trigger the download of all split PDFs in a ZIP file
  const downloadAllPdfInZip = async () => {
    const zip = new JSZip();

    // Add each split PDF to the ZIP file
    pdfData.forEach((pdfBytes, index) => {
      zip.file(`split-pdf-${index + 1}.pdf`, pdfBytes);
    });

    // Generate the ZIP file as a Blob and download it
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'split-pdfs.zip'; // Name of the ZIP file
    link.click(); // Trigger the download
  };

  return (
    <div>
      {/* Button to trigger PDF splitting */}
      <Button onClick={handleSplitPdf} variant="contained" color="primary">
        Generate and Split PDF
      </Button>

      {/* Button to trigger download of all split PDFs in a ZIP file */}
      {pdfData.length > 0 && (
        <Button
          onClick={downloadAllPdfInZip}
          variant="contained"
          color="secondary"
        >
          Download All Split PDFs as ZIP
        </Button>
      )}

      {/* Displaying the generated PDF in the viewer */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item xs={12}>
          <Card sx={{ width: 1000, height: 700 }}>
            {pdfData.length > 0 ? (
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document id="pdfDocument">
                  {props.datadata.map((data) => (
                    <>
                      {" "}
                      <Page size="A4" style={styles.page}>
                        <Image
                          src="bingkaiGaruda-01-01.png" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                          style={styles.backgroundImage}
                        />
                        <View style={styles.layout}>
                          <View style={styles.kop}>
                            <Text style={styles.kop.bps}>
                              BADAN PUSAT STATISTIK
                            </Text>
                            <Text style={styles.kop.namaSurat}>
                              SURAT TANDA LULUS UJIAN DINAS
                            </Text>
                            <Text style={styles.kop.nomorSurat}>
                              Nomor : {data.nomor_ijazah}/UD/I/2024
                            </Text>
                          </View>
                          <View style={styles.isi}>
                            <Text style={styles.isi.isiSurat}>
                              Badan Pusat Statistik berdasarkan Peraturan
                              Pemerintah Nomor 11 Tahun 2017 dan
                              ketentuan-ketentuan pelaksanaannya menyatakan
                              bahwa :
                            </Text>
                          </View>
                          <View style={styles.keteranganIsi}>
                            <View style={styles.keteranganIsi.isiKiri}>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Nama
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                NIP
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Tempat, Tanggal Lahir
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Pangkat/Golongan
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Unit Kerja
                              </Text>
                            </View>
                            <View style={styles.keteranganIsi.isiKanan}>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.nama_peserta}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.nip}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.tempat_tanggal_lahir},{" "}
                                {data.tempat_tanggal_lahir}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                :{" "}
                                {data.tempat_tanggal_lahir /
                                  data.tempat_tanggal_lahir}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.unit_eselon_II}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.keteranganLulus}>
                            <Text style={styles.keteranganLulus.lulusText}>
                              LULUS
                            </Text>
                          </View>
                          <View style={styles.penutup}>
                            <Text style={styles.penutup.penutupText}>
                              Ujian Dinas Tingkat I Badan Pusat Statistik tahun
                              2024.
                            </Text>
                          </View>
                          <View style={styles.fotoTtd}>
                            <View style={styles.fotoTtd.isiKiri}>
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
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Jakarta, {data.tempat_tanggal_lahir}
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  a.n. KEPALA BADAN PUSAT STATISTIK,
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Kepala Biro Sumber Daya Manusia,
                                </Text>
                              </View>
                              <View style={styles.fotoTtd.isiKanan.ttd}></View>
                              <View style={styles.fotoTtd.isiKanan.namaTtd}>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Dr. Eni Lestariningsih, S.Si, M.A.
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  NIP . 197003101994012001
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Page>
                    </>
                  ))}
                </Document>
                {/* <Document>
                  {pdfData.map((pdfBytes, index) => (
                    <Page key={index} size="A4" style={{ padding: 10 }}>
                      <Text>{`Content for page ${index + 1}...`}</Text>
                    </Page>
                  ))}
                </Document> */}
              </PDFViewer>
            ) : (
              //   <Typography variant="h6" align="center">
              //     No PDF Generated Yet
              //   </Typography>
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document id="pdfDocument">
                  {props.datadata.map((data) => (
                    <>
                      {" "}
                      <Page size="A4" style={styles.page}>
                        <Image
                          src="bingkaiGaruda-01-01.png" // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                          style={styles.backgroundImage}
                        />
                        <View style={styles.layout}>
                          <View style={styles.kop}>
                            <Text style={styles.kop.bps}>
                              BADAN PUSAT STATISTIK
                            </Text>
                            <Text style={styles.kop.namaSurat}>
                              SURAT TANDA LULUS UJIAN DINAS
                            </Text>
                            <Text style={styles.kop.nomorSurat}>
                              Nomor : {data.nomor_ijazah}/UD/I/2024
                            </Text>
                          </View>
                          <View style={styles.isi}>
                            <Text style={styles.isi.isiSurat}>
                              Badan Pusat Statistik berdasarkan Peraturan
                              Pemerintah Nomor 11 Tahun 2017 dan
                              ketentuan-ketentuan pelaksanaannya menyatakan
                              bahwa :
                            </Text>
                          </View>
                          <View style={styles.keteranganIsi}>
                            <View style={styles.keteranganIsi.isiKiri}>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Nama
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                NIP
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Tempat, Tanggal Lahir
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Pangkat/Golongan
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                Unit Kerja
                              </Text>
                            </View>
                            <View style={styles.keteranganIsi.isiKanan}>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.nama_peserta}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.nip}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.tempat_tanggal_lahir},{" "}
                                {data.tempat_tanggal_lahir}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                :{" "}
                                {data.pangkat} / {data.golongan}
                              </Text>
                              <Text
                                style={styles.keteranganIsi.formatIdentitas}
                              >
                                : {data.unit_eselon_II}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.keteranganLulus}>
                            <Text style={styles.keteranganLulus.lulusText}>
                              LULUS
                            </Text>
                          </View>
                          <View style={styles.penutup}>
                            <Text style={styles.penutup.penutupText}>
                              Ujian Dinas Tingkat I Badan Pusat Statistik tahun
                              2024.
                            </Text>
                          </View>
                          <View style={styles.fotoTtd}>
                            <View style={styles.fotoTtd.isiKiri}>
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
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Jakarta, {data.tempat_tanggal_lahir}
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  a.n. KEPALA BADAN PUSAT STATISTIK,
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Kepala Biro Sumber Daya Manusia,
                                </Text>
                              </View>
                              <View style={styles.fotoTtd.isiKanan.ttd}></View>
                              <View style={styles.fotoTtd.isiKanan.namaTtd}>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  Dr. Eni Lestariningsih, S.Si, M.A.
                                </Text>
                                <Text
                                  style={styles.fotoTtd.isiKanan.normalText}
                                >
                                  NIP . 197003101994012001
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Page>
                    </>
                  ))}
                </Document>
              </PDFViewer>
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SplitPDF;
