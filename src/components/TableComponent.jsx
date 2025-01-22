import React from "react";
import { useTable } from "react-table";
import { jsPDF } from "jspdf";
import { Grid, Card, Paper, Typography, Button } from "@mui/material";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { tableStyles } from '../styles/styleTable';


const TableComponent = () => {
  const pdfRef2 = React.useRef();


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
                                          tableStyles.tableHeaderNoBottomBorderNo
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
                                        rowSpan="4"
                                      >
                                        1
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK A
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        80
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        88
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
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
                                        rowSpan="3"
                                      >
                                        2
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK B
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        80
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        88
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        B
                                      </td>
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
                                      <td style={tableStyles.nilai}>85</td>
                                      <td style={tableStyles.nilai}>90</td>
                                      <td style={tableStyles.nilai}>A</td>
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
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        80
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        88
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
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
                                        rowSpan="3"
                                      >
                                        4
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK D
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        80
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        88
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        B
                                      </td>
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
                                      <td style={tableStyles.nilai}>80</td>
                                      <td style={tableStyles.nilai}>88</td>
                                      <td style={tableStyles.nilai}>B</td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={tableStyles.noKolom5}
                                        rowSpan="3"
                                      >
                                        5
                                      </td>
                                      <td style={tableStyles.judulKelompokLeft}>
                                        KELOMPOK E
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        80
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
                                        88
                                      </td>
                                      <td style={tableStyles.nilai} rowSpan="2">
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
                          <Grid item xs={1}></Grid>
                          <Grid
                            xs={10}
                            sx={{
                              height: 100,
                              alignItems: "ends",
                              justifyContent: "end",
                            }}
                            bgcolor={'red'}
                          >

                          </Grid>
                        </Grid>
                              <Grid item xs={1}></Grid>
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
