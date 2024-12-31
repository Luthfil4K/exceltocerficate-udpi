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

// const styles = StyleSheet.create({
//   // fontFamily:'Roboto'

//   page: {
//     position: "relative", // Membuat elemen menjadi relatif agar gambar bisa ditempatkan di atasnya
//     flexDirection: "column",
//     backgroundColor: "#FFFFFF",
//     width: "100%",
//     height: "100%",
//   },
//   backgroundImage: {
//     position: "absolute", // Menempatkan gambar di belakang semua elemen lainnya
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     objectFit: "cover",
//     zIndex: 10, // Menjaga proporsi gambar agar menutupi seluruh halaman
//   },
//   layout: {
//     paddingTop: 220,
//     paddingHorizontal: 100,
//     flexGrow: 1,
//   },
//   kop: {
//     width: "100%",
//     height: 60,
//     alignItems: "center",
//     marginBottom: 10,
//     bps: {
//       fontSize: 12,
//       marginBottom: 10,
//       fontWeight: "bold",
//       fontStyle: "italic",
//       fontFamily: "Roboto",
//     },
//     namaSurat: {
//       fontSize: 12,
//       marginBottom: 10,
//       fontWeight: "bold",
//       // fontStyle: 'italic',
//       fontFamily: "Roboto",
//     },
//     nomorSurat: {
//       fontSize: 12,
//     },
//   },
//   isi: {
//     width: "100%",
//     height: 40,
//     marginBottom: 20,
//     isiSurat: {
//       fontSize: 12,
//     },
//   },
//   keteranganIsi: {
//     width: "100%",
//     height: 100,
//     marginBottom: 10,
//     display: "flex",
//     flexDirection: "row",
//     isiKiri: {
//       width: "35%",
//       height: 100,
//     },
//     isiKanan: {
//       width: "66%",
//       height: 100,
//     },
//     formatIdentitas: {
//       marginBottom: 4,
//       fontSize: 12,
//     },
//   },
//   keteranganLulus: {
//     width: "100%",
//     height: 30,
//     marginBottom: 10,
//     alignItems: "center",
//     lulusText: {
//       fontSize: 20,
//       fontWeight: "bold",
//       // fontStyle: 'italic',
//       fontFamily: "Roboto",
//     },
//   },
//   penutup: {
//     width: "100%",
//     height: 30,
//     marginBottom: 20,
//     penutupText: {
//       fontSize: 12,
//     },
//   },
//   fotoTtd: {
//     width: "100%",
//     height: 120,
//     display: "flex",
//     flexDirection: "row",
//     isiKiri: {
//       paddingLeft: 50,
//       width: "36%",
//       height: 120,
//       layoutFoto: {
//         width: 90,
//         height: 120,
//         border: "3px black",
//       },
//     },
//     stempel: {
//       marginLeft: 120,
//       position: "absolute",
//       justifyContent: "center",
//       marginTop: 10,
//       alignItems: "center",
//       layoutFoto: {
//         width: 100,
//         height: 100,
//       },
//     },
//     ttd: {
//       justifyContent: "center",
//       marginLeft: 180,
//       position: "absolute",
//       alignItems: "center",
//       layoutFoto: {
//         width: 100,
//         height: 100,
//       },
//     },
//     isiKanan: {
//       width: "80%",
//       height: 120,
//       alamat: {
//         alignItems: "center",
//         height: 50,
//       },
//       ttd: {
//         height: 60,
//         layoutFoto: {
//           width: 90,
//           height: 90,
//         },
//       },
//       namaTtd: {
//         height: 30,
//         alignItems: "center",
//         layoutFoto: {
//           width: 90,
//           height: 90,
//         },
//       },
//       normalText: {
//         fontSize: 12,
//       },
//     },
//   },
//   normalText: {
//     fontSize: 11,
//   },
// });

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

const styles = StyleSheet.create({
  table: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  // So Declarative and unDRY 👌
  col1: {
    width: '27%',
  },
  col2: {
    width: '15%',
  },
  col3: {
    width: '15%',
  },
  col4: {
    width: '20%',
  },
  col5: {
    width: '27%',
  },
})

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
              
              <Page style={tableStyles.page}>
                <View style={styles.table}>
                  <View style={[styles.row, styles.bold, styles.header]}>
                    <Text style={styles.col1}>Name</Text>
                    <Text style={styles.col2}>Start Date</Text>
                    <Text style={styles.col3}>End Date</Text>
                    <Text style={styles.col4}>Days</Text>
                    <Text style={styles.col5}>Info</Text>
                  </View>
                  {data.map((row, i) => (
                    <View key={i} style={styles.row} wrap={false}>
                      <Text style={styles.col1}>
                        <Text style={styles.bold}>{row.lastName}</Text>,{" "}
                        {row.firstName}
                      </Text>
                      <Text style={styles.col2}>{row.startDate}</Text>
                      <Text style={styles.col3}>{row.endDate}</Text>
                      <Text style={styles.col4}>
                        <Text style={styles.bold}>{row.days}</Text> of{" "}
                        {maximumDays}
                      </Text>
                      <Text style={styles.col5}>{row.info}</Text>
                    </View>
                  ))}
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
