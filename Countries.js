/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  } from 'react-native';

  export default class Countries extends Component {


    CountriesData = [
    {name: 'Afghanistan', imageSource: require('./assets/flags/AF.png')},
    {name: 'Albania', imageSource: require('./assets/flags/AL.png')},
    {name: 'Algeria', imageSource: require('./assets/flags/DZ.png')},
    {name: 'Andorra', imageSource: require('./assets/flags/AD.png')},
    {name: 'Angola', imageSource: require('./assets/flags/AO.png')},
    {name: 'Antigua and Barbuda', imageSource: require('./assets/flags/AG.png')},
    {name: 'Argentina', imageSource: require('./assets/flags/AR.png')},
    {name: 'Armenia', imageSource: require('./assets/flags/AM.png')},
    {name: 'Australia', imageSource: require('./assets/flags/AU.png')},
    {name: 'Austria', imageSource: require('./assets/flags/AT.png')},
    {name: 'Azerbaijan', imageSource: require('./assets/flags/AZ.png')},
    {name: 'Bahamas', imageSource: require('./assets/flags/BS.png')},
    {name: 'Bahrain', imageSource: require('./assets/flags/BH.png')},
    {name: 'Bangladesh', imageSource: require('./assets/flags/BD.png')},
    {name: 'Barbados', imageSource: require('./assets/flags/BB.png')},
    {name: 'Belarus', imageSource: require('./assets/flags/BY.png')},
    {name: 'Belgium', imageSource: require('./assets/flags/BE.png')},
    {name: 'Belize', imageSource: require('./assets/flags/BZ.png')},
    {name: 'Benin', imageSource: require('./assets/flags/BJ.png')},
    {name: 'Bhutan', imageSource: require('./assets/flags/BT.png')},
    {name: 'Bolivia', imageSource: require('./assets/flags/BO.png')},
    {name: 'Bosnia and Herzegovina', imageSource: require('./assets/flags/BA.png')},
    {name: 'Botswana', imageSource: require('./assets/flags/BW.png')},
    {name: 'Brazil', imageSource: require('./assets/flags/BR.png')},
    {name: 'Brunei', imageSource: require('./assets/flags/BN.png')},
    {name: 'Bulgaria', imageSource: require('./assets/flags/BG.png')},
    {name: 'Burkina Faso', imageSource: require('./assets/flags/BF.png')},
    {name: 'Burundi', imageSource: require('./assets/flags/BI.png')},
    {name: 'Cambodia', imageSource: require('./assets/flags/KH.png')},
    {name: 'Cameroon', imageSource: require('./assets/flags/CM.png')},
    {name: 'Canada', imageSource: require('./assets/flags/CA.png')},
    {name: 'Cabo Verde', imageSource: require('./assets/flags/CV.png')},
    {name: 'Central African Republic', imageSource: require('./assets/flags/CF.png')},
    {name: 'Chad', imageSource: require('./assets/flags/TD.png')},
    {name: 'Chile', imageSource: require('./assets/flags/CL.png')},
    {name: 'China', imageSource: require('./assets/flags/CN.png')},
    {name: 'Colombia', imageSource: require('./assets/flags/CO.png')},
    {name: 'Comoros', imageSource: require('./assets/flags/KM.png')},
    {name: 'Congo (Brazzaville)', imageSource: require('./assets/flags/CG.png')},
    {name: 'Congo (Kinshasa)', imageSource: require('./assets/flags/CD.png')},
    {name: 'Costa Rica', imageSource: require('./assets/flags/CR.png')},
    {name: 'Cote d\'Ivoire', imageSource: require('./assets/flags/CI.png')},
    {name: 'Croatia', imageSource: require('./assets/flags/HR.png')},
    {name: 'Cuba', imageSource: require('./assets/flags/CU.png')},
    {name: 'Cyprus', imageSource: require('./assets/flags/CY.png')},
    {name: 'Czechia', imageSource: require('./assets/flags/CZ.png')},
    {name: 'Denmark', imageSource: require('./assets/flags/DK.png')},
    {name: 'Djibouti', imageSource: require('./assets/flags/DJ.png')},
    {name: 'Dominica', imageSource: require('./assets/flags/DM.png')},
    {name: 'Dominican Republic', imageSource: require('./assets/flags/DO.png')},
    {name: 'Ecuador', imageSource: require('./assets/flags/EC.png')},
    {name: 'Egypt', imageSource: require('./assets/flags/EG.png')},
    {name: 'El Salvador', imageSource: require('./assets/flags/SV.png')},
    {name: 'Equatorial Guinea', imageSource: require('./assets/flags/GQ.png')},
    {name: 'Eritrea', imageSource: require('./assets/flags/ER.png')},
    {name: 'Estonia', imageSource: require('./assets/flags/EE.png')},
    {name: 'Ethiopia', imageSource: require('./assets/flags/ET.png')},
    {name: 'Fiji', imageSource: require('./assets/flags/FJ.png')},
    {name: 'Finland', imageSource: require('./assets/flags/FI.png')},
    {name: 'France', imageSource: require('./assets/flags/FR.png')},
    {name: 'Gabon', imageSource: require('./assets/flags/GA.png')},
    {name: 'Gambia', imageSource: require('./assets/flags/GM.png')},
    {name: 'Georgia', imageSource: require('./assets/flags/GE.png')},
    {name: 'Germany', imageSource: require('./assets/flags/DE.png')},
    {name: 'Ghana', imageSource: require('./assets/flags/GH.png')},
    {name: 'Greece', imageSource: require('./assets/flags/GR.png')},
    {name: 'Grenada', imageSource: require('./assets/flags/GD.png')},
    {name: 'Guam', imageSource: require('./assets/flags/GU.png')},
    {name: 'Guatemala', imageSource: require('./assets/flags/GT.png')},
    {name: 'Guinea', imageSource: require('./assets/flags/GN.png')},
    {name: 'Guinea-Bissau', imageSource: require('./assets/flags/GW.png')},
    {name: 'Guyana', imageSource: require('./assets/flags/GY.png')},
    {name: 'Haiti', imageSource: require('./assets/flags/HT.png')},
    {name: 'Holy See', imageSource: require('./assets/flags/VA.png')},
    {name: 'Honduras', imageSource: require('./assets/flags/HN.png')},
    {name: 'Hungary', imageSource: require('./assets/flags/HU.png')},
    {name: 'Iceland', imageSource: require('./assets/flags/IS.png')},
    {name: 'India', imageSource: require('./assets/flags/IN.png')},
    {name: 'Indonesia', imageSource: require('./assets/flags/ID.png')},
    {name: 'Iran', imageSource: require('./assets/flags/IR.png')},
    {name: 'Iraq', imageSource: require('./assets/flags/IQ.png')},
    {name: 'Ireland', imageSource: require('./assets/flags/IE.png')},
    {name: 'Italy', imageSource: require('./assets/flags/IT.png')},
    {name: 'Jamaica', imageSource: require('./assets/flags/JM.png')},
    {name: 'Japan', imageSource: require('./assets/flags/JP.png')},
    {name: 'Jordan', imageSource: require('./assets/flags/JO.png')},
    {name: 'Kazakhstan', imageSource: require('./assets/flags/KZ.png')},
    {name: 'Kenya', imageSource: require('./assets/flags/KE.png')},
    {name: 'Korea, North', imageSource: require('./assets/flags/KP.png')},
    {name: 'Korea, South', imageSource: require('./assets/flags/KR.png')},
    {name: 'Kuwait', imageSource: require('./assets/flags/KW.png')},
    {name: 'Kyrgyzstan', imageSource: require('./assets/flags/KG.png')},
    {name: 'Laos', imageSource: require('./assets/flags/LA.png')},
    {name: 'Latvia', imageSource: require('./assets/flags/LV.png')},
    {name: 'Lebanon', imageSource: require('./assets/flags/LB.png')},
    {name: 'Lesotho', imageSource: require('./assets/flags/LS.png')},
    {name: 'Liberia', imageSource: require('./assets/flags/LR.png')},
    {name: 'Libya', imageSource: require('./assets/flags/LY.png')},
    {name: 'Liechtenstein', imageSource: require('./assets/flags/LI.png')},
    {name: 'Lithuania', imageSource: require('./assets/flags/LT.png')},
    {name: 'Luxembourg', imageSource: require('./assets/flags/LU.png')},
    {name: 'North Macedonia', imageSource: require('./assets/flags/MK.png')},
    {name: 'Madagascar', imageSource: require('./assets/flags/MG.png')},
    {name: 'Malawi', imageSource: require('./assets/flags/MW.png')},
    {name: 'Malaysia', imageSource: require('./assets/flags/MY.png')},
    {name: 'Maldives', imageSource: require('./assets/flags/MV.png')},
    {name: 'Mali', imageSource: require('./assets/flags/ML.png')},
    {name: 'Malta', imageSource: require('./assets/flags/MT.png')},
    {name: 'Mauritania', imageSource: require('./assets/flags/MR.png')},
    {name: 'Mauritius', imageSource: require('./assets/flags/MU.png')},
    {name: 'Mexico', imageSource: require('./assets/flags/MX.png')},
    {name: 'Micronesia, Federated States of', imageSource: require('./assets/flags/FM.png')},
    {name: 'Moldova', imageSource: require('./assets/flags/MD.png')},
    {name: 'Monaco', imageSource: require('./assets/flags/MC.png')},
    {name: 'Mongolia', imageSource: require('./assets/flags/MN.png')},
    {name: 'Morocco', imageSource: require('./assets/flags/MA.png')},
    {name: 'Mozambique', imageSource: require('./assets/flags/MZ.png')},
    {name: 'Myanmar', imageSource: require('./assets/flags/MM.png')},
    {name: 'Namibia', imageSource: require('./assets/flags/NA.png')},
    {name: 'Nepal', imageSource: require('./assets/flags/NP.png')},
    {name: 'Netherlands', imageSource: require('./assets/flags/NL.png')},
    {name: 'New Zealand', imageSource: require('./assets/flags/NZ.png')},
    {name: 'Nicaragua', imageSource: require('./assets/flags/NI.png')},
    {name: 'Niger', imageSource: require('./assets/flags/NE.png')},
    {name: 'Nigeria', imageSource: require('./assets/flags/NG.png')},
    {name: 'Norway', imageSource: require('./assets/flags/NO.png')},
    {name: 'Oman', imageSource: require('./assets/flags/OM.png')},
    {name: 'Pakistan', imageSource: require('./assets/flags/PK.png')},
    {name: 'Palestine', imageSource: require('./assets/flags/PS.png')},
    {name: 'Panama', imageSource: require('./assets/flags/PA.png')},
    {name: 'Papua New Guinea', imageSource: require('./assets/flags/PG.png')},
    {name: 'Paraguay', imageSource: require('./assets/flags/PY.png')},
    {name: 'Peru', imageSource: require('./assets/flags/PE.png')},
    {name: 'Philippines', imageSource: require('./assets/flags/PH.png')},
    {name: 'Poland', imageSource: require('./assets/flags/PL.png')},
    {name: 'Portugal', imageSource: require('./assets/flags/PT.png')},
    {name: 'Qatar', imageSource: require('./assets/flags/QA.png')},
    {name: 'Romania', imageSource: require('./assets/flags/RO.png')},
    {name: 'Russia', imageSource: require('./assets/flags/RU.png')},
    {name: 'Rwanda', imageSource: require('./assets/flags/RW.png')},
    {name: 'Saint Kitts and Nevis', imageSource: require('./assets/flags/KN.png')},
    {name: 'Saint Lucia', imageSource: require('./assets/flags/LC.png')},
    {name: 'Saint Pierre and Miquelon', imageSource: require('./assets/flags/PM.png')},
    {name: 'Saint Vincent and the Grenadines', imageSource: require('./assets/flags/VC.png')},
    {name: 'Samoa', imageSource: require('./assets/flags/WS.png')},
    {name: 'San Marino', imageSource: require('./assets/flags/SM.png')},
    {name: 'Sao Tome and Principe', imageSource: require('./assets/flags/ST.png')},
    {name: 'Saudi Arabia', imageSource: require('./assets/flags/SA.png')},
    {name: 'Senegal', imageSource: require('./assets/flags/SN.png')},
    {name: 'Serbia', imageSource: require('./assets/flags/CS.png')},
    {name: 'Montenegro', imageSource: require('./assets/flags/ME.png')},
    {name: 'Seychelles', imageSource: require('./assets/flags/SC.png')},
    {name: 'Sierra Leone', imageSource: require('./assets/flags/SL.png')},
    {name: 'Singapore', imageSource: require('./assets/flags/SG.png')},
    {name: 'Slovakia', imageSource: require('./assets/flags/SK.png')},
    {name: 'Slovenia', imageSource: require('./assets/flags/SI.png')},
    {name: 'Somalia', imageSource: require('./assets/flags/SO.png')},
    {name: 'South Africa', imageSource: require('./assets/flags/ZA.png')},
    {name: 'Spain', imageSource: require('./assets/flags/ES.png')},
    {name: 'Sri Lanka', imageSource: require('./assets/flags/LK.png')},
    {name: 'Sudan', imageSource: require('./assets/flags/SD.png')},
    {name: 'Suriname', imageSource: require('./assets/flags/SR.png')},
    {name: 'Svalbard and Jan Mayen', imageSource: require('./assets/flags/SJ.png')},
    {name: 'Swaziland', imageSource: require('./assets/flags/SZ.png')},
    {name: 'Sweden', imageSource: require('./assets/flags/SE.png')},
    {name: 'Switzerland', imageSource: require('./assets/flags/CH.png')},
    {name: 'Syria', imageSource: require('./assets/flags/SY.png')},
    {name: 'Taiwan*', imageSource: require('./assets/flags/TW.png')},
    {name: 'Tajikistan', imageSource: require('./assets/flags/TJ.png')},
    {name: 'Tanzania', imageSource: require('./assets/flags/TZ.png')},
    {name: 'Thailand', imageSource: require('./assets/flags/TH.png')},
    {name: 'Timor-Leste', imageSource: require('./assets/flags/TL.png')},
    {name: 'Togo', imageSource: require('./assets/flags/TG.png')},
    {name: 'Trinidad and Tobago', imageSource: require('./assets/flags/TT.png')},
    {name: 'Tunisia', imageSource: require('./assets/flags/TN.png')},
    {name: 'Turkey', imageSource: require('./assets/flags/TR.png')},
    {name: 'Uganda', imageSource: require('./assets/flags/UG.png')},
    {name: 'Ukraine', imageSource: require('./assets/flags/UA.png')},
    {name: 'United Arab Emirates', imageSource: require('./assets/flags/AE.png')},
    {name: 'United Kingdom', imageSource: require('./assets/flags/GB.png')},
    {name: 'US', imageSource: require('./assets/flags/US.png')},
    {name: 'Uruguay', imageSource: require('./assets/flags/UY.png')},
    {name: 'Uzbekistan', imageSource: require('./assets/flags/UZ.png')},
    {name: 'Venezuela', imageSource: require('./assets/flags/VE.png')},
    {name: 'Vietnam', imageSource: require('./assets/flags/VN.png')},
    {name: 'Yemen', imageSource: require('./assets/flags/YE.png')},
    {name: 'Zambia', imageSource: require('./assets/flags/ZM.png')},
    {name: 'Zimbabwe', imageSource: require('./assets/flags/ZW.png')}
    ];

    constructor(props){
      super(props);

      this.state = {
        text: '',
        filterText: '',
      }

    }

    countryPressed = (countryName, countryFlag) => {
      //console.log('Country pressed, yay!');
      this.props.navigation.navigate('Home', {selectedCountry: countryName, selectedCountryFlag: countryFlag,});
    }

    getElement = (element, filter) => {
      if(element.name.toLowerCase().includes(filter.toLowerCase()) || filter=='') {
        return (
          <TouchableOpacity
          onPress = {() => {
              this.countryPressed(element.name, element.imageSource);
            }
          }
          style={styles.Country}>
          <Image  source = {element.imageSource}
          style = {styles.flagStyle} />
          <Text style={styles.textStyle}>{element.name.length>30 ? element.name.substring(0,30)+'...' : element.name}</Text>
          </TouchableOpacity>
          )
      }

      }
      render() {
        return (
          <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.headerText}>Select a country</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.filterText}
            placeholder="Select a country..."
            onChangeText={newText => this.setState({filterText: newText})}
          />
          </View>
          <Text></Text>
          <FlatList
            data={this.CountriesData}
            renderItem={({item}) => (this.getElement(item, this.state.filterText))}
            keyExtractor = {item => item.name}/>
          </View>
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
          paddingHorizontal: 10,
          flex: 1000,
          backgroundColor: '#fff',
          justifyContent: 'center',
          },
        textInput: {
          borderColor: '#000',
          borderWidth: 1,
          width: 260,
          height: 30,
          borderRadius: 30,
          paddingHorizontal: 10,
          marginTop: 10,

        },
          statusBar:{

            height: 40,
            },
            header: {
              width: '100%',
              height: 90,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 0,

              },
              textStyle: {
                fontSize: 18,
                fontWeight: '500',
                color: 'black',
                fontFamily: 'Family1',
                },
                headerText: {
                  fontSize: 30,
                  fontWeight: '500',
                  color: 'black',
                  fontFamily: 'TitleFamily1',
                  },
                  Country: {
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 5,
                    borderColor: 'grey',
                    },
                    flagStyle: {
                      width: 24,
                      height: 15,
                      borderRadius: 3,
                      marginHorizontal: 10
                      },
                      flagImageContainer: {
                        },
                        });
