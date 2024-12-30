import React from "react";
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

const tableStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "center",
    padding: 5,
  },
  tableCell: {
    textAlign: "left",
    padding: 5,
  },
});

const Bingkai = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid
        size={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
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
                        : Aloysius Jehamat
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : 198308122009111001
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : Kolong/Manggarai, 12 Agustus 1983
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : Pengatur Tk. I/II/d
                      </Text>
                      <Text style={styles.keteranganIsi.formatIdentitas}>
                        : BPS Kabupaten Manggarai
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
                          Jakarta, 10 Agustus 2024
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
              <Page>
                <Table
                  data={[
                    {
                      firstName: "John",
                      lastName: "Smith",
                      dob: new Date(2000, 1, 1),
                      country: "Australia",
                      phoneNumber: "xxx-0000-0000",
                    },
                  ]}>
                  <TableHeader textAlign={"center"}>
                    <TableCell weighting={0.3}>First Name</TableCell>
                    <TableCell weighting={0.6}>
                      Last Name
                      <TableCell weighting={0.5}>Last asd</TableCell>
                      <TableCell weighting={0.5}>Last asd</TableCell>
                    </TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Phone Number</TableCell>
                  </TableHeader>
                  <TableBody>
                    <DataTableCell
                      weighting={0.3}
                      getContent={(r) => r.firstName}
                    />
                    <DataTableCell
                      weighting={0.3}
                      getContent={(r) => r.lastName}
                    />
                    <DataTableCell getContent={(r) => r.dob.toLocaleString()} />
                    <DataTableCell getContent={(r) => r.country} />
                    <DataTableCell getContent={(r) => r.phoneNumber} />
                  </TableBody>
                </Table>
              </Page>
              <Page style={tableStyles.page}>
                <View style={tableStyles.section}>
                  <Text style={{ fontSize: 18, marginBottom: 10 }}>
                    Tabel Nilai Ujian
                  </Text>
                  <Table style={tableStyles.table}>
                    <TableHeader>
                      <TableCell style={tableStyles.tableHeader}>No</TableCell>
                      <TableCell style={tableStyles.tableHeader}>
                        Materi Ujian
                      </TableCell>
                      <TableCell style={tableStyles.tableHeader}>
                        Persentase
                      </TableCell>
                      <TableCell style={tableStyles.tableHeader}>
                        Tertimbang
                        <TabkeCell>
                          asdsdqew
                        </TabkeCell>
                        <TabkeCell>
                          asd
                        </TabkeCell>
                      </TableCell>
                      <TableCell style={tableStyles.tableHeader}>
                        Nilai Tertimbang Dengan Huruf
                      </TableCell>
                    </TableHeader>
                    <TableBody>
                      <DataTableCell style={tableStyles.tableCell}>1</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        Matematika
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        85%
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>85</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>B</DataTableCell>

                      <DataTableCell style={tableStyles.tableCell}>2</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        Bahasa Indonesia
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        90%
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>90</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>A</DataTableCell>

                      <DataTableCell style={tableStyles.tableCell}>3</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        Fisika
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        75%
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>75</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>C</DataTableCell>

                      <DataTableCell style={tableStyles.tableCell}>4</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        Kimia
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        88%
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>88</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>B+</DataTableCell>

                      <DataTableCell style={tableStyles.tableCell}>5</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        Sejarah
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>
                        92%
                      </DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>92</DataTableCell>
                      <DataTableCell style={tableStyles.tableCell}>A</DataTableCell>
                    </TableBody>
                  </Table>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bingkai;
