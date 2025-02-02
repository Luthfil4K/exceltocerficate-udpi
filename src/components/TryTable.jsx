import { Document, Page, View, Text, PDFViewer, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: '100%',
    marginBottom: 10,
  },
  tableRow: {
    display: 'table-row',
    flexDirection: 'row', // Baris tabel menggunakan flex
  },
  tableCell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 0, // Menghindari border atas pada setiap sel
    borderLeftWidth: 0, // Menghindari border kiri pada setiap sel
    borderBottomWidth: 1, // Border bawah untuk setiap sel
    borderRightWidth: 1, // Border kanan untuk setiap sel
    borderColor: 'black',
    flex: 1,
  },
  tableHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
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
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  rowspanCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    height: '33.33%', // Membagi ruang 3 baris
    borderBottomWidth: 1, // Border bawah untuk setiap sel dalam rowspan
    borderColor: 'black',
  },
  colNoWrapper: {
    width: '10%', // Atur lebar kolom pertama menjadi 10%
    display: 'flex',
  },
});

const TryTable = () => (
  <PDFViewer style={{ width: "100%", height: "800px" }}>
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <View style={styles.table}>
          {/* Header */}
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

          {/* Baris pertama */}
          <View style={styles.tableRow}>
            <View style={styles.colNoWrapper}>
              <Text style={styles.tableCell}>1</Text> {/* Apply colNoWrapper here */}
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

          {/* Baris kedua dengan colspan */}
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

          {/* Baris ketiga dengan rowspan */}
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

          {/* Baris keempat */}
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
      </Page>
    </Document>
  </PDFViewer>
);

export default TryTable;
