import React from 'react'
import {Card, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Document, Page, Text, View, StyleSheet,Image  } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  // page: {
  //   flexDirection: 'column',
  //   backgroundColor: '#FFFFFF',
  //   backgroundImage:'../../public/bingkai-01.png',
  //   backgroundImage:'./bingkai-01.png',
  //   backgroundImage:'bingkai-01.png',
  // },

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
 
  header:{
    height:200,
    padding: 10,
    flexGrow: 1,
    // backgroundColor:'red',  
  },
  content: {
    padding: 10,
    flexGrow: 1,
    height:300,
    // backgroundColor:'blue'
 },
  footer:{
  padding: 10,
  flexGrow: 1,
  backgroundColor:'yellow',
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
                      src="bingkai-01.png"  // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                      style={styles.backgroundImage}
                    />
                        <View style={styles.header}>
                            <Text>Section #1</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>Section #2</Text>
                        </View>
                    </Page>
                    <Page size="A4" style={styles.page}>
                    <Image
                      src="bingkai-01.png"  // Pastikan path gambar sudah benar, atau gunakan require('./bingkai-01.png')
                      style={styles.backgroundImage}
                    />
                        <View style={styles.header}>
                            <Text>Section #1</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>Section #2</Text>
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
