import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar} from '../components';

const MovieDetail = ({route, navigation}) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  React.useEffect(() => {
    let {selectedMovie} = route.params;
    setSelectedMovie(selectedMovie);
  }, []);

  function renderHeaderBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}>
          <Image
            source={icons.left_arrow}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}>
          <Image
            source={icons.upload}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <ImageBackground
        source={selectedMovie?.details?.image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}>
        <View style={{flex: 1}}>
          {renderHeaderBar()}
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['transparent', '#000']}
              style={{
                width: '100%',
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.body4}}>
                {selectedMovie?.details?.season}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h1,
                  marginTop: SIZES.base,
                }}>
                {selectedMovie?.name}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderDeatail() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.base,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={[styles.category, {marginLeft: 0}]}>
          <Text style={{color: COLORS.white, ...FONTS.h4}}>
            {selectedMovie?.details?.age}
          </Text>
        </View>
        <View style={[styles.category, {paddingHorizontal: SIZES.padding}]}>
          <Text style={{color: COLORS.white, ...FONTS.h4}}>
            {selectedMovie?.details?.genre}
          </Text>
        </View>
        <View style={[styles.category]}>
          <Image source={icons.star} style={{height: 15, width: 15}} />
          <Text
            style={{color: COLORS.white, ...FONTS.h4, marginLeft: SIZES.base}}>
            {selectedMovie?.details?.ratings}
          </Text>
        </View>
      </View>
    );
  }

  function renderMovieDeatils() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: 'space-around',
        }}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, color: COLORS.white, ...FONTS.h4}}>
              {selectedMovie?.details?.currentEpisode}
            </Text>
            <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
              {selectedMovie?.details?.runningTime}
            </Text>
          </View>
          <ProgressBar
            containerStyle={{marginTop: SIZES.radius}}
            barStyle={{height: 5, borderRadius: 3}}
            barPercentage={selectedMovie?.details?.progress}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: SIZES.padding,
            borderRadius: 15,
            backgroundColor: COLORS.primary,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            {selectedMovie?.details?.progress == '0%'
              ? 'WATCH NOW'
              : 'CONTINUE WATCH'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{flex: 1, backgroundColor: COLORS.black}}>
      {renderHeader()}
      {renderDeatail()}
      {renderMovieDeatils()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1,
  },
});
export default MovieDetail;
