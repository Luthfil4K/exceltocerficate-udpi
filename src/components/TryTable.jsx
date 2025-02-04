import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

import FontRobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import FontRobotoItalic from "../assets/fonts/Roboto/Roboto-Italic.ttf";
import FontRobotoBoldItalic from "../assets/fonts/Roboto/Roboto-BoldItalic.ttf";
import FontRobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "100%",
    marginBottom: 10,
  },
  tableRow: {
    display: "table-row",
    flexDirection: "row", // Baris tabel menggunakan flex
  },
  tableCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderTopWidth: 0, // Menghindari border atas pada setiap sel
    borderLeftWidth: 0, // Menghindari border kiri pada setiap sel
    borderBottomWidth: 1, // Border bawah untuk setiap sel
    borderRightWidth: 1, // Border kanan untuk setiap sel
    borderColor: "black",
    flex: 1,
  },
  tableHeader: {
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1, // Border bawah untuk header
  },
  colspan: {
    flex: 2, // Lebar 2 kolom untuk mensimulasikan colspan
  },
  rowspan: {
    height: 120, // Membuat sel ini lebih tinggi untuk meniru rowspan
    flex: 1, // Menjaga agar tinggi sel tetap mengikuti baris lainnya
  },
  rowspanWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  rowspanCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    flex: 1,
    height: "33.33%", // Membagi ruang 3 baris
    borderBottomWidth: 1, // Border bawah untuk setiap sel dalam rowspan
    borderColor: "black",
  },
  colNoWrapper: {
    width: "10%", // Atur lebar kolom pertama menjadi 10%
    display: "flex",
  },
});

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

const sty = StyleSheet.create({
  paperBg: { display: "flex", alignItems: "center", justifyContent: "center" },

  // boxIdentitas: { border: "1px solid black", width: "450px", height: "100px",marginBottom:10 },
  boxIdentitas: { width: "450px", height: "100px", marginBottom: 10 },
  formIdentitas: { display: "flex", flexDirection: "row" },
  baganKiri: { width: "100px" },
  fontIdentitas: { fontSize: "11px", marginBottom: "8px" },
  lampiranStlud: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  boxTahun: {
    width: "470px",
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  boxNilai: {
    width: "470px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fontNilai: {
    fontSize: "16px",
    marginBottom: "4px",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  boxTable: { border: "1px solid black", width: "500px", height: "600px" },
  barisHeader: {
    height: "50px",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  fontHeader: { fontSize: "10px", textAlign: "center" },
  kolNo: { width: "30px", alignItems: "center", justifyContent: "center" },
  kolMateri: {
    borderLeft: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "190px",
  },
  kolNilai: {
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    flexDirection:'column',
    
  },
  KolNilaiAtas:{
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    height:'20px',
    borderBottom:'1px solid black',
    borderLeft: "1px solid black",
  },
  kolNilaiBawah:{
    alignItems: "end",
    justifyContent:'flex-end',
    width: "140px",
    display:'flex',
    flexDirection:'row',
    height:'30px',
  },
  
  kolPresentasi: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height:"100%",
    borderLeft: "1px solid black",
  },
  kolTertimbang: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height:"100%",
    borderLeft: "1px solid black",
  },
 
  kolTerbilang: {
    borderLeft: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
  },

  barisSatu:{
    height: "80px",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },

  barisKelompokA:{

  },

  kolNilaiIsi:{
    alignItems: "end",
    justifyContent:'flex-end',
    width: "140px",
    display:'flex',
    flexDirection:'row',
    height:'100%',
  },


});
const TryTable = () => (
  <PDFViewer style={{ width: "100%", height: "800px" }}>
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <View style={sty.paperBg}>
          <View style={sty.boxIdentitas}>
            <View style={sty.lampiranStlud}>
              <Text style={sty.fontIdentitas}>Lampiran STLUD</Text>
            </View>
            <View style={[sty.nama, sty.formIdentitas]}>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>NAMA</Text>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                : contohNama
              </Text>
            </View>
            <View style={[sty.nip, sty.formIdentitas]}>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>NIP</Text>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                : contohNip
              </Text>
            </View>
            <View style={[sty.stlud, sty.formIdentitas]}>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>STLUD NO</Text>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                : contohStlud
              </Text>
            </View>
            <View style={[sty.tingkat, sty.formIdentitas]}>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>TINGKAT</Text>
              <Text style={[sty.baganKiri, sty.fontIdentitas]}>
                : contohTingkat
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
              <View style={sty.kolNo}>
                <Text style={sty.fontHeader}>1</Text>
              </View>
              <View style={sty.kolMateri}>
                <Text style={sty.fontHeader}>Pancasila</Text>
              </View>
              <View style={sty.kolPresentasi}>
                <Text style={sty.fontHeader}>PRESENTASI (NPR)</Text>
              </View>
              <View style={sty.kolTertimbang}>
                <Text style={sty.fontHeader}>TERTIMBANG (NT)</Text>
              </View>
              <View style={sty.kolTerbilang}>
                <Text style={sty.fontHeader}>NILAI TERTIMBANG</Text>
                <Text style={sty.fontHeader}>DENGAN HURUF</Text>
              </View>
            </View>
            {/* <View style={sty.barisSatu}>
              <View style={sty.kolNo}>
                <Text style={sty.fontHeader}>NO</Text>
              </View>
              <View style={sty.barisSelainNo}>

              </View>
              <View style={sty.kolMateri}>
                <Text style={sty.fontHeader}>Bahasa</Text>
              </View>
              <View style={sty.kolPresentasi}>
                <Text style={sty.fontHeader}>90</Text>
              </View>
              <View style={sty.kolTertimbang}>
                <Text style={sty.fontHeader}>9.45</Text>
              </View>
            </View> */}
          </View>
        </View>
      </Page>
      <>
        {/* <Page size="A4" style={{ padding: 20 }}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>No</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>Nama</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>Usia</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>Alamat</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.colNoWrapper}>
              <Text style={styles.tableCell}>1</Text>{" "}
            </View>
            <View style={styles.tableCell}>
              <Text>John Doe</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>30</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Jakarta</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.colspan]}>
              <Text>A long text here that takes 2 columns</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>More info</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>More info</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.rowspanWrapper}>
              <View style={styles.rowspanCell}>
                <Text>Row 1 of 3 (Rowspan)</Text>
              </View>
              <View style={styles.rowspanCell}>
                <Text>Row 2 of 3 (Rowspan)</Text>
              </View>
              <View style={styles.rowspanCell}>
                <Text>Row 3 of 3 (Rowspan)</Text>
              </View>
            </View>
            <View style={styles.tableCell}>
              <Text>Additional info</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>More info</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Sam Smith</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>40</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Surabaya</Text>
            </View>
          </View>
        </View>
      </Page> */}
      </>
    </Document>
  </PDFViewer>
);

export default TryTable;
