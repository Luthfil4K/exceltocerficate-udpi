import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

import { styPI } from "../styles/styPI";
import { Typography } from "@mui/material";

const TablePI = () => (
  <>
    <PDFViewer style={{ width: "100%", height: "800px" }}>
      <Document>
        <Page size="A4" style={{ padding: 20 }}>
          <View style={styPI.paperBg}>
            <View style={styPI.lampiranStlud}>
              <Text style={styPI.fontSTLUPI}>SURAT TANDA LULUS UJIAN</Text>
              <Text style={styPI.fontSTLUPI}>PENYESUAIAN IJAZAH</Text>
            </View>
            <View style={styPI.boxIdentitas}>
              <View style={[styPI.stlud, styPI.formIdentitas]}>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  NOMOR
                </Text>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  : contohNomor
                </Text>
              </View>
              <View style={[styPI.nama, styPI.formIdentitas]}>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>NAMA</Text>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  : contohNama
                </Text>
              </View>
              <View style={[styPI.nip, styPI.formIdentitas]}>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>NIP</Text>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  : contohNip
                </Text>
              </View>

              <View style={[styPI.tingkat, styPI.formIdentitas]}>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  TINGKAT
                </Text>
                <Text style={[styPI.baganKiri, styPI.fontIdentitas]}>
                  : contohTingkat
                </Text>
              </View>
            </View>
            <View style={styPI.boxTahun}>
              <Text style={styPI.fontIdentitas}>Tahun 2025</Text>
            </View>
            <View style={styPI.boxNilai}>
              <Text style={styPI.fontNilai}>NILAI</Text>
            </View>
            <View style={styPI.boxTable}>
              <View style={styPI.barisHeader}>
                <View style={styPI.kolNo}>
                  <Text style={styPI.fontHeader}>NO</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={styPI.fontHeader}>MATERI UJIAN </Text>
                </View>
                <View style={[styPI.kolNilai]}>
                  <Text style={styPI.fontHeader}>NILAI</Text>
                </View>
                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontHeader}>NILAI </Text>
                  <Text style={styPI.fontHeader}>DENGAN HURUF</Text>
                </View>
              </View>

              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>1.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>Pancasila</Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>2.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Pengetahuan Umum
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>3.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Bahasa Indonesia
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>4.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Bahasa Inggris
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>5.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Statistika
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>6.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Kemampuan Kuantitatif
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisStandard}>
                <View style={[styPI.kolNo, styPI]}>
                  <Text style={styPI.fontBaris}>7.</Text>
                </View>
                <View style={styPI.kolMateri}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>
                    Kertas Kerja Perorangan
                  </Text>
                </View>
                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>

                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>

              <View style={[styPI.barisJumlah,styPI.needBB]}>
                <View style={styPI.kolJumlah}>
                  <Text
                    style={[styPI.fontBaris, styPI.needMorePL, styPI.needBold]}
                  >
                    JUMLAH
                  </Text>
                </View>

                <View style={styPI.kolNilai}>
                  <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                </View>
                <View style={styPI.kolTerbilang}>
                  <Text style={styPI.fontTerbilang}>
                    Sembilan Puluh Koma Lima Nol
                  </Text>
                </View>
              </View>
              <View style={styPI.barisJumlah}>
                <View style={styPI.kelJumlah}>
                  <View style={styPI.barisStandard}>
                    <View style={styPI.kolJumlah}>
                      <Text
                        style={[
                          styPI.fontBaris,
                          styPI.needMorePL,
                          styPI.needBold,
                        ]}
                      >
                        RATA-RATA
                      </Text>
                    </View>

                    <View style={styPI.kolNilai}>
                      <Text style={[styPI.fontBaris, styPI.needPL]}>90</Text>
                    </View>
                    <View style={styPI.kolTerbilang}>
                      <Text style={styPI.fontTerbilang}>
                        Sembilan Puluh Koma Lima Nol
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styPI.boxTtd}>
              <View style={styPI.boxTtd2}>
                <View style={styPI.jabatanTtd}>
                  <Text style={styPI.fontTtd}>
                    a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                  </Text>
                  <Text style={styPI.fontTtd}>
                    Kepala Biro Sumber Daya Manusia,{" "}
                  </Text>
                </View>
                <View style={styPI.ttd}></View>
                <View style={styPI.jabatanTtd}>
                  <Text style={styPI.fontTtd}>
                    Dr. Eni Lestariningsih, S.Si, M.A{" "}
                  </Text>
                  <Text style={styPI.fontTtd}>NIP. 197003101994012001 </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  </>
);

export default TablePI;
