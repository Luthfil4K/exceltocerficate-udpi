import React from "react";
import { useTable } from "react-table";
import { jsPDF } from "jspdf";
import { Grid, Card, Paper, Typography, Button, Box } from "@mui/material";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { tableStyles } from "../styles/styleTable";

const TableComponent = (props) => {
  const pdfRef2 = React.useRef();
  console.log("props.datadata");
  console.log(props.datadata);
  console.log("props.datadata");

  // const handleUnduhUndangan = async () => {
  //   const input2 = pdfRef2.current;
  //   const scale = 2; // Meningkatkan resolusi canvas

  //   try {
  //     const canvas2 = await html2canvas(input2, { scale });
  //     const imgData2 = canvas2.toDataURL("image/png");

  //     // Ukuran elemen Box
  //     const boxWidth = canvas2.width-150;
  //     const boxHeight = canvas2.height;

  //     // Membuat PDF dengan ukuran halaman sesuai ukuran elemen Box
  //     const pdf = new jsPDF("p", "px", [boxWidth, boxHeight]);

  //     // Menambahkan gambar ke PDF
  //     pdf.addImage(
  //       imgData2,
  //       "PNG",
  //       0,
  //       0,
  //       boxWidth,
  //       boxHeight
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
    const pdf = new jsPDF("p", "px", "a4"); // Menyiapkan PDF dengan ukuran standar A4

    try {
      // Mengambil data dari props
      const dataArray = props.datadata;

      // Perulangan untuk setiap data yang ada di props.datadata
      for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];

        // Update konten tabel dengan data dari props.datadata
        updateTableContent(data);

        // Render Box ke canvas
        const canvas2 = await html2canvas(input2, { scale });
        const imgData2 = canvas2.toDataURL("image/png");

        // Ukuran elemen Box
        const boxWidth = canvas2.width - 150;
        const boxHeight = canvas2.height;

        // Menambahkan gambar ke PDF pada halaman baru
        if (i > 0) pdf.addPage(); // Tambahkan halaman baru setelah halaman pertama
        pdf.addImage(imgData2, "PNG", 0, 0, boxWidth, boxHeight);
      }

      // Mengunduh file PDF yang sudah digabung
      pdf.save(`Undangan Ho'oh.pdf`);
    } catch (error) {
      console.error("Error while processing:", error);
    } finally {
      console.log("Success download");
    }
  };

  const tertimbang = (nilai, bobot) => {
    return (parseFloat(nilai) * bobot).toFixed(2).replace(".", ",");
  };

  const updateTableContent = (data) => {
    // Misalnya kita ingin menambahkan data pada setiap baris dalam tabel
    const tableRows = document.querySelectorAll("#myTable tr"); // Mendapatkan semua baris tabel

    const pancasila = document.getElementById("pancasila");
    const pancasilaTertimbang = document.getElementById("pancasilaTertimbang");
    const pancasilaTerbilang = document.getElementById("pancasilaTerbilang");
    const uud = document.getElementById("uud");
    const uudTertimbang = document.getElementById("uudTertimbang");
    const uudTerbilang = document.getElementById("uudTerbilang");
    const propenas = document.getElementById("propenas");
    const propenasTertimbang = document.getElementById("propenasTertimbang");
    const propenasTerbilang = document.getElementById("propenasTerbilang");
    const ppk = document.getElementById("ppk");
    const ppkTertimbang = document.getElementById("ppkTertimbang");
    const ppkTerbilang = document.getElementById("ppkTerbilang");
    const korpri = document.getElementById("korpri");
    const korpriTertimbang = document.getElementById("korpriTertimbang");
    const korpriTerbilang = document.getElementById("korpriTerbilang");
    const kantor = document.getElementById("kantor");
    const kantorTertimbang = document.getElementById("kantorTertimbang");
    const kantorTerbilang = document.getElementById("kantorTerbilang");
    const organisasi = document.getElementById("organisasi");
    const organisasiTertimbang = document.getElementById(
      "organisasiTertimbang"
    );
    const organisasiTerbilang = document.getElementById("organisasiTerbilang");
    const substansi = document.getElementById("substansi");
    const substansiTertimbang = document.getElementById("substansiTertimbang");
    const substansiTerbilang = document.getElementById("substansiTerbilang");
    const bindo = document.getElementById("bindo");
    const bindoTertimbang = document.getElementById("bindoTertimbang");
    const bindoTerbilang = document.getElementById("bindoTerbilang");
    const sejarah = document.getElementById("sejarah");
    const sejarahTertimbang = document.getElementById("sejarahTertimbang");
    const sejarahTerbilang = document.getElementById("sejarahTerbilang");
    const jumlah = document.getElementById("jumlah");
    const jumlahTertimbang = document.getElementById("jumlahTertimbang");
    const jumlahTerbilang = document.getElementById("jumlahTerbilang");

    // pancasila.textContent = data.pancasila;
    // pancasilaTertimbang.textContent =  tertimbang(data.pancasila,0.15)
    // pancasilaTerbilang.textContent = data.pancasilaTerbilang;
    // uud.textContent = data.uud_1945;
    // uudTertimbang.textContent = tertimbang(data.uud_1945,0.15);
    // uudTerbilang.textContent = data.uudTerbilang;
    // propenas.textContent = data.propenas;
    // propenasTertimbang.textContent = tertimbang(propenas,0.15);
    // propenasTerbilang.textContent = data.propenasTerbilang;
    // ppk.textContent = data.pengetahuan_bidang_kepegawaian;
    // ppkTertimbang.textContent = tertimbang(data.pengetahuan_bidang_kepegawaian,0.1);
    // ppkTerbilang.textContent = data.ppkTerbilang;
    // korpri.textContent = data.korpri;
    // korpriTertimbang.textContent = tertimbang(data.korpri,0.1);
    // korpriTerbilang.textContent = data.korpriTerbilang;
    // kantor.textContent = data.pengetahuan_perkantoran;
    // kantorTertimbang.textContent = tertimbang(pengetahuan_perkantoran,0.08);
    // kantorTerbilang.textContent = data.kantorTerbilang;
    // organisasi.textContent = data.organisasi;
    // organisasiTertimbang.textContent = data.organisasiTertimbang;
    // organisasiTerbilang.textContent = data.organisasiTerbilang;
    // substansi.textContent = data.substansi;
    // substansiTertimbang.textContent = data.substansiTertimbang;
    // substansiTerbilang.textContent = data.substansiTerbilang;
    // bindo.textContent = data.bindo;
    // bindoTertimbang.textContent = data.bindoTertimbang;
    // bindoTerbilang.textContent = data.bindoTerbilang;
    // sejarah.textContent = data.sejarah;
    // sejarahTertimbang.textContent = data.sejarahTertimbang;
    // sejarahTerbilang.textContent = data.sejarahTerbilang;
    // jumlah.textContent = data.jumlah;
    // jumlahTertimbang.textContent = data.jumlahTertimbang;
    // jumlahTerbilang.textContent = data.jumlahTerbilang;

    // // Iterasi pada baris tabel dan perbarui kontennya dengan data yang sesuai
    // let rowIndex = 1; // Start dari baris pertama setelah header

    // // Loop untuk mengupdate data pada setiap baris
    // tableRows.forEach((row, index) => {
    //   const cells = row.querySelectorAll("td");

    //   if (index === 0) {
    //     // Skip header, baris pertama adalah header
    //     return;
    //   }

    //   if (index % 2 === 1) {
    //     // Setiap baris ganjil kita mulai memasukkan data
    //     cells[1].textContent = data.unit_eselon_II; // Unit Eselon II
    //     cells[2].textContent = data.unit_kerja; // Unit Kerja
    //     cells[3].textContent = data.pangkat; // Pangkat
    //     cells[4].textContent = data.golongan; // Golongan
    //     cells[5].textContent = data.nilai_presentasi || '-'; // Nilai Presentasi (NPR)
    //     cells[6].textContent = data.nilai_tertinggi || '-'; // Nilai Tertimbang (NT)
    //     cells[7].textContent = data.nilai_huruf || '-'; // Nilai Huruf
    //   } else {
    //     // Baris genap, isi data sesuai kolom
    //     cells[1].textContent = data.unit_eselon_II;
    //     cells[2].textContent = data.unit_kerja;
    //     cells[3].textContent = data.pangkat;
    //     cells[4].textContent = data.golongan;
    //     cells[5].textContent = data.nilai_presentasi;
    //     cells[6].textContent = data.nilai_tertinggi;
    //     cells[7].textContent = data.nilai_huruf;
    //   }
    // });
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
                                  <table id="myTable" style={tableStyles.table}>
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
                                          id="pancasila"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          id="pancasilaTertimbang"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          id="pancasilaTerbilang"
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
                                        <td id="uud" style={tableStyles.nilai}>
                                          85
                                        </td>
                                        <td
                                          id="uudTertimbang"
                                          style={tableStyles.nilai}>
                                          90
                                        </td>
                                        <td
                                          id="uudTerbilang"
                                          style={tableStyles.nilai}>
                                          A
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style={tableStyles.materiUD}>
                                          c. Propenas
                                        </td>
                                        <td
                                          id="propenas"
                                          style={tableStyles.nilai}>
                                          85
                                        </td>
                                        <td
                                          id="propenasTertimbang"
                                          style={tableStyles.nilai}>
                                          90
                                        </td>
                                        <td
                                          id="propenasTerbilang"
                                          style={tableStyles.nilai}>
                                          A
                                        </td>
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
                                          id="ppk"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          id="ppkTertimbang"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          id="ppkTerbilang"
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
                                        <td
                                          id="korpri"
                                          style={tableStyles.nilai}>
                                          85
                                        </td>
                                        <td
                                          id="korpriTertimbang"
                                          style={tableStyles.nilai}>
                                          90
                                        </td>
                                        <td
                                          id="korpriTerbilang"
                                          style={tableStyles.nilai}>
                                          A
                                        </td>
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
                                          id="kantor"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          id="kantorTertimbang"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          id="kantorTerbilang"
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
                                          id="organisasi"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          id="organisasiTertimbang"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          id="organisasiTerbilang"
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
                                        <td
                                          id="substansi"
                                          style={tableStyles.nilai}>
                                          80
                                        </td>
                                        <td
                                          id="substansiTertimbang"
                                          style={tableStyles.nilai}>
                                          88
                                        </td>
                                        <td
                                          id="substansiTerbilang"
                                          style={tableStyles.nilai}>
                                          B
                                        </td>
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
                                          id="bindo"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          80
                                        </td>
                                        <td
                                          id="bindoTertimbang"
                                          style={tableStyles.nilai}
                                          rowSpan="2">
                                          88
                                        </td>
                                        <td
                                          id="bindoTerbilang"
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
                                        <td
                                          id="sejarah"
                                          style={tableStyles.nilai}>
                                          85
                                        </td>
                                        <td
                                          id="sejarahTertimbang"
                                          style={tableStyles.nilai}>
                                          90
                                        </td>
                                        <td
                                          id="sejarahTerbilang"
                                          style={tableStyles.nilai}>
                                          A
                                        </td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>Jumlah</td>
                                        <td
                                          id="jumlah"
                                          style={tableStyles.nilai}>
                                          85
                                        </td>
                                        <td
                                          id="jumlahTertimbang"
                                          style={tableStyles.nilai}>
                                          90
                                        </td>
                                        <td
                                          id="jumlahTerbilang"
                                          style={tableStyles.nilai}>
                                          A
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Grid>
                            <Grid sx={{}} item xs={1}></Grid>
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
