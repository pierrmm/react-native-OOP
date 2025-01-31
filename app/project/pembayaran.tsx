import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const PaymentButton = ({ icon, title, color }) => (
  <TouchableOpacity style={tw`bg-${color} p-4 rounded-lg flex-row items-center justify-between mb-2`}>
    <Text style={tw`text-white font-bold text-lg`}>{title}</Text>
    <Ionicons name={icon} size={24} color="white" />
  </TouchableOpacity>
);

export default function TabTwoScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-5`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Pesanan Kamu</Text>

        <View style={tw`mb-4`}>
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-lg`}>2x burung asep</Text>
            <Text style={tw`text-lg`}>Rp 100.000</Text>
          </View>
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-lg mb-2`}>Biaya Aplikasi</Text>
            <Text style={tw`text-lg mb-2`}>Rp 2.000</Text>
          </View>
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-lg mb-2`}>Biaya Pesan Antar</Text>
            <Text style={tw`text-lg mb-2`}>Rp 5.000</Text>
          </View>
        </View>
          <View style={tw`h-[1px] bg-black mb-4 p-0.2`} />
        <View style={tw`flex-row justify-between mb-2`}>
          <Text style={tw`text-lg font-bold`}>Total Biaya</Text>
          <Text style={tw`text-lg font-bold`}>Rp 107.000</Text>
        </View>


        <View style={tw`mb-4 flex-row justify-between`}>
          <Text style={tw`text-base text-gray-500`}>Estimasi Waktu Antar</Text>
          <Text style={tw`text-base text-gray-500 font-bold`}>30-35 mins</Text>
        </View>

        <PaymentButton icon="cash-outline" title="Bayar Cash aja" color="gray-800" />
        <PaymentButton icon="card-outline" title="Pake Ovo" color="purple-600" />
        <PaymentButton icon="qr-code-outline" title="Pake Qris" color="red-600" />
      </View>
    </ScrollView>
  );
}