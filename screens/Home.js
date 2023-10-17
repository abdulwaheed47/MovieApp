import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProgressBar} from '../components';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.padding / 2,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.profile_photo}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={icons.airplay}
            style={{height: 25, width: 25, tintColor: COLORS.primary}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSeasonSection() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: SIZES.radius}}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MovieDetail', {selectedMovie: item})
              }>
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* thumbnail */}
                <ImageBackground
                  source={item.thumbnail}
                  resizeMode={'cover'}
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    justifyContent: 'flex-end',
                  }}
                  imageStyle={{borderRadius: 40}}>
                  <View
                    style={{
                      height: 50,
                      width: '100%',
                      flexDirection: 'row',
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          backgroundColor: COLORS.transparentWhite,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 40,
                        }}>
                        <Image
                          source={icons.play}
                          style={{
                            height: 15,
                            width: 15,
                            tintColor: COLORS.white,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          color: COLORS.white,
                          paddingHorizontal: SIZES.base,
                          ...FONTS.h3,
                        }}>
                        Play Now
                      </Text>
                    </View>
                    {item.stillWatching.length > 0 && (
                      <View style={{justifyContent: 'center'}}>
                        <Text style={{color: COLORS.white, ...FONTS.h4}}>
                          Still Watcing
                        </Text>
                      </View>
                    )}
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  function renderContinueWatchingSection() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        {/* {heder} */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h2, flex: 1}}>
            Continue Watching
          </Text>
          <Image
            source={icons.right_arrow}
            style={{height: 20, width: 20, tintColor: COLORS.primary}}
          />
        </View>
        {/* {list} */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          data={dummyData.continueWatching}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{marginTop: SIZES.padding}}
              onPress={() =>
                navigation.navigate('MovieDetail', {selectedMovie: item})
              }>
              <View
                style={{
                  marginLeft: index == 0 ? SIZES.padding : 20,
                  marginRight:
                    index == dummyData.continueWatching.length - 1
                      ? SIZES.padding
                      : 0,
                }}>
                {/* {thumbnail} */}
                <Image
                  source={item.thumbnail}
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.width / 3 + 60,
                    borderRadius: 20,
                  }}
                />
                {/* {name} */}
                <Text
                  style={{
                    color: COLORS.white,
                    marginTop: SIZES.base,
                    ...FONTS.h4,
                  }}>
                  {item.name}
                </Text>
                {/* {progressBar} */}
                <ProgressBar
                  containerStyle={{marginTop: SIZES.radius}}
                  barStyle={{height: 3}}
                  barPercentage={item.overallProgress}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      {renderHeader()}
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {renderSeasonSection()}
        {renderContinueWatchingSection()}
      </ScrollView>
    </View>
  );
};

export default Home;
