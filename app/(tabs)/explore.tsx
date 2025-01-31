import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const MenuItem = ({ icon, title, hasArrow = true }) => (
  <View style={tw`flex-row items-center p-4 border-b border-gray-100`}>
    <Ionicons name={icon} size={24} color="#333" />
    <Text style={tw`flex-1 ml-4 text-base`}>{title}</Text>
    {hasArrow && <Ionicons name="chevron-forward" size={24} color="#333" />}
  </View>
);

export default function TabTwoScreen() {
  const [name, setName] = useState('iwan');
  const [email, setEmail] = useState('iwangsigma@gmail.com');
  const [address, setAddress] = useState('Jl. Bambu Apus 3, Jakarta Timur');
  const [password, setPassword] = useState('nununun');
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`h-[150px] bg-green-500`}>
      </View>
      <View style={tw`bg-white -mt-10 mx-5 rounded-xl p-6 `}>
        <Text style={tw`text-2xl font-bold mb-6 text-gray-800`}>Profile Information</Text>
        <View style={tw`space-y-4`}>
          <View>
            <Text style={tw`text-gray-600 mb-1 text-sm font-medium`}>Full Name</Text>
            <View style={tw`flex-row items-center bg-gray-50 rounded-xl shadow-sm border border-gray-200`}>
              <Ionicons name="person-outline" size={20} color="#6B7280" style={tw`ml-3`} />
              <TextInput
                style={tw`flex-1 text-base py-3.5 px-3 text-gray-700`}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
              />
            </View>
          </View>

          <View>
            <Text style={tw`text-gray-600 mb-1 text-sm font-medium`}>Email Address</Text>
            <View style={tw`flex-row items-center bg-gray-50 rounded-xl shadow-sm border border-gray-200`}>
              <Ionicons name="mail-outline" size={20} color="#6B7280" style={tw`ml-3`} />
              <TextInput
                style={tw`flex-1 text-base py-3.5 px-3 text-gray-700`}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View>
            <Text style={tw`text-gray-600 mb-1 text-sm font-medium`}>Address</Text>
            <View style={tw`flex-row items-center bg-gray-50 rounded-xl shadow-sm border border-gray-200`}>
              <Ionicons name="location-outline" size={20} color="#6B7280" style={tw`ml-3`} />
              <TextInput
                style={tw`flex-1 text-base py-3.5 px-3 text-gray-700`}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter your address"
                multiline
              />
            </View>
          </View>

          <View>
            <Text style={tw`text-gray-600 mb-1 text-sm font-medium`}>Password</Text>
            <View style={tw`flex-row items-center bg-gray-50 rounded-xl shadow-sm border border-gray-200`}>
              <Ionicons name="lock-closed-outline" size={20} color="#6B7280" style={tw`ml-3`} />
              <TextInput
                style={tw`flex-1 text-base py-3.5 px-3 text-gray-700`}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          </View>
        </View>
      </View>
      <View style={tw`bg-white mt-5 mx-5 rounded-lg overflow-hidden`}>
        <MenuItem icon="document-text-outline" title="Kebijakan dan Privasi" />
        <MenuItem icon="time-outline" title="Riwayat Order" />

      </View>
 
        <View style={tw`flex-row mx-5 mt-5 justify-between`}>
          <TouchableOpacity style={tw`bg-red-500 p-4 rounded-lg flex-row justify-between w-36`}>
            <Text style={tw`text-white text-center font-bold text-lg`}>Logout</Text>       
            <Ionicons name="log-out-outline" size={24} color="white" style={tw`ml-2`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-black p-4 rounded-lg flex-row justify-between w-36`}>    
            <Text style={tw`text-white text-center font-bold text-lg`}>edit profile</Text> 
            <Ionicons name="pencil-outline" size={24} color="white" style={tw`ml-2`} />
          </TouchableOpacity>
        </View>
           
      </ScrollView>
  );
}