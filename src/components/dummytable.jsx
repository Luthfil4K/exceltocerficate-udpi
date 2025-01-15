
      {/* <div id="content" style={{ padding: "10px", backgroundColor:'f0f0f0',color:'black' }}>
        <h1 style={{ color: 'black' }}>Hello PDF</h1>
        <p style={{ color: 'black' }}>This content will appear in the PDF.</p>
        <div style={styles.layout}>
          <div style={styles.kop}>
            <p style={styles.kop.bps}>BADAN PUSAT STATISTIK</p>
            <p style={styles.kop.namaSurat}>SURAT TANDA LULUS UJIAN DINAS</p>
            <p style={styles.kop.nomorSurat}>Nomor : 531250/UD/I/2024</p>
          </div>
          <div style={styles.isi}>
            <p style={styles.isi.isiSurat}>
              Badan Pusat Statistik berdasarkan Peraturan Pemerintah Nomor 11
              Tahun 2017 dan ketentuan-ketentuan pelaksanaannya menyatakan bahwa
              :
            </p>
          </div>
          <div style={styles.keteranganIsi}>
            <div style={styles.keteranganIsi.isiKiri}>
              <p style={styles.keteranganIsi.formatIdentitas}>Nama</p>
              <p style={styles.keteranganIsi.formatIdentitas}>NIP</p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                Tempat, Tanggal Lahir
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                Pangkat/Golongan
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>Unit Kerja</p>
            </div>
            <div style={styles.keteranganIsi.isiKanan}>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.nomorIjazah}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>: {data.nip}</p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.tempatLahir}, {data.tanggalLahir}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.pangkat / data.golongan}
              </p>
              <p style={styles.keteranganIsi.formatIdentitas}>
                : {data.unitKerja}
              </p>
            </div>
          </div>
          <div style={styles.keteranganLulus}>
            <p style={styles.keteranganLulus.lulusp}>LULUS</p>
          </div>
          <div style={styles.penutup}>
            <p style={styles.penutup.penutupp}>
              Ujian Dinas Tingkat I Badan Pusat Statistik tahun 2024.
            </p>
          </div>
   
        </div>
      </div> */}

      {/* <button onClick={handleDownload}>unduh disiini</button> */}

      {/* <h2>Tabel Nilai Siswa</h2>
      <div style={tableStyles.page}>
        <h2>Tabel Nilai Siswa</h2>
        <div style={tableStyles.section}>
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  NO
                </th>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  MATERI UJIAN DINAS
                </th>
                <th style={tableStyles.cellNilai} colSpan="2">
                  NILAI
                </th>
                <th style={tableStyles.tableHeaderNoBottomBorder} rowspan="2">
                  NILAI TERTIMBANG DENGAN HURUF
                </th>
              </tr>
              <tr>
                
                <th style={tableStyles.cellnoHeight}>PRESENTASI (NPR)</th>
                <th style={tableStyles.cellnoHeight}>TERTIMBANG (NT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableStyles.noKolom}>(1)</td>
                <td style={tableStyles.noKolom}>(2)</td>
                <td style={tableStyles.noKolom}>(3)</td>
                <td style={tableStyles.noKolom}>(4)</td>
                <td style={tableStyles.noKolom}>(5)</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="4">
                  1
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK A</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>a. Pancasila</td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. UUD 1945</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>c. Propenas</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  2
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK B</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Peraturan Perundang-undangan dibidang kepegawaian
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. KORPRI</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="2">
                  3
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK C</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  Pengetahuan Perkantoran
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  4
                </td>
                <td style={tableStyles.tableCellD}>KELOMPOK D</td>
                <td style={tableStyles.tableCellD}></td>
                <td style={tableStyles.tableCellD}></td>
                <td style={tableStyles.tableCellD}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Tugas pokok, fungsi, struktur organisasi dan tata kerja
                  instansi yang bersangkutan
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>
                  b. Pengetahuan mengenai substantive instansi yang bersangkutan
                  dan pengetahuan lain yang ditentukan oleh pimpinan instansi
                  yang bersangkutan
                </td>
                <td style={tableStyles.tableCell}>80</td>
                <td style={tableStyles.tableCell}>88</td>
                <td style={tableStyles.tableCell}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell} rowSpan="3">
                  5
                </td>
                <td style={tableStyles.tableCellKelompok}>KELOMPOK E</td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
                <td style={tableStyles.tableCellKelompok}></td>
              </tr>
              <tr>
                <td style={tableStyles.tableCellKelompok}>
                  a. Bahasa Indonesia
                </td>
                <td style={tableStyles.tableCellKelompok}>80</td>
                <td style={tableStyles.tableCellKelompok}>88</td>
                <td style={tableStyles.tableCellKelompok}>B</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}>b. Sejarah Indonesia</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
              <tr>
                <td style={tableStyles.tableCell}></td>
                <td style={tableStyles.tableCell}>Jumlah</td>
                <td style={tableStyles.tableCell}>85</td>
                <td style={tableStyles.tableCell}>90</td>
                <td style={tableStyles.tableCell}>A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}