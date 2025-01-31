import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CardWithDesc from '@/components/ui/CardWithDesc'
import CardWithImage from '@/components/ui/CardWithImage'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import Search from '@/components/ui/search'
import tw from 'twrnc'

const index = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <View style={tw`flex-1 p-4`}>
       
          <Search />
          <View style={tw`flex-row justify-between flex-wrap`}>
            <View style={tw`w-[48%] mx-1 mb-4 `}>
              <CardWithImage
                title={'Burung Asep'}
                img={require('../../assets/images/asep.png')}
                desc={'burung asep lari kecilebut'}
                price={'Rp 100.000'}
              />
            </View>
            <View style={tw`w-[48%] mx-1 mb-4`}>
              <CardWithImage
                title={'Burung Asep'}
                img={require('../../assets/images/asep.png')}
                desc={'burung asep lari kecilebut'}
                price={'Rp 100.000'}
              />
            </View>
            <View style={tw`w-[48%] mx-1 mb-4`}>
              <CardWithImage
                title={'Burung Asep'}
                img={require('../../assets/images/asep.png')}
                desc={'burung asep lari kecilebut'}
                price={'Rp 100.000'}
              />
            </View>
            <View style={tw`w-[48%] mx-1 mb-4`}>
              <CardWithImage
                title={'Burung Asep'}
                img={require('../../assets/images/asep.png')}
                desc={'burung asep lari kecilebut'}
                price={'Rp 100.000'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index