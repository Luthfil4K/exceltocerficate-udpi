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
      padding: "10px",
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
      borderSpacing:0,
      marginBottom: "20px",
    },
    tableHeader: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      border: "1px solid black", // Garis pada header
      borderBottom: "none", // Menghilangkan garis bawah pada header
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    tableCell: {
      textAlign: "left",
      paddingLeft: "10px",
      // borderStyle: "solid",
      // borderWidth: "1px",
      // borderColor: "black",
      borderLeft: "1px solid black",
      // borderBottom:"1px solid black",
      borderTop: "1px solid black",
      borderCollapse: "collapse",
      borderSpacing:0,

      paddingBottom: "5px",
    },

    tableCellKelompok: {
      borderLeft: "1px solid black",
      borderLeftColor: "black",
      paddingLeft: "10px",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },

    cellNilai: {
      height: "70px",
      border: "1px solid black",
      borderColor: "black",
      textAlign: "center",
      borderBottomColor: "black",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    tableHeaderNoBottomBorder: {
      height: "70px",
      borderBottom: "none",
      borderLeft: "1px solid black",
      borderLeftColor: "black",
      textAlign: "center",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    cellnoHeight: {
      borderBottom: "1px solid black",
      height: "40px",
      borderLeft: "1px solid black",
      borderCollapse: "collapse",
      borderSpacing:0,
      borderLeftColor: "black",
      borderBottomColor: "black",
      paddingBottom: "5px",
    },
    noKolom: {
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      borderRight: "1px solid black",
      borderColor: "black",
      textAlign: "center",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    tableCellD: {
      paddingLeft: 10,
      borderTop: "1px solid black",
      borderLeft: "1px solid black",
      borderCollapse: "collapse",
      borderSpacing:0,
      paddingBottom: "5px",
    },
    judulKelompokLeft: {
      borderTop: "1px solid black",
      borderCollapse: "collapse",
      borderSpacing:0,
      textAlign:'left',
    },

    judulKelompok: {
      borderTop: "1px solid black",
      borderLeft: "1px solid black",
      borderCollapse: "collapse",
      borderSpacing:0,
      textAlign:'left',
    },

    noKolomJudul: {
      border: "1px solid black",
      borderBottom: "none",
      borderCollapse: "collapse",
      textAlign:"center",
      borderSpacing:0,
    },

    materiUD: {
      borderTop: "1px solid black",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
      textAlign:'left'
    },
    materiUDTop: {
      textAlign:'left',
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    materiUDBottom: {
      borderCollapse: "collapse",
      borderSpacing:0,
      borderBottom: "1px solid black",
      borderTop: "1px solid black",
      textAlign:'left',
    },
    fullborder: {
      border: "1px solid black",
      borderLeft:"none",
      paddingBottom: "5px",
      textAlign: "center",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    fullBorder: {
      border: "1px solid black",
      paddingBottom: "5px",
      textAlign: "center",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    fullBorder: {
      borderLeft: "1px solid black",
      borderTop: "none",
      paddingBottom: "5px",
      textAlign: "center",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    fullBorder2: {
      textAlign:'left',
      borderLeft: "1px solid black",
      borderTop: "none",
      paddingBottom: "5px",
      borderCollapse: "collapse",
      borderSpacing:0,
    },
    jumlah: {
      borderLeft: "1px solid black",
      textAlign: "center",
      paddingBottom: "5px",
      borderCollapse:"collapse",
      borderSpacing:0,
      borderSpacing:0,
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
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          paddingTop: 10,
          height: 300,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Atur shadow dan blur di sini
        }}
      >
        <Grid container sx={{ height: 800 }}>
          <Grid item xs={12}>
            <Grid
              ref={pdfRef2}
              container
              sx={{ height: 1000, backgroundColor: "gray" }}
            >
              <Grid item xs={12}>
                <Grid container>
                  <Grid sx={{ height: 100 }} item xs={12}>
                    <Grid container>
                      <Grid sx={{ height: 5 }} item xs={12}></Grid>
                      <Grid sx={{ height: 15 }} item xs={1}></Grid>
                      <Grid
                        sx={{ height: 2, backgroundColor: "black" }}
                        item
                        xs={11}
                      ></Grid>
                      <Grid item xs={12}>
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
                          {/* 12 */}
                          <Grid item xs={1}></Grid>
                          <Grid
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              textAlign: "center",
                              backgroundColor: "darkGray",
                            }}
                            mt={5}
                            item
                            xs={10}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                marginBottom: 0.5,
                                color: "black",
                                fontWeight: 900,
                                fontSize: 25,
                              }}
                            >
                              NILAI
                            </Typography>
                            <div style={tableStyles.page}>
                              <div style={tableStyles.section}>
                                <table style={tableStyles.table}>
                                  <thead>
                                    <tr>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2"
                                      >
                                        NO
                                      </th>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2"
                                      >
                                        MATERI UJIAN DINAS
                                      </th>
                                      <th
                                        style={tableStyles.cellNilai}
                                        colSpan="2"
                                      >
                                        NILAI
                                      </th>
                                      <th
                                        style={
                                          tableStyles.tableHeaderNoBottomBorder
                                        }
                                        rowspan="2"
                                      >
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
                                      <td style={tableStyles.noKolomJudul}>
                                        (1)
                                      </td>
                                      <td style={tableStyles.noKolomJudul}>
                                        (2)
                                      </td>
                                      <td style={tableStyles.noKolomJudul}>
                                        (3)
                                      </td>
                                      <td style={tableStyles.noKolomJudul}>
                                        (4)
                                      </td>
                                      <td style={tableStyles.noKolomJudul}>
                                        (5)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom}
                                        rowSpan="4"
                                      >
                                        1
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK A
                                      </td>
                                      <td rowSpan="2">80</td>
                                      <td rowSpan="2">88</td>
                                      <td rowSpan="2">B</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUDTop}>
                                        a. Pancasila
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUD}>
                                        b. UUD 1945
                                      </td>
                                      <td>85</td>
                                      <td>90</td>
                                      <td>A</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUD}>
                                        c. Propenas
                                      </td>
                                      <td>85</td>
                                      <td>90</td>
                                      <td>A</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom}
                                        rowSpan="3"
                                      >
                                        2
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK B
                                      </td>
                                      <td rowSpan="2">80</td>
                                      <td rowSpan="2">88</td>
                                      <td rowSpan="2">B</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUDTop}>
                                        a. Peraturan Perundang-undangan dibidang
                                        kepegawaian
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUD}>
                                        b. KORPRI
                                      </td>
                                      <td>85</td>
                                      <td>90</td>
                                      <td>A</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom}
                                        rowSpan="2"
                                      >
                                        3
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK C
                                      </td>
                                      <td rowSpan="2">80</td>
                                      <td rowSpan="2">88</td>
                                      <td rowSpan="2">B</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.fullBorder2}>
                                        Pengetahuan Perkantoran
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom}
                                        rowSpan="3"
                                      >
                                        4
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK D
                                      </td>
                                      <td rowSpan="2">80</td>
                                      <td rowSpan="2">88</td>
                                      <td rowSpan="2">B</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUDTop}>
                                        a. Tugas pokok, fungsi, struktur
                                        organisasi dan tata kerja instansi yang
                                        bersangkutan
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUD}>
                                        b. Pengetahuan mengenai substantive
                                        instansi yang bersangkutan dan
                                        pengetahuan lain yang ditentukan oleh
                                        pimpinan instansi yang bersangkutan
                                      </td>
                                      <td>80</td>
                                      <td>88</td>
                                      <td>B</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom}
                                        rowSpan="3"
                                      >
                                        5
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK E
                                      </td>
                                      <td rowSpan="2">80</td>
                                      <td rowSpan="2">88</td>
                                      <td rowSpan="2">B</td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUDTop}>
                                        a. Bahasa Indonesia
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={tableStyles.materiUDBottom}>
                                        b. Sejarah Indonesia
                                      </td>
                                      <td>85</td>
                                      <td>90</td>
                                      <td>A</td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td>Jumlah</td>
                                      <td>85</td>
                                      <td>90</td>
                                      <td>A</td>
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
        variant="contained"
      >
        Unduh undangan
      </Button>
    </>
  );
};

export default TableComponent;
