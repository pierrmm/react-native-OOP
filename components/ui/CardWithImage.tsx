import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Link } from 'expo-router';

const CardWithImage = ({ title, desc, img, price }) => {
    return (
        <View style={tw`bg-white rounded-2xl mx-1 mt-4 shadow-lg overflow-hidden`}>
            <Image style={tw`w-full h-50 object-cover`} source={img} />
            <View style={tw`flex-1 p-4`}>
                <Text style={tw`text-lg font-semibold text-gray-800 mb-1`}>{title}</Text>
                <Text style={tw`text-sm text-gray-600 mb-2`}>{desc}</Text>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-lg font-bold mb-2`}>{price}</Text>
                    <Link href="/project/detail" asChild>
                    <TouchableOpacity style={tw`bg-green-500 rounded-lg shadow-md py-1.5 px-3`}>
                        <Text style={tw`text-white text-base`}><Ionicons name="cart-outline" size={24} color="white" /></Text>
                    </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
};

export default CardWithImage;