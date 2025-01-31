import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Search = () => {
  const [activeButton, setActiveButton] = useState('Rekomendasi');

  const buttons = ['Rekomendasi', 'Makanan', 'Minuman', 'Cemilan', 'Sayur, dan Buah'];

  return (
    <SafeAreaView style={tw`flex-1 p-2`}>
      <Text style={tw`text-sm text-gray-600 text-center mb-5`}>Bambu Apus, Jakarta Timur</Text>
      <Text style={tw`text-2xl font-bold mb-4`}>Sore, nunununnk</Text>
      
      <View style={tw`mb-4`}>
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 text-base`}
          placeholder="Cari Kesukaan kamu!"
          placeholderTextColor="#999"
        />
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-4`}>
        <View style={tw`flex-row`}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={tw`py-3 px-5 rounded-full mr-3 ${
                activeButton === button ? 'bg-green-500' : 'bg-gray-200'
              }`}
              onPress={() => setActiveButton(button)}
            >
              <Text style={tw`text-sm ${
                activeButton === button ? 'text-white' : 'text-black'
              }`}>
                {button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;