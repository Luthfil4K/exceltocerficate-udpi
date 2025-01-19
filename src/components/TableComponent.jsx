import React from "react";
import { useTable } from "react-table";
import { jsPDF } from "jspdf";
import { Grid, Card, Paper, Typography, Button } from "@mui/material";
import "jspdf-autotable";
import html2canvas from "html2canvas";

import { StyleSheet } from "@react-pdf/renderer";

const TableComponent = () => {
  const pdfRef2 = React.useRef();

  const tableStyles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      fontFamily: "Helvetica",
    },
    section: {
      marginBottom: "20px",
    },
    table: {
      display: "table",
      width: "100%",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "black",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    tableHeader: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      border: "1px solid black", // Garis pada header
      borderBottom: "none", // Menghilangkan garis bawah pada header
    },
    tableCell: {
      textAlign: "left",
      paddingLeft: "10px",
      border: "1px solid black",
    },

    tableCellKelompok: {
      borderLeft: "1px solid black",
      borderLeftColor: "black",
      paddingLeft: "10px",
    },

    cellNilai: {
      height: "70px",
      border: "1px solid black",
      borderColor: "black",
      textAlign: "center",
      borderBottomColor: "black",
    },
    tableHeaderNoBottomBorder: {
      height: "70px",
      borderBottom: "none",
      borderLeft: "1px solid black",
      borderLeftColor: "black",
      textAlign: "center",
    },
    cellnoHeight: {
      borderBottom: "1px solid black",
      height: "40px",
      borderLeft: "1px solid black",
      borderLeftColor: "black",
      borderBottomColor: "black",
    },
    noKolom: {
      border: "1px solid black",
      borderColor: "black",
      textAlign: "center",
    },
    tableCellD: {
      paddingLeft: 10,
      borderTop: "1px solid black",
      borderLeft: "1px solid black",
    },
  });

  const handleUnduhUndangan = async () => {
    const input2 = pdfRef2.current;
    const scale = 2; // Meningkatkan resolusi canvas

    try {
      const canvas2 = await html2canvas(input2, { scale });
      const imgData2 = canvas2.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth2 = canvas2.width / scale;
      const imgHeight2 = canvas2.height / scale;
      const ratio2 = Math.min(pdfWidth / imgWidth2, pdfHeight / imgHeight2);
      const imgX2 = (pdfWidth - imgWidth2 * ratio2) / 2;
      const imgY2 = 10;

      pdf.addImage(
        imgData2,
        "PNG",
        imgX2,
        imgY2,
        imgWidth2 * ratio2,
        imgHeight2 * ratio2
      );

      pdf.save(`Undangan Ho'oh.pdf`);
    } catch (error) {
      console.error("Error while processing:", error);
    } finally {
      console.log("success download");
    }
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          paddingTop: 10,
          height: 300,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Atur shadow dan blur di sini
        }}>
        <Grid container sx={{ height: 800 }}>
          <Grid item xs={12}>
            <Grid ref={pdfRef2} container sx={{ height: 1000 }}>
              <Grid item xs={10}>
                <Grid container>
                  <Grid sx={{ height: 100 }} item xs={12}>
                    <Grid container>
                      <Grid sx={{ height: 5 }} item xs={12}></Grid>
                      <Grid sx={{ height: 15 }} item xs={1}></Grid>
                      <Grid
                        sx={{ height: 2, backgroundColor: "black" }}
                        item
                        xs={11}></Grid>
                      <Grid sx={{ height: 100 }} item xs={12}>
                        <Grid container>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={2}>
                            <Typography color={"black"} variant={"body2"}>
                              Nama
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              NIP
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              STLUD No.
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              Tingkat
                            </Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <Typography color={"black"} variant={"body2"}>
                              : Contoh hanya contoh
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              : Contoh hanya contoh
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              : Contoh hanya contoh
                            </Typography>
                            <Typography color={"black"} variant={"body2"}>
                              : Contoh hanya contoh
                            </Typography>
                          </Grid>
                          <Grid item xs={1}></Grid>
                          <Grid mt={10} item xs={8}>
                            <Typography
                              variant="body1"
                              sx={{
                                marginBottom: 3.5,
                                color: "black",
                                fontWeight: 900,
                              }}>
                              Daftar Peserta Rapat
                            </Typography>
                            <div style={tableStyles.page}>
                              <h2>Tabel Nilai Siswa</h2>
                              <div style={tableStyles.section}>
                                <table style={tableStyles.table}>
                                  <thead>
                                    <tr>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2">
                                        NO
                                      </th>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2">
                                        MATERI UJIAN DINAS
                                      </th>
                                      <th
                                        style={tableStyles.cellNilai}
                                        colSpan="2">
                                        NILAI
                                      </th>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2">
                                        NILAI TERTIMBANG DENGAN HURUF
                                      </th>
                                    </tr>
                                    <tr>
                                      <th style={tableStyles.cellnoHeight}>
                                        PRESENTASI (NPR)
                                      </th>
                                      <th style={tableStyles.cellnoHeight}>
                                        TERTIMBANG (NT)
                                      </th>
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
                                      <td
                                        style={tableStyles.tableCell}
                                        rowSpan="4">
                                        1
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        KELOMPOK A
                                      </td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCellKelompok}>
                                        a. Pancasila
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        80
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        88
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        B
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}>
                                        b. UUD 1945
                                      </td>
                                      <td style={tableStyles.tableCell}>85</td>
                                      <td style={tableStyles.tableCell}>90</td>
                                      <td style={tableStyles.tableCell}>A</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}>
                                        c. Propenas
                                      </td>
                                      <td style={tableStyles.tableCell}>85</td>
                                      <td style={tableStyles.tableCell}>90</td>
                                      <td style={tableStyles.tableCell}>A</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.tableCell}
                                        rowSpan="3">
                                        2
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        KELOMPOK B
                                      </td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCellKelompok}>
                                        a. Peraturan Perundang-undangan dibidang
                                        kepegawaian
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        80
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        88
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        B
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}>
                                        b. KORPRI
                                      </td>
                                      <td style={tableStyles.tableCell}>85</td>
                                      <td style={tableStyles.tableCell}>90</td>
                                      <td style={tableStyles.tableCell}>A</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.tableCell}
                                        rowSpan="2">
                                        3
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        KELOMPOK C
                                      </td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCellKelompok}>
                                        Pengetahuan Perkantoran
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        80
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        88
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        B
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.tableCell}
                                        rowSpan="3">
                                        4
                                      </td>
                                      <td style={tableStyles.tableCellD}>
                                        KELOMPOK D
                                      </td>
                                      <td style={tableStyles.tableCellD}></td>
                                      <td style={tableStyles.tableCellD}></td>
                                      <td style={tableStyles.tableCellD}></td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCellKelompok}>
                                        a. Tugas pokok, fungsi, struktur
                                        organisasi dan tata kerja instansi yang
                                        bersangkutan
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        80
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        88
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        B
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}>
                                        b. Pengetahuan mengenai substantive
                                        instansi yang bersangkutan dan
                                        pengetahuan lain yang ditentukan oleh
                                        pimpinan instansi yang bersangkutan
                                      </td>
                                      <td style={tableStyles.tableCell}>80</td>
                                      <td style={tableStyles.tableCell}>88</td>
                                      <td style={tableStyles.tableCell}>B</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.tableCell}
                                        rowSpan="3">
                                        5
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        KELOMPOK E
                                      </td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                      <td
                                        style={
                                          tableStyles.tableCellKelompok
                                        }></td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCellKelompok}>
                                        a. Bahasa Indonesia
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        80
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        88
                                      </td>
                                      <td style={tableStyles.tableCellKelompok}>
                                        B
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}>
                                        b. Sejarah Indonesia
                                      </td>
                                      <td style={tableStyles.tableCell}>85</td>
                                      <td style={tableStyles.tableCell}>90</td>
                                      <td style={tableStyles.tableCell}>A</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.tableCell}></td>
                                      <td style={tableStyles.tableCell}>
                                        Jumlah
                                      </td>
                                      <td style={tableStyles.tableCell}>85</td>
                                      <td style={tableStyles.tableCell}>90</td>
                                      <td style={tableStyles.tableCell}>A</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* <Grid sx={{ height: 150 }} item xs={12} bgcolor={'success.dark'}></Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Button
        sx={{ width: 160 }}
        onClick={handleUnduhUndangan}
        mt={4}
        size="small"
        variant="contained">
        Unduh undangan
      </Button>
    </>
  );
};

export default TableComponent;
