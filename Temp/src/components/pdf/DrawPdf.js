import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { height } from 'window-size';
import MyTable from '../steps/PictoGram.js'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    height:1000,
  }
});

// Create Document Component
const DrawPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      </View>
    </Page>
  </Document>
);

export default DrawPdf;


















