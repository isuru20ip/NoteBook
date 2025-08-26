import React from 'react';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Pressable, Alert, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function SignUpScreen() {

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [selectedCity, setSelectedCity] = useState('');
  const cities = ["Anuradhapura", "Kurunagala", "Kandy", "Colombo", "Galle"];


  return (

    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scollcontent}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Create Account</Text>
          <Text style={styles.subTitle}>Fill in the infromation below to create your account.</Text>
        </View>
        <View style={styles.form}>
          <Pressable onPress={pickImage} style={styles.ImageUploader}>
            {image ? (<Image source={{ uri: image }} style={styles.profileImage} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>+</Text>
                <Text style={styles.imageLabal}>Add Image</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labal}>Full Name</Text>
          <TextInput placeholder='your full name here' style={styles.input} />

          <Text style={styles.labal}>Email</Text>
          <TextInput placeholder='Email' style={styles.input} />

          <Text style={styles.labal}>Password</Text>
          <TextInput placeholder='Password' secureTextEntry style={styles.input} />

          <Text style={styles.labal}>Comfirm Password</Text>
          <TextInput placeholder='Comfirm Password' secureTextEntry style={styles.input} />

          <View style={styles.inputContainer}>
            <Text style={styles.labal}>City</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCity}
                onValueChange={(itemValue) =>
                  setSelectedCity(itemValue)
                }>
                <Picker.Item label="Select your city" value={''} />
                {cities.map((city, index) => (
                  <Picker.Item key={index} label={city} value={city} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.backButton} onPress={() => Alert.alert('Back button pressed')}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>

          <Pressable style={styles.saveButton} onPress={() => Alert.alert('Account created successfully!')}>
            <Text style={styles.saveButtonText}>Create Account</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  scollcontent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    padding: 15,
  },
  ImageUploader: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 120,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 120,
    borderColor: '#3f3e3eff',
    backgroundColor: '#e1e2e6ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed'
  },
  imageText: {
    fontSize: 40,
  },
  imageLabal: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
  inputContainer: {
    marginBottom: 15,
  },
  labal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#313030ff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#313030ff',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#e0e0e0ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

