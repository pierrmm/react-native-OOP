import { Fontisto } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

export class detail extends Component {
  state = {
    quantity: 1
  }

  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
  }

  decrementQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1
      }))
    }
  }

  render() {
    return (
    <SafeAreaView>
      <ScrollView>
              <View style={tw`items-center `}>
                <Image 
                  source={require('../../assets/images/asep.png')} 
                  style={tw`w-95 h-100 rounded-lg mb-4`}
                />
              </View>
                <View style={tw`p-8`}>
                    <Text style={tw`text-4xl font-bold`}>Burung Asep</Text>
                    <Text style={tw`text-sm mb-3`}><Fontisto name="fire" size={12} color="#666666"/>  26 Mins</Text>
                    <Text style={tw`text-gray-600 leading-5`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda architecto culpa quidem magni unde recusandae repellat, aut sapiente dolore quo! Quis voluptatem aut commodi, repudiandae deleniti accusamus sint quas!
                    </Text>
                    <View style={tw`flex-row justify-between mt-5`}>
                      <View style={tw`bg-green-500 shadow-md p-4  rounded-lg flex-[0.5] mr-2.5`}>
                        <Text style={tw`text-white text-center font-bold`}>100.000</Text>
                      </View>
                      
        
                      <View style={tw`flex-row items-center rounded-lg px-2.5`}>
                        <TouchableOpacity onPress={this.decrementQuantity} style={tw`p-2.5`}>
                          <Text style={tw`text-xl font-bold text-white bg-green-500 rounded-lg px-2.5`}>-</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-base font-bold mx-2.5`}>{this.state.quantity}</Text>
                        <TouchableOpacity onPress={this.incrementQuantity} style={tw`p-2.5`}>
                          <Text style={tw`text-xl font-bold text-white bg-green-500 rounded-lg px-2.5`}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={tw`flex-row justify-between mt-5`}>
                      <Link href="/project/pembayaran" asChild>
                      <TouchableOpacity style={tw`bg-black shadow-md p-4 rounded-lg flex-1 mr-2.5`}>
                        <Text style={tw`text-white text-center font-bold`}>Pesan Sekarang</Text>
                      </TouchableOpacity>
                      </Link>

                      <TouchableOpacity style={tw`bg-black shadow-md p-4 rounded-lg flex-1 mr-2.5`}>
                        <Text style={tw`text-white text-center font-bold`}>Tambahkan Keranjang</Text>
                      </TouchableOpacity>
                    </View>
                </View>
      </ScrollView>
    </SafeAreaView>
    )
  }
}

export default detail