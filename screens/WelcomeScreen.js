import * as React from 'react';
import { View, ScrollView, Image, Text, Pressable, StyleSheet } from 'react-native';

// Step 4: Welcome screen component

const WelcomeScreen = ({ navigation }) => {

  // Add welcome screen code here.
  return <ScrollView style={styles.container}>
    <View style={styles.contentWrapper}>
      <Image
        style={styles.logo}
        source={require("../img/little-lemon-logo.png")}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} />
      <Text style={styles.contentText}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable
        style={styles.subscribeButton}
        onPress={()=> navigation.navigate('Subscribe')}>
          <Text style={styles.subscribeText}>Newsletter</Text>
      </Pressable>
    </View>
  </ScrollView>;
};


// Step 7: Style the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  contentText: {
    padding: 40,
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
  },
  subscribeButton: {
    width: 300,
    padding: 10,
    margin: 100,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#495E57',
    backgroundColor: '#495E57',
  },
  subscribeText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});


export default WelcomeScreen;

