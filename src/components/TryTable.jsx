import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";


import { sty } from '../styles/sty';

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
