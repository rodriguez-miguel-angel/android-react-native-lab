import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, Pressable, Alert,  StyleSheet } from 'react-native';

// Step 6: Validate email
import { validateEmail } from '../utils';

// Step 5: Subscribe Screen component
const SubscribeScreen = () => {
  // Add subscribe screen code here

  const [email, onChangeEmail] = useState('');

  // See <https://reactnative.dev/docs/alert>.
  const createConfirmSubscriptionAlert = () =>
    Alert.alert('Confirm Subscription', 'Thanks for subscribing, stay tuned!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


  return <ScrollView style={styles.container}>
    <View style={styles.contentWrapper}>
      <Image
        style={styles.logo}
        source={require("../img/little-lemon-logo-grey.png")}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} />
      <Text style={styles.contentText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Type your email'}
          keyboardType={'email-address'}
      />
      <Pressable
        style={styles.subscribeButton}
        disabled={!validateEmail(email)}
        onPress={validateEmail(email) && createConfirmSubscriptionAlert}>
          <Text style={styles.subscribeText}>Subscribe</Text>
      </Pressable>
    </View>
</ScrollView>;
};

// Step 7: Style the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputBox: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    borderColor: '#000000',
    backgroundColor: '#EDEFEE',
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


export default SubscribeScreen;
