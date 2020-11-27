import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import Countries from './Countries';

export default class Home extends React.Component {

  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;

  isTablet = Dimensions.get('window').width > 1000;



  constructor(props){
    super(props);

    console.log(this.screenWidth);
    console.log(this.screenHeight);
    this.state = {
      isLoading: true,
      dataSource: null,
      country: this.props.route.params?.selectedCountry,
    };

    console.log('Country in Home.js : ' + this.props.route.params?.selectedCountry);

    this.getCoronaData();

  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  reshapeDate(oldDate){
    let l = oldDate.split('-');
    let newDate = this.check(l[2]) +' / ' + this.check(l[1]) +' / ' + this.check(l[0]);
    return newDate;
  }

  check(str){
    let output = str.length == 1 ? '0' : '';
    output += str;
    return output;
  }

  socialMedia(social){
    if (social == 'facebook'){
      Linking.openURL('https://facebook.com/bilalelmahdaoui');
    }
    if (social == 'instagram'){
      Linking.openURL('https://instagram.com/bilalelmahdaoui');
    }
    if (social == 'twitter'){
      Linking.openURL('https://twitter.com/bilalelmahdaoui');
    }
    if (social == 'github'){
      Linking.openURL('https://github.com/bilalelmahdaoui');
    }
  }

  getCoronaData() {

    //console.log('Current country : ' + this.state.country);
    return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then( (response) => response.json() )
    .then(data => {
      let tempArray = data[this.props.route.params?.selectedCountry]; /*this.props.navigation.getParam('selectedCountry')*/
      this.setState({
        working: false,
        isLoading: false,
        dataSource: tempArray[tempArray.length - 1],
      });
    });
  }

  render(){

    if (this.state.isLoading){
      return    <View style={{flex: 1, color: '#eee', alignItems: 'center', justifyContent: 'center', backgroundColor: '#98b8eb',}}>
                  <Text style={{color: '#eee',}}>Loading...</Text>
                </View>;
    }
    else if (this.state.working) {
      return <Text>HomeScreen</Text>;
    }

    else{
      return (

        <View style={styles.container}>

          <View style={styles.top}>
            <View style={styles.flagContainer}>
              <Image
              source={this.props.route.params?.selectedCountryFlag}
              style={styles.flagImage}
              />
            </View>
            <Text style={styles.countryName}>
                {this.state.country}
            </Text>
            <Text style={styles.dateStyle}>
                {this.reshapeDate(this.state.dataSource['date'])}
            </Text>
          </View>

          <View style={styles.center}>
            <View style={styles.countryButtonContainer}>
              <Button
                title = 'Change country...'
                style={styles.countryButton}
                color="#6981AC"
                onPress={()=>this.props.navigation.navigate('Countries')}/>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.mainItem}>
              <View style={styles.mainItemInner}>
                <View style={styles.mainItemTitle}>
                  <Text style={styles.textStyle1}>Confirmed cases</Text>
                </View>
                <View style={styles.mainItemNumber}>
                  <Text style={[styles.textStyle2, {color: '#6981AC', fontSize: ((this.state.dataSource['confirmed'].toString().length >= 6 && Dimensions.get('window').width <= 1000) ? 23 : 30)*Dimensions.get('window').height/667,}]}>{this.numberWithCommas(this.state.dataSource['confirmed'])}</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainItem}>
              <View style={styles.mainItemInner}>
                <View style={styles.mainItemTitle}>
                  <Text style={styles.textStyle1}>Active cases</Text>
                </View>
                <View style={styles.mainItemNumber}>
                  <Text style={[styles.textStyle2, {color: '#1f3861', fontSize: ((this.state.dataSource['confirmed'].toString().length >= 6 && Dimensions.get('window').width <= 1000) ? 23 : 30)*Dimensions.get('window').height/667,}]}>{this.numberWithCommas(parseInt(this.state.dataSource['confirmed'], 10) - parseInt(this.state.dataSource['deaths'], 10) - parseInt(this.state.dataSource['recovered'], 10))}</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainItem}>
              <View style={styles.mainItemInner}>
                <View style={styles.mainItemTitle}>
                  <Text style={styles.textStyle1}>Deaths</Text>
                </View>
                <View style={styles.mainItemNumber}>
                  <Text style={[styles.textStyle2, {color: '#c70000', fontSize: ((this.state.dataSource['confirmed'].toString().length >= 6 && Dimensions.get('window').width <= 1000) ? 23 : 30)*Dimensions.get('window').height/667,}]}>{this.numberWithCommas(this.state.dataSource['deaths'])}</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainItem}>
              <View style={styles.mainItemInner}>
                <View style={styles.mainItemTitle}>
                  <Text style={styles.textStyle1}>Recoveries</Text>
                </View>
                <View style={styles.mainItemNumber}>
                  <Text style={[styles.textStyle2, {color: 'green', fontSize: ((this.state.dataSource['confirmed'].toString().length >= 6 && Dimensions.get('window').width <= 1000) ? 23 : 30)*Dimensions.get('window').height/667,}]}>{this.numberWithCommas(this.state.dataSource['recovered'])}</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={styles.footer}>
            <View style={styles.creditsContainer}>
              <Text style={[styles.textStyle, {fontSize: 15, fontWeight: '300',}]}>by : @bilalelmahdaoui</Text>
            </View>
            <View style={styles.socialMediaContainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/bilalelmahdaoui')}>
                <Image  source = {require('./assets/social-media/facebook.png')}
                        style={styles.socialMediaIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/bilalelmahdaoui')}>
                <Image  source = {require('./assets/social-media/instagram.png')}
                        style={styles.socialMediaIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/bilalelmahdaoui')}>
                <Image  source = {require('./assets/social-media/twitter.png')}
                        style={styles.socialMediaIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/bilalelmahdaoui')}>
                <Image  source = {require('./assets/social-media/github.png')}
                        style={styles.socialMediaIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/bilal-el-mahdaoui-88645b168/')}>
                <Image  source = {require('./assets/social-media/linkedin.png')}
                        style={styles.socialMediaIcon} />
              </TouchableOpacity>
            </View>
          </View>

        </View>









      );

    }

  }
}

const styles = StyleSheet.create({
  textStyle: { // for @bilalelmahdaoui
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Family1',
  },
  textStyle1: { // for titles confirmed/active/...
    color: '#1f3861',
  //  fontSize: 13*Dimensions.get('window').height/667,
    fontSize: Dimensions.get('window').width > 1000 ? 25 : 15,
    fontFamily: 'TitleFamily2',
  },
  textStyle2: { // For numbers
    color: 'white',

    fontFamily: 'TitleFamily1',
  },
  textStyle3: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  countryName: {
    fontSize: 32,
    fontFamily: 'TitleFamily2',
  },
  dateStyle: {
    fontWeight: 'bold',
    fontFamily: 'Family1',
  },
  flagImage: {
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  container: {
    flex: 1,
  },
  top: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98b8eb',
  },


  center: {
    height: '10%',
    backgroundColor: '#6481b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: '40%',
    backgroundColor: '#1f3861',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    height: '10%',
    backgroundColor: '#6481b0',
    alignItems: 'center',
    justifyContent: 'center',
  },


  flagContainer: {
    width: Dimensions.get('window').height*0.45*0.6,
    height: Dimensions.get('window').height*0.45*0.4,

    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  mainItem: {
    width: '50%',
    height: '50%',
    padding: 10,
  },
  mainItemInner: {
    flex: 1,
    backgroundColor: '#eee',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainItemTitle: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98b8eb',
  },
  mainItemNumber: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryButtonContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,

  },
  creditsContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  socialMediaContainer: {
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
