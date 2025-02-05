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

  boxTable: {
    borderTop: "1px solid black",
    width: "500px",
    height: "430px",
    marginBottom: "15px",
  },
  barisHeader: {
    height: "50px",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  fontHeader: {
    fontSize: "10px",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  fontTerbilang: { fontSize: "8px", textAlign: "center" },
  fontBaris: { fontSize: "10px" },
  fontTtd: { fontSize: "10px",textAlign:'center' },
  needBold: {
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  kolNo: {
    width: "30px",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "1px solid black",
  },
  kolMateri: {
    borderLeft: "1px solid black",
    display: "flex",
    justifyContent: "center",
    width: "190px",
  },
  kolNilai: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    flexDirection: "column",
  },
  KolNilaiAtas: {
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    height: "20px",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  kolNilaiBawah: {
    alignItems: "end",
    justifyContent: "flex-end",
    width: "140px",
    display: "flex",
    flexDirection: "row",
    height: "30px",
  },

  kolPresentasi: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "100%",
    borderLeft: "1px solid black",
  },
  kolTertimbang: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "100%",
    borderLeft: "1px solid black",
  },

  kolTerbilang: {
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
  },

  barisSatu: {
    height: "80px",
    display: "flex",
    flexDirection: "row",
  },

  barisKelompokA: {},

  kolNilaiIsi: {
    alignItems: "end",
    justifyContent: "flex-end",
    width: "140px",
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },

  barisSatu: {
    height: "80px",
    display: "flex",
    flexDirection: "row",
  },

  kelompokA: {
    height: "100%",
    width: "470px",
  },

  a1: {
    height: "40px",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },

  barisStandard: {
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
    height: "20px",
  },
  needBB: {
    borderBottom: "1px solid black",
  },
  needBL: {
    borderBottom: "1px solid black",
  },
  needBR: {
    borderBottom: "1px solid black",
  },
  needBT: {
    borderBottom: "1px solid black",
  },

  needPL: {
    paddingLeft: "5px",
  },
  needMorePL: {
    paddingLeft: "14px",
  },

  barisDua: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
  },
  barisTiga: {
    height: "40px",
    display: "flex",
    flexDirection: "row",
  },
  barisEmpat: {
    height: "120px",
    display: "flex",
    flexDirection: "row",
  },
  d1: {
    height: "60px",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  d2: {
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
    height: "60px",
  },
  barisLima: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
  },
  barisJumlah: {
    display: "flex",
    flexDirection: "row",
    height: "20px",
  },

  kelJumlah: {
    width: "500px",
    height: "20px",
  },
  kolJumlah: {
    height: "20px",
    width: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "1px solid black",
  },
  boxTtd: {
    border: "1px solid black",
    width: "500px",
    height: "100px",
    alignItems: "flex-end",
  },

  boxTtd2: {
    border: "1px solid black",
    width: "200px",
    height: "100px",
    alignItems: "flex-end",
  },
  jabatanTtd:{
    
    width: "200px",
    alignItems:"center"
  },
  ttd:{
    height:"50px"
  }
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
              <View style={[sty.kolNo, sty.needBB]}>
                <Text style={sty.fontBaris}>1</Text>
              </View>
              <View style={sty.kelompokA}>
                <View style={sty.a1}>
                  <View style={sty.kolMateri}>
                    <Text style={[sty.fontBaris, sty.needPL]}>KELOMPOK A</Text>
                    <Text style={[sty.fontBaris, sty.needPL]}>
                      a. Pancasila
                    </Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>86</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>89</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={sty.barisStandard}>
                  <View style={sty.kolMateri}>
                    <Text style={[sty.fontBaris, sty.needPL]}>b. UUD 1945</Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={sty.barisStandard}>
                  <View style={sty.kolMateri}>
                    <Text style={[sty.fontBaris, sty.needPL]}>C. Propenas</Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
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
                    <Text style={[sty.fontBaris, sty.needPL]}>KELOMPOK B</Text>
                    <Text style={[sty.fontBaris, sty.needPL]}>
                      a. Peraturan Perundang-undangan{" "}
                    </Text>
                    <Text style={[sty.fontBaris, sty.needMorePL]}>
                      {" "}
                      dibidang kepegawaian
                    </Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>86</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>89</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={sty.barisStandard}>
                  <View style={sty.kolMateri}>
                    <Text style={[sty.fontBaris, sty.needPL]}>b. KORPRI</Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
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
                    <Text style={[sty.fontBaris, sty.needPL]}>KELOMPOK C</Text>
                    <Text style={[sty.fontBaris, sty.needPL]}>
                      Pegetahuan Perkantoran
                    </Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>86</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>89</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
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
                    <Text style={[sty.fontBaris, sty.needPL]}>KELOMPOK D</Text>
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
                    <Text style={[sty.fontBaris, sty.needPL]}>86</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>89</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
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
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
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
                    <Text style={[sty.fontBaris, sty.needPL]}>KELOMPOK E</Text>
                    <Text style={[sty.fontBaris, sty.needPL]}>
                      a. Bahasa Indonesia
                    </Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>86</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>89</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
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
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTerbilang}>
                    <Text style={sty.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={sty.barisJumlah}>
              <View style={sty.kelJumlah}>
                <View style={sty.barisStandard}>
                  <View style={sty.kolJumlah}>
                    <Text style={[sty.fontBaris, sty.needMorePL, sty.needBold]}>
                      JUMLAH
                    </Text>
                  </View>
                  <View style={sty.kolPresentasi}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
                  </View>
                  <View style={sty.kolTertimbang}>
                    <Text style={[sty.fontBaris, sty.needPL]}>90</Text>
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
                <Text style={sty.fontTtd}>a.n. KEPALA BADAN PUSAT STATISTIK, </Text>
                <Text style={sty.fontTtd}>Kepala Biro Sumber Daya Manusia, </Text>
              </View>
              <View style={sty.ttd}></View>
              <View style={sty.jabatanTtd}>
                <Text style={sty.fontTtd}>Dr. Eni Lestariningsih, S.Si, M.A </Text>
                <Text style={sty.fontTtd}>NIP. 197003101994012001  </Text>

              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default TryTable;
