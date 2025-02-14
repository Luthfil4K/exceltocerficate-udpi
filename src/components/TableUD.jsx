import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

import { styUD } from "../styles/styUD";

const TableUD = () => (
  <PDFViewer style={{ width: "100%", height: "800px" }}>
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <View style={styUD.paperBg}>
          <View style={styUD.boxIdentitas}>
            <View style={styUD.lampiranStlud}>
              <Text style={styUD.fontIdentitas}>Lampiran STLUD</Text>
            </View>
            <View style={[styUD.nama, styUD.formIdentitas]}>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>NAMA</Text>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                : contohNama
              </Text>
            </View>
            <View style={[styUD.nip, styUD.formIdentitas]}>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>NIP</Text>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                : contohNip
              </Text>
            </View>
            <View style={[styUD.stlud, styUD.formIdentitas]}>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                STLUD NO
              </Text>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                : contohStlud
              </Text>
            </View>
            <View style={[styUD.tingkat, styUD.formIdentitas]}>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                TINGKAT
              </Text>
              <Text style={[styUD.baganKiri, styUD.fontIdentitas]}>
                : contohTingkat
              </Text>
            </View>
          </View>
          <View style={styUD.boxTahun}>
            <Text style={styUD.fontIdentitas}>Tahun 2025</Text>
          </View>
          <View style={styUD.boxNilai}>
            <Text style={styUD.fontNilai}>NILAI</Text>
          </View>
          <View style={styUD.boxTable}>
            <View style={styUD.barisHeader}>
              <View style={styUD.kolNo}>
                <Text style={styUD.fontHeader}>NO</Text>
              </View>
              <View style={styUD.kolMateri}>
                <Text style={styUD.fontHeader}>MATERI UJIAN DINAS</Text>
              </View>
              <View style={styUD.kolNilai}>
                <View style={styUD.KolNilaiAtas}>
                  <Text style={styUD.fontHeader}>NILAI</Text>
                </View>
                <View style={styUD.kolNilaiBawah}>
                  <View style={styUD.kolPresentasi}>
                    <Text style={styUD.fontHeader}>PRESENTASI (NPR)</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={styUD.fontHeader}>TERTIMBANG (NT)</Text>
                  </View>
                </View>
              </View>
              <View style={styUD.kolTerbilang}>
                <Text style={styUD.fontHeader}>NILAI TERTIMBANG</Text>
                <Text style={styUD.fontHeader}>DENGAN HURUF</Text>
              </View>
            </View>
            <View style={styUD.barisNoKolom}>
            <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>(1)</Text>
              </View>
              <View style={[styUD.barisNoKolom,styUD.needBB]}>
                <View style={styUD.kolMateri}>
                  <Text style={[styUD.fontBaris, styUD.needMiddle]}>
                    (2)
                  </Text>
                </View>
                <View style={styUD.kolPresentasi}>
                  <Text style={[styUD.fontBaris, styUD.needPL]}>(3)</Text>
                </View>
                <View style={styUD.kolTertimbang}>
                  <Text style={[styUD.fontBaris, styUD.needPL]}>(4)</Text>
                </View>
                <View style={styUD.kolTerbilang}>
                  <Text style={styUD.fontTerbilang}>
                    (5)
                  </Text>
                </View>
              </View>
            </View>
            <View style={styUD.barisSatu}>
              <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>1</Text>
              </View>
              <View style={styUD.kelompokA}>
                <View style={styUD.a1}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      KELOMPOK A
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      a. Pancasila
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>86</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>89</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={styUD.barisStandard}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      b. UUD 1945
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={styUD.barisStandard}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      C. Propenas
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styUD.barisDua}>
              <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>2</Text>
              </View>
              <View style={styUD.kelompokA}>
                <View style={styUD.a1}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      KELOMPOK B
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      a. Peraturan Perundang-undangan{" "}
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      dibidang kepegawaian
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>86</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>89</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={styUD.barisStandard}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      b. KORPRI
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styUD.barisTiga}>
              <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>3</Text>
              </View>
              <View style={styUD.kelompokA}>
                <View style={styUD.a1}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      KELOMPOK C
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      Pegetahuan Perkantoran
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>86</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>89</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styUD.barisEmpat}>
              <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>4</Text>
              </View>
              <View style={styUD.kelompokA}>
                <View style={styUD.d1}>
                  <View style={[styUD.kolMateri, styUD.needHeight]}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      KELOMPOK D
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      a. Tugas pokok, fungsi, struktur
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      organisasi dan tata kerja instansi
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      yang bersangkutan
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>86</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>89</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={styUD.d2}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      b. Pengetahuan mengenai substantive
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      instansi yang bersangkutan dan
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      pengetahuan lain yang ditentukan
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      oleh pimpinan instansi yang
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needMorePL]}>
                      {" "}
                      bersangkutan
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styUD.barisLima}>
              <View style={[styUD.kolNo, styUD.needBB]}>
                <Text style={styUD.fontBaris}>5</Text>
              </View>
              <View style={styUD.kelompokA}>
                <View style={styUD.a1}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      KELOMPOK E
                    </Text>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      a. Bahasa Indonesia
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>86</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>89</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
                <View style={styUD.barisStandard}>
                  <View style={styUD.kolMateri}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>
                      b. Sejarah Indonesia
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styUD.barisJumlah}>
              <View style={styUD.kelJumlah}>
                <View style={styUD.barisStandard}>
                  <View style={styUD.kolJumlah}>
                    <Text
                      style={[
                        styUD.fontBaris,
                        styUD.needMorePL,
                        styUD.needBold,
                      ]}
                    >
                      JUMLAH
                    </Text>
                  </View>
                  <View style={styUD.kolPresentasi}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTertimbang}>
                    <Text style={[styUD.fontBaris, styUD.needPL]}>90</Text>
                  </View>
                  <View style={styUD.kolTerbilang}>
                    <Text style={styUD.fontTerbilang}>
                      Sembilan Puluh Koma Lima Nol
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styUD.boxTtd}>
            <View style={styUD.boxTtd2}>
              <View style={styUD.jabatanTtd}>
                <Text style={styUD.fontTtd}>
                  a.n. KEPALA BADAN PUSAT STATISTIK,{" "}
                </Text>
                <Text style={styUD.fontTtd}>
                  Kepala Biro Sumber Daya Manusia,{" "}
                </Text>
              </View>
              <View style={styUD.ttd}></View>
              <View style={styUD.jabatanTtd}>
                <Text style={styUD.fontTtd}>
                  Dr. Eni Lestariningsih, S.Si, M.A{" "}
                </Text>
                <Text style={styUD.fontTtd}>NIP. 197003101994012001 </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default TableUD;
