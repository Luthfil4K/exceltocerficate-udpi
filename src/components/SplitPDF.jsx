import React, { useState } from "react";
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
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip"; // Import JSZip
import { Grid, Card, Typography, Button } from "@mui/material";

import { styles } from "../styles/stylePI";
import { sty } from "../styles/sty";
import { terbilang } from "../utils/terbilang";

const SplitPDF = (props) => {
  const [pdfData, setPdfData] = useState([]);

  console.log(props);

  const tertimbang = (nilai, bobot) => {
    return (parseFloat(nilai) * bobot).toFixed(2).replace(".", ",");
  };

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
            <Page size="A4" style={{ padding: 20 }}>
              <View style={sty.paperBg}>
                <View style={sty.boxIdentitas}>
                  <View style={sty.lampiranStlud}>
                    <Text style={sty.fontIdentitas}>Lampiran STLUD</Text>
                  </View>
                  <View style={[sty.nama, sty.formIdentitas]}>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>NAMA</Text>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      : {data.nama_peserta}
                    </Text>
                  </View>
                  <View style={[sty.nip, sty.formIdentitas]}>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>NIP</Text>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      : {data.nip}
                    </Text>
                  </View>
                  <View style={[sty.stlud, sty.formIdentitas]}>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      STLUD NO
                    </Text>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      : {data.nomor_ijazah}
                    </Text>
                  </View>
                  <View style={[sty.tingkat, sty.formIdentitas]}>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      TINGKAT
                    </Text>
                    <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                      : {data.pangkat}
                    </Text>
                  </View>
                </View>
                <View style={sty.boxTahun}>
                  <Text style={sty.fontIdentitas}>Tahun 2025</Text>
                </View>
                <View style={sty.boxNilai}>
                  <Text style={sty.fontNilai}>NILAI</Text>
                </View>
                <View style={sty.boxTable}>
                  <View style={sty.barisHeader}>
                    <View style={sty.kolNo}>
                      <Text style={sty.fontHeader}>NO</Text>
                    </View>
                    <View style={sty.kolMateri}>
                      <Text style={sty.fontHeader}>MATERI UJIAN DINAS</Text>
                    </View>
                    <View style={sty.kolNilai}>
                      <View style={sty.KolNilaiAtas}>
                        <Text style={sty.fontHeader}>NILAI</Text>
                      </View>
                      <View style={sty.kolNilaiBawah}>
                        <View style={sty.kolPresentasi}>
                          <Text style={sty.fontHeader}>PRESENTASI (NPR)</Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={sty.fontHeader}>TERTIMBANG (NT)</Text>
                        </View>
                      </View>
                    </View>
                    <View style={sty.kolTerbilang}>
                      <Text style={sty.fontHeader}>NILAI TERTIMBANG</Text>
                      <Text style={sty.fontHeader}>DENGAN HURUF</Text>
                    </View>
                  </View>
                  <View style={sty.barisSatu}>
                    <View style={[sty.kolNo, sty.needBB]}>
                      <Text style={sty.fontBaris}>1</Text>
                    </View>
                    <View style={sty.kelompokA}>
                      <View style={sty.a1}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            KELOMPOK A
                          </Text>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            a. Pancasila
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.pancasila}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.pancasila, 0.15)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.pancasila)}
                          </Text>
                        </View>
                      </View>
                      <View style={sty.barisStandard}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            b. UUD 1945
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.uud_1945}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.uud_1945, 0.15)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.uud_1945)}
                          </Text>
                        </View>
                      </View>
                      <View style={sty.barisStandard}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            C. Propenas
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.propenas}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.propenas, 0.15)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            Sembilan Puluh Koma Lima Nol
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={sty.barisDua}>
                    <View style={[sty.kolNo, sty.needBB]}>
                      <Text style={sty.fontBaris}>2</Text>
                    </View>
                    <View style={sty.kelompokA}>
                      <View style={sty.a1}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            KELOMPOK B
                          </Text>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            a. Peraturan Perundang-undangan{" "}
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            dibidang kepegawaian
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.pengetahuan_bidang_kepegawaian}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(
                              data.pengetahuan_bidang_kepegawaian,
                              0.1
                            )}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {tertimbang(data.pengetahuan_bidang_kepegawaian)}
                          </Text>
                        </View>
                      </View>
                      <View style={sty.barisStandard}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            b. KORPRI
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.korpri}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.korpri, 0.1)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.korpri)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={sty.barisTiga}>
                    <View style={[sty.kolNo, sty.needBB]}>
                      <Text style={sty.fontBaris}>3</Text>
                    </View>
                    <View style={sty.kelompokA}>
                      <View style={sty.a1}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            KELOMPOK C
                          </Text>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            Pegetahuan Perkantoran
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.pengetahuan_perkantoran}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.pengetahuan_perkantoran, 0.08)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.pengetahuan_perkantoran)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={sty.barisEmpat}>
                    <View style={[sty.kolNo, sty.needBB]}>
                      <Text style={sty.fontBaris}>4</Text>
                    </View>
                    <View style={sty.kelompokA}>
                      <View style={sty.d1}>
                        <View style={[sty.kolMateri, sty.needHeight]}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            KELOMPOK D
                          </Text>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            a. Tugas pokok, fungsi, struktur
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            organisasi dan tata kerja instansi
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            yang bersangkutan
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.organisasi}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.organisasi, 0.08)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.organisasi)}
                          </Text>
                        </View>
                      </View>
                      <View style={sty.d2}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            b. Pengetahuan mengenai substantive
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            instansi yang bersangkutan dan
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            pengetahuan lain yang ditentukan
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            oleh pimpinan instansi yang
                          </Text>
                          <Text style={[sty.fontBaris, sty.needMorePL]}>
                            {" "}
                            bersangkutan
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.substantive}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.substantive, 0.08)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.substantive)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={sty.barisLima}>
                    <View style={[sty.kolNo, sty.needBB]}>
                      <Text style={sty.fontBaris}>5</Text>
                    </View>
                    <View style={sty.kelompokA}>
                      <View style={sty.a1}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            KELOMPOK E
                          </Text>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            a. Bahasa Indonesia
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.bahasa_indonesia}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.bahasa_indonesia, 0.06)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.bahasa_indonesia)}
                          </Text>
                        </View>
                      </View>
                      <View style={sty.barisStandard}>
                        <View style={sty.kolMateri}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            b. Sejarah Indonesia
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {data.sejarah}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {tertimbang(data.sejarah, 0.05)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            {terbilang(data.sejarah)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={sty.barisJumlah}>
                    <View style={sty.kelJumlah}>
                      <View style={sty.barisStandard}>
                        <View style={sty.kolJumlah}>
                          <Text
                            style={[
                              sty.fontBaris,
                              sty.needMorePL,
                              sty.needBold,
                            ]}
                          >
                            JUMLAH
                          </Text>
                        </View>
                        <View style={sty.kolPresentasi}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {Number(data.bahasa_indonesia) +
                              Number(data.organisasi) +
                              Number(data.korpri) +
                              Number(data.pancasila) +
                              Number(data.pengetahuan_perkantoran) +
                              Number(data.pengetahuan_bidang_kepegawaian) +
                              Number(data.propenas) +
                              Number(data.sejarah) +
                              Number(data.uud_1945) +
                              Number(data.substantive)}
                          </Text>
                        </View>
                        <View style={sty.kolTertimbang}>
                          <Text style={[sty.fontBaris, sty.needPL]}>
                            {Number(data.bahasa_indonesia) +
                              Number(data.organisasi) +
                              Number(data.korpri) +
                              Number(data.pancasila) +
                              Number(data.pengetahuan_perkantoran) +
                              Number(data.pengetahuan_bidang_kepegawaian) +
                              Number(data.propenas) +
                              Number(data.sejarah) +
                              Number(data.uud_1945) +
                              Number(data.substantive)}
                          </Text>
                        </View>
                        <View style={sty.kolTerbilang}>
                          <Text style={sty.fontTerbilang}>
                            Sembilan Puluh Koma Lima Nol
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={sty.boxTtd}>
                  <View style={sty.boxTtd2}>
                    <View style={sty.jabatanTtd}>
                      <Text style={sty.fontTtd}>
                        a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                      </Text>
                      <Text style={sty.fontTtd}>
                        Kepala Biro Sumber Daya Manusia,{" "}
                      </Text>
                    </View>
                    <View style={sty.ttd}></View>
                    <View style={sty.jabatanTtd}>
                      <Text style={sty.fontTtd}>
                        Dr. Eni Lestariningsih, S.Si, M.A{" "}
                      </Text>
                      <Text style={sty.fontTtd}>NIP. 197003101994012001 </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Page>
          </>
        ))}
      </Document>
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
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = "split-pdfs.zip"; // Name of the ZIP file
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
                                : {data.pangkat} / {data.golongan}
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
                      <Page size="A4" style={{ padding: 20 }}>
                        <View style={sty.paperBg}>
                          <View style={sty.boxIdentitas}>
                            <View style={sty.lampiranStlud}>
                              <Text style={sty.fontIdentitas}>
                                Lampiran STLUD
                              </Text>
                            </View>
                            <View style={[sty.nama, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                NAMA
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nama_peserta}
                              </Text>
                            </View>
                            <View style={[sty.nip, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                NIP
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nip}
                              </Text>
                            </View>
                            <View style={[sty.stlud, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                STLUD NO
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nomor_ijazah}
                              </Text>
                            </View>
                            <View style={[sty.tingkat, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                TINGKAT
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.pangkat}
                              </Text>
                            </View>
                          </View>
                          <View style={sty.boxTahun}>
                            <Text style={sty.fontIdentitas}>Tahun 2025</Text>
                          </View>
                          <View style={sty.boxNilai}>
                            <Text style={sty.fontNilai}>NILAI</Text>
                          </View>
                          <View style={sty.boxTable}>
                            <View style={sty.barisHeader}>
                              <View style={sty.kolNo}>
                                <Text style={sty.fontHeader}>NO</Text>
                              </View>
                              <View style={sty.kolMateri}>
                                <Text style={sty.fontHeader}>
                                  MATERI UJIAN DINAS
                                </Text>
                              </View>
                              <View style={sty.kolNilai}>
                                <View style={sty.KolNilaiAtas}>
                                  <Text style={sty.fontHeader}>NILAI</Text>
                                </View>
                                <View style={sty.kolNilaiBawah}>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={sty.fontHeader}>
                                      PRESENTASI (NPR)
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={sty.fontHeader}>
                                      TERTIMBANG (NT)
                                    </Text>
                                  </View>
                                </View>
                              </View>
                              <View style={sty.kolTerbilang}>
                                <Text style={sty.fontHeader}>
                                  NILAI TERTIMBANG
                                </Text>
                                <Text style={sty.fontHeader}>DENGAN HURUF</Text>
                              </View>
                            </View>
                            <View style={sty.barisSatu}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>1</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK A
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Pancasila
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pancasila}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.pancasila, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.pancasila)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. UUD 1945
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.uud_1945}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.uud_1945, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.uud_1945)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      C. Propenas
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.propenas}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.propenas, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      Sembilan Puluh Koma Lima Nol
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisDua}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>2</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK B
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Peraturan Perundang-undangan{" "}
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      dibidang kepegawaian
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pengetahuan_bidang_kepegawaian}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(
                                        data.pengetahuan_bidang_kepegawaian,
                                        0.1
                                      )}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {tertimbang(
                                        data.pengetahuan_bidang_kepegawaian
                                      )}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. KORPRI
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.korpri}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.korpri, 0.1)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.korpri)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisTiga}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>3</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK C
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      Pegetahuan Perkantoran
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pengetahuan_perkantoran}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(
                                        data.pengetahuan_perkantoran,
                                        0.08
                                      )}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.pengetahuan_perkantoran)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisEmpat}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>4</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.d1}>
                                  <View style={[sty.kolMateri, sty.needHeight]}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK D
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Tugas pokok, fungsi, struktur
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      organisasi dan tata kerja instansi
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      yang bersangkutan
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.organisasi}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.organisasi, 0.08)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.organisasi)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.d2}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. Pengetahuan mengenai substantive
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      instansi yang bersangkutan dan
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      pengetahuan lain yang ditentukan
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      oleh pimpinan instansi yang
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      bersangkutan
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.substantive}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.substantive, 0.08)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.substantive)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisLima}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>5</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK E
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Bahasa Indonesia
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.bahasa_indonesia}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.bahasa_indonesia, 0.06)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.bahasa_indonesia)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. Sejarah Indonesia
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.sejarah}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.sejarah, 0.05)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.sejarah)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisJumlah}>
                              <View style={sty.kelJumlah}>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolJumlah}>
                                    <Text
                                      style={[
                                        sty.fontBaris,
                                        sty.needMorePL,
                                        sty.needBold,
                                      ]}
                                    >
                                      JUMLAH
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {Number(data.bahasa_indonesia) +
                                        Number(data.organisasi) +
                                        Number(data.korpri) +
                                        Number(data.pancasila) +
                                        Number(data.pengetahuan_perkantoran) +
                                        Number(
                                          data.pengetahuan_bidang_kepegawaian
                                        ) +
                                        Number(data.propenas) +
                                        Number(data.sejarah) +
                                        Number(data.uud_1945) +
                                        Number(data.substantive)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {Number(data.bahasa_indonesia) +
                                        Number(data.organisasi) +
                                        Number(data.korpri) +
                                        Number(data.pancasila) +
                                        Number(data.pengetahuan_perkantoran) +
                                        Number(
                                          data.pengetahuan_bidang_kepegawaian
                                        ) +
                                        Number(data.propenas) +
                                        Number(data.sejarah) +
                                        Number(data.uud_1945) +
                                        Number(data.substantive)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      Sembilan Puluh Koma Lima Nol
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={sty.boxTtd}>
                            <View style={sty.boxTtd2}>
                              <View style={sty.jabatanTtd}>
                                <Text style={sty.fontTtd}>
                                  a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                                </Text>
                                <Text style={sty.fontTtd}>
                                  Kepala Biro Sumber Daya Manusia,{" "}
                                </Text>
                              </View>
                              <View style={sty.ttd}></View>
                              <View style={sty.jabatanTtd}>
                                <Text style={sty.fontTtd}>
                                  Dr. Eni Lestariningsih, S.Si, M.A{" "}
                                </Text>
                                <Text style={sty.fontTtd}>
                                  NIP. 197003101994012001{" "}
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
                                : {data.pangkat} / {data.golongan}
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
                      <Page size="A4" style={{ padding: 20 }}>
                        <View style={sty.paperBg}>
                          <View style={sty.boxIdentitas}>
                            <View style={sty.lampiranStlud}>
                              <Text style={sty.fontIdentitas}>
                                Lampiran STLUD
                              </Text>
                            </View>
                            <View style={[sty.nama, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                NAMA
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nama_peserta}
                              </Text>
                            </View>
                            <View style={[sty.nip, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                NIP
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nip}
                              </Text>
                            </View>
                            <View style={[sty.stlud, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                STLUD NO
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.nomor_ijazah}
                              </Text>
                            </View>
                            <View style={[sty.tingkat, sty.formIdentitas]}>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                TINGKAT
                              </Text>
                              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                                : {data.pangkat}
                              </Text>
                            </View>
                          </View>
                          <View style={sty.boxTahun}>
                            <Text style={sty.fontIdentitas}>Tahun 2025</Text>
                          </View>
                          <View style={sty.boxNilai}>
                            <Text style={sty.fontNilai}>NILAI</Text>
                          </View>
                          <View style={sty.boxTable}>
                            <View style={sty.barisHeader}>
                              <View style={sty.kolNo}>
                                <Text style={sty.fontHeader}>NO</Text>
                              </View>
                              <View style={sty.kolMateri}>
                                <Text style={sty.fontHeader}>
                                  MATERI UJIAN DINAS
                                </Text>
                              </View>
                              <View style={sty.kolNilai}>
                                <View style={sty.KolNilaiAtas}>
                                  <Text style={sty.fontHeader}>NILAI</Text>
                                </View>
                                <View style={sty.kolNilaiBawah}>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={sty.fontHeader}>
                                      PRESENTASI (NPR)
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={sty.fontHeader}>
                                      TERTIMBANG (NT)
                                    </Text>
                                  </View>
                                </View>
                              </View>
                              <View style={sty.kolTerbilang}>
                                <Text style={sty.fontHeader}>
                                  NILAI TERTIMBANG
                                </Text>
                                <Text style={sty.fontHeader}>DENGAN HURUF</Text>
                              </View>
                            </View>
                            <View style={sty.barisSatu}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>1</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK A
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Pancasila
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pancasila}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.pancasila, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.pancasila)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. UUD 1945
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.uud_1945}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.uud_1945, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.uud_1945)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      C. Propenas
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.propenas}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.propenas, 0.15)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      Sembilan Puluh Koma Lima Nol
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisDua}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>2</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK B
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Peraturan Perundang-undangan{" "}
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      dibidang kepegawaian
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pengetahuan_bidang_kepegawaian}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(
                                        data.pengetahuan_bidang_kepegawaian,
                                        0.1
                                      )}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {tertimbang(
                                        data.pengetahuan_bidang_kepegawaian
                                      )}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. KORPRI
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.korpri}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.korpri, 0.1)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.korpri)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisTiga}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>3</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK C
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      Pegetahuan Perkantoran
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.pengetahuan_perkantoran}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(
                                        data.pengetahuan_perkantoran,
                                        0.08
                                      )}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.pengetahuan_perkantoran)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisEmpat}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>4</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.d1}>
                                  <View style={[sty.kolMateri, sty.needHeight]}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK D
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Tugas pokok, fungsi, struktur
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      organisasi dan tata kerja instansi
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      yang bersangkutan
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.organisasi}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.organisasi, 0.08)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.organisasi)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.d2}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. Pengetahuan mengenai substantive
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      instansi yang bersangkutan dan
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      pengetahuan lain yang ditentukan
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      oleh pimpinan instansi yang
                                    </Text>
                                    <Text
                                      style={[sty.fontBaris, sty.needMorePL]}
                                    >
                                      {" "}
                                      bersangkutan
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.substantive}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.substantive, 0.08)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.substantive)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisLima}>
                              <View style={[sty.kolNo, sty.needBB]}>
                                <Text style={sty.fontBaris}>5</Text>
                              </View>
                              <View style={sty.kelompokA}>
                                <View style={sty.a1}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      KELOMPOK E
                                    </Text>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      a. Bahasa Indonesia
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.bahasa_indonesia}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.bahasa_indonesia, 0.06)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.bahasa_indonesia)}
                                    </Text>
                                  </View>
                                </View>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolMateri}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      b. Sejarah Indonesia
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {data.sejarah}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {tertimbang(data.sejarah, 0.05)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      {terbilang(data.sejarah)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={sty.barisJumlah}>
                              <View style={sty.kelJumlah}>
                                <View style={sty.barisStandard}>
                                  <View style={sty.kolJumlah}>
                                    <Text
                                      style={[
                                        sty.fontBaris,
                                        sty.needMorePL,
                                        sty.needBold,
                                      ]}
                                    >
                                      JUMLAH
                                    </Text>
                                  </View>
                                  <View style={sty.kolPresentasi}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {Number(data.bahasa_indonesia) +
                                        Number(data.organisasi) +
                                        Number(data.korpri) +
                                        Number(data.pancasila) +
                                        Number(data.pengetahuan_perkantoran) +
                                        Number(
                                          data.pengetahuan_bidang_kepegawaian
                                        ) +
                                        Number(data.propenas) +
                                        Number(data.sejarah) +
                                        Number(data.uud_1945) +
                                        Number(data.substantive)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTertimbang}>
                                    <Text style={[sty.fontBaris, sty.needPL]}>
                                      {Number(data.bahasa_indonesia) +
                                        Number(data.organisasi) +
                                        Number(data.korpri) +
                                        Number(data.pancasila) +
                                        Number(data.pengetahuan_perkantoran) +
                                        Number(
                                          data.pengetahuan_bidang_kepegawaian
                                        ) +
                                        Number(data.propenas) +
                                        Number(data.sejarah) +
                                        Number(data.uud_1945) +
                                        Number(data.substantive)}
                                    </Text>
                                  </View>
                                  <View style={sty.kolTerbilang}>
                                    <Text style={sty.fontTerbilang}>
                                      Sembilan Puluh Koma Lima Nol
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={sty.boxTtd}>
                            <View style={sty.boxTtd2}>
                              <View style={sty.jabatanTtd}>
                                <Text style={sty.fontTtd}>
                                  a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                                </Text>
                                <Text style={sty.fontTtd}>
                                  Kepala Biro Sumber Daya Manusia,{" "}
                                </Text>
                              </View>
                              <View style={sty.ttd}></View>
                              <View style={sty.jabatanTtd}>
                                <Text style={sty.fontTtd}>
                                  Dr. Eni Lestariningsih, S.Si, M.A{" "}
                                </Text>
                                <Text style={sty.fontTtd}>
                                  NIP. 197003101994012001{" "}
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
