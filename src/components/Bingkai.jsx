import React from 'react'
import {Card, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Document, Page, Text, View, StyleSheet,Image,Font   } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import FontRobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf'
import FontRobotoBoldItalic from '../assets/fonts/Roboto/Roboto-BoldItalic.ttf'

// Font.register({ family: 'Open Sans', src: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap' });

Font.register({
  family: 'Roboto', // Nama font keluarga
  fonts: [
    {
      src: FontRobotoRegular,
    },
    {
      src: FontRobotoBoldItalic,
      fontWeight: 'bold',
    },
    {
      src: FontUbuntu700,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ], 
});

const styles = StyleSheet.create({
  // fontFamily:'Roboto'

  page: {
    position: 'relative', // Membuat elemen menjadi relatif agar gambar bisa ditempatkan di atasnya
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute', // Menempatkan gambar di belakang semua elemen lainnya
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    zIndex:10 // Menjaga proporsi gambar agar menutupi seluruh halaman
  },
  layout: {
    paddingTop: 220,
    paddingHorizontal:100,
    flexGrow: 1,
    backgroundColor:'rgba(0, 0, 255, 0.2)'
  },
  kop:{
    width:'100%',
    height:60,
    backgroundColor:'rgba(0, 255, 255, 0.4)',
    alignItems:'center',
    marginBottom:10,
    bps:{
      fontSize:12,
      marginBottom:10,
      // textDecoration:'italic',
      // fontStyle: 'italic',  // Membuat font miring
      // textDecorationStyle:'italic',
      fontFamily:'Roboto'
    },
    namaSurat: {
      fontSize:14
    },
    nomorSurat:{
      fontSize:12,
    }
  },
  isi:{
    width:'100%',
    height:40,
    backgroundColor:'rgba(20, 100, 255, 0.3)',
    marginBottom:20,
    isiSurat:{
      fontSize:12
    }
  },
  keteranganIsi:{
    width:'100%',
    height:100,
    backgroundColor:'rgba(20, 20, 255, 0.2)',
    marginBottom:10,
    display:'flex',
    flexDirection:'row',
    isiKiri:{
      width:'35%',
      height:100,
      backgroundColor:'rgba(20, 20, 55, 0.2)',
     
    },
    isiKanan:{
      width:'66%',
      height:100,
      backgroundColor:'rgba(20, 20, 155, 0.9)',
     
    },
    formatIdentitas:{
      marginBottom:4,
      fontSize:12,
    },
  },
  keteranganLulus:{
    width:'100%',
    height:30,
    backgroundColor:'rgba(20, 20, 255, 0.2)',
    marginBottom:10,
    alignItems:'center',
    lulusText:{
      fontSize:20,
      fontStyle:'bold'
    }
  },
  penutup:{
    width:'100%',
    height:30,
    backgroundColor:'rgba(20, 20, 255, 0.2)',
    marginBottom:20,
    penutupText:{
      fontSize:12
    }
  },
  fotoTtd:{
    width:'100%',
    height:120,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'rgba(20, 20, 255, 0.2)',
    isiKiri:{
      paddingLeft:60,
      width:'50%',
      height:120,
      backgroundColor:'rgba(200, 10, 20, 0.1)',
      layoutFoto:{
        width:90,
        height:120,
        border:'3px black',
        backgroundColor:'rgba(200, 10, 20, 0.4)',
      }
    },
    isiKanan:{
      width:'60%',
      height:120,
      alamat:{
        alignItems:'center',
        height:50,
        backgroundColor:'rgba(200, 10, 20, 0.4)'
      },
      ttd:{
        height:60,
        backgroundColor:'rgba(10, 110, 220, 0.1)'
      },
      namaTtd:{
        height:30,
        alignItems:'center',
        backgroundColor:'rgba(200, 10, 20, 0.2)'
      },
      normalText:{
        fontSize:12
      }
    },
  },
  normalText:{
    fontSize:11
  }
});

const Bingkai = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2}}>
        <Grid size={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ height: 700, width: 1000 }}>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <Document>
                    <Page size="A4" style={styles.page}>
                    <Image
                      src="bingkaiGaruda-01-01.png"  // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                      style={styles.backgroundImage}
                    />
                        <View style={styles.layout}>
                            <View style={styles.kop}>
                              <Text style={styles.kop.bps}>BADAN PUSAT STATISTIK</Text>
                              <Text style={styles.kop.namaSurat}>SURAT TANDA LULUS UJIAN DINAS</Text>
                              <Text style={styles.kop.nomorSurat}>Nomor  : 531250/UD/I/2024</Text>
                            </View>
                            <View style={styles.isi}>
                              <Text style={styles.isi.isiSurat} >Badan Pusat Statistik berdasarkan Peraturan Pemerintah Nomor 11 Tahun 
                                2017 dan ketentuan-ketentuan pelaksanaannya menyatakan bahwa :
                              </Text>
                            </View>
                            <View style={styles.keteranganIsi}>
                              <View style={styles.keteranganIsi.isiKiri}>
                                <Text style={styles.keteranganIsi.formatIdentitas}>Nama</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>NIP</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>Tempat, Tanggal Lahir</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>Pangkat/Golongan</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>Unit Kerja</Text>
                              </View>
                             <View style={styles.keteranganIsi.isiKanan}>
                                <Text style={styles.keteranganIsi.formatIdentitas}>: Aloysius Jehamat</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>: 198308122009111001</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>: Kolong/Manggarai, 12 Agustus 1983</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>: Pengatur Tk. I/II/d</Text>
                                <Text style={styles.keteranganIsi.formatIdentitas}>: BPS Kabupaten Manggarai</Text>
                             </View>
                            </View>
                            <View style={styles.keteranganLulus}>
                              <Text style={styles.keteranganLulus.lulusText}>LULUS</Text>
                            </View>
                            <View style={styles.penutup}>
                              <Text style={styles.penutup.penutupText}>Ujian Dinas Tingkat I Badan Pusat Statistik tahun 2024.</Text>
                            </View>
                            <View style={styles.fotoTtd}>
                              <View style={styles.fotoTtd.isiKiri}>
                                {/* <View style={styles.fotoTtd.isiKiri.layoutFoto}></View> */}
                                <Image
                                  src="Foto_Tukimin - ariv ahmad97.jpeg"  // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                                  style={styles.fotoTtd.isiKiri.layoutFoto}
                                />
                              </View>
                              <View style={styles.fotoTtd.isiKanan}>
                                <View style={styles.fotoTtd.isiKanan.alamat}>
                                  <Text style={styles.fotoTtd.isiKanan.normalText}>Jakarta, 10 Agustus 2024</Text>
                                  <Text style={styles.fotoTtd.isiKanan.normalText}>a.n. KEPALA BADAN PUSAT STATISTIK,</Text>
                                  <Text style={styles.fotoTtd.isiKanan.normalText}>Kepala Biro Sumber Daya Manusia,</Text>
                                </View>
                                <View style={styles.fotoTtd.isiKanan.ttd}>
                                {/* <Text style={styles.fotoTtd.isiKanan.normalText}>Jakarta, 10 Agustus 2024</Text>   */}
                                </View>
                                <View style={styles.fotoTtd.isiKanan.namaTtd}> 
                                  <Text style={styles.fotoTtd.isiKanan.normalText}>Dr. Eni Lestariningsih, S.Si, M.A.</Text>
                                  <Text style={styles.fotoTtd.isiKanan.normalText}>NIP . 197003101994012001</Text>
                                </View>
                              </View>
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
            </Card>
        </Grid>
        
        
    </Grid>

  )
}

export default Bingkai
