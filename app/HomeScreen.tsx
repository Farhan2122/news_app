import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>News</Text>
      </View>
      <FlatList
      data={data}
      renderItem={}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{
        paddingVertical: 5,
        backgroundColor:'gray'
    },
    headerText:{
          color:'white',
          alignSelf:'center'
    }
})