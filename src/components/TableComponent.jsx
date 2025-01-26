import React from "react";
import { useTable } from "react-table";
import { jsPDF } from "jspdf";
import { Grid, Card, Paper, Typography, Button, Box } from "@mui/material";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { tableStyles } from "../styles/styleTable";

const TableComponent = () => {
  const pdfRef2 = React.useRef();

  // const handleUnduhUndangan = async () => {
  //   const input2 = pdfRef2.current;
  //   const scale = 2; // Meningkatkan resolusi canvas

  //   try {
  //     const canvas2 = await html2canvas(input2, { scale });
  //     const imgData2 = canvas2.toDataURL("image/png");

  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = 250;

  //     const imgWidth2 = canvas2.width / scale;
  //     const imgHeight2 = canvas2.height / scale;
  //     const ratio2 = Math.min(pdfWidth / imgWidth2, pdfHeight / imgHeight2);
  //     const imgX2 = (pdfWidth - imgWidth2 * ratio2) / 2;
  //     const imgY2 = 10;

  //     pdf.addImage(
  //       imgData2,
  //       "PNG",
  //       imgX2,
  //       imgY2,
  //       imgWidth2 * ratio2,
  //       imgHeight2 * ratio2
  //     );

  //     pdf.save(`Undangan Ho'oh.pdf`);
  //   } catch (error) {
  //     console.error("Error while processing:", error);
  //   } finally {
  //     console.log("success download");
  //   }
  // };

  const handleUnduhUndangan = async () => {
    const input2 = pdfRef2.current;
    const scale = 2; // Meningkatkan resolusi canvas
  
    try {
      const canvas2 = await html2canvas(input2, { scale });
      const imgData2 = canvas2.toDataURL("image/png");
  
      // Ukuran elemen Box
      const boxWidth = canvas2.width-150;
      const boxHeight = canvas2.height;
  
      // Membuat PDF dengan ukuran halaman sesuai ukuran elemen Box
      const pdf = new jsPDF("p", "px", [boxWidth, boxHeight]);
  
      // Menambahkan gambar ke PDF
      pdf.addImage(
        imgData2,
        "PNG",
        0,
        0,
        boxWidth,
        boxHeight
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
          backgroundColor: "#FFFFFF",
          paddingTop: 10,

          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Atur shadow dan blur di sini
        }}>
        <Grid container sx={{}}>
          <Grid item xs={12}>
            <Grid container sx={{}}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Grid container>
                      <Box
                        ref={pdfRef2}
                        sx={{
                          paddingTop: "80px",
                          paddingBottom: "40px",
                          border: "1px solid black",
                          minWidth: "1200px",
                          maxWidth: "1200px",
                          height: "1230px",
                        }}>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item xs={1} sx={{}}>
                              {" "}
                            </Grid>
                            <Grid item xs={2} sx={{ paddingBottom: "7px" }}>
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
                            <Grid item xs={8} sx={{ paddingBottom: "7px" }}>
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
                            <Grid item xs={1} sx={{}}>
                              {" "}
                            </Grid>
                            {/* 12 */}
                            <Grid sx={{}} item xs={1}></Grid>
                            <Grid
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                textAlign: "center",
                              }}
                              item
                              xs={10}>
                              <Typography
                                variant="body1"
                                sx={{
                                  marginBottom: 0.5,
                                  color: "black",
                                  fontWeight: 900,
                                  fontSize: 25,
                                }}>
                                NILAI
                              </Typography>
                              <div style={tableStyles.page}>
                                <div style={tableStyles.section}>
                                  <table style={tableStyles.table}>
                                    <thead>
                                      <tr>
                                        <th
                                          style={
                                            tableStyles.tableHeaderNoBottomBorderNo
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
                                        <td style={tableStyles.noKolomJudul1}>
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
                                          rowSpan="4">
                                          1
                                        </td>
                                        <td
                                          style={tableStyles.judulKelompokLeft}>
                                          KELOMPOK A
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          B
                                        </td>
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
                                        <td style={tableStyles.nilai}>85</td>
                                        <td style={tableStyles.nilai}>90</td>
                                        <td style={tableStyles.nilai}>A</td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUD}>
                                          c. Propenas
                                        </td>
                                        <td style={tableStyles.nilai}>85</td>
                                        <td style={tableStyles.nilai}>90</td>
                                        <td style={tableStyles.nilai}>A</td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={tableStyles.noKolom}
                                          rowSpan="3">
                                          2
                                        </td>
                                        <td
                                          style={tableStyles.judulKelompokLeft}>
                                          KELOMPOK B
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          B
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUDTop}>
                                          a. Peraturan Perundang-undangan
                                          dibidang kepegawaian
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUD}>
                                          b. KORPRI
                                        </td>
                                        <td style={tableStyles.nilai}>85</td>
                                        <td style={tableStyles.nilai}>90</td>
                                        <td style={tableStyles.nilai}>A</td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={tableStyles.noKolom}
                                          rowSpan="2">
                                          3
                                        </td>
                                        <td
                                          style={tableStyles.judulKelompokLeft}>
                                          KELOMPOK C
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          B
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.fullBorder2}>
                                          Pengetahuan Perkantoran
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={tableStyles.noKolom}
                                          rowSpan="3">
                                          4
                                        </td>
                                        <td
                                          style={tableStyles.judulKelompokLeft}>
                                          KELOMPOK D
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          B
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUDTop}>
                                          a. Tugas pokok, fungsi, struktur
                                          organisasi dan tata kerja instansi
                                          yang bersangkutan
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUD}>
                                          b. Pengetahuan mengenai substantive
                                          instansi yang bersangkutan dan
                                          pengetahuan lain yang ditentukan oleh
                                          pimpinan instansi yang bersangkutan
                                        </td>
                                        <td style={tableStyles.nilai}>80</td>
                                        <td style={tableStyles.nilai}>88</td>
                                        <td style={tableStyles.nilai}>B</td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={tableStyles.noKolom5}
                                          rowSpan="3">
                                          5
                                        </td>
                                        <td
                                          style={tableStyles.judulKelompokLeft}>
                                          KELOMPOK E
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          B
                                        </td>
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
                                        <td style={tableStyles.nilai}>85</td>
                                        <td style={tableStyles.nilai}>90</td>
                                        <td style={tableStyles.nilai}>A</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>Jumlah</td>
                                        <td style={tableStyles.nilai}>85</td>
                                        <td style={tableStyles.nilai}>90</td>
                                        <td style={tableStyles.nilai}>A</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Grid>
                            <Grid
                              sx={{  }}
                              item
                              xs={1}></Grid>
                            {/* 12 */}
                            <Grid item xs={1}></Grid>
                            <Grid
                              xs={10}
                              sx={{
                                height: 200,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                                justifyContent: "end",
                              }}>
                              <Grid container>
                                <Grid item xs={6} sx={{ height: 200 }}></Grid>
                                <Grid item xs={6} sx={{ height: 200 }}>
                                  <Grid sx={{ height: 50 }}>
                                    <Typography textAlign={"center"}>
                                      a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                                    </Typography>
                                    <Typography textAlign={"center"}>
                                      Kepala Biro Sumber Daya Manusia,
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    sx={{
                                      height: 100,
                                      display: "flex",
                                      flexDirection: "row",
                                    }}>
                                    <img
                                      style={{
                                        width: 150,
                                        height: 150,
                                        position: "relative",
                                        top: "-20px",
                                        left: "80px",
                                        zIndex: 30,
                                      }}
                                      src="STEMPEL-BPSpng.png"
                                      alt="ttd"
                                    />
                                    <img
                                      style={{
                                        width: 140,
                                        height: 140,
                                        position: "relative",
                                        top: "-20px",
                                        left: "20px",
                                      }}
                                      src="tanda tangan png.png"
                                      alt="ttd"
                                    />
                                  </Grid>
                                  <Grid sx={{ height: 50 }}>
                                    <Typography
                                      textAlign={"center"}
                                      sx={{ textDecoration: "underline" }}>
                                      Dr. Eni Lestariningsih, S.Si, M.A{" "}
                                    </Typography>
                                    <Typography textAlign={"center"}>
                                      NIP. 197003101994012001{" "}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}></Grid>
                        </Grid>
                      </Box>
                      {/* <Grid sx={{ height: 150 }} item xs={12} k'}></Grid> */}
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
