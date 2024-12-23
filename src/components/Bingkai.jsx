import React from 'react'
import {Card, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  header:{
    height:200,
    padding: 10,
    flexGrow: 1,
    backgroundColor:'red',  
  },
  content: {
    padding: 10,
    flexGrow: 1,
    height:300,
    backgroundColor:'blue'
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
                            <View style={styles.header}>
                                <Text>Section #1</Text>
                            </View>
                            <View style={styles.section}>
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
