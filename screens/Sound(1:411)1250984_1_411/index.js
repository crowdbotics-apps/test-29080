import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_412}>
        <View style={styles.View_1_413} />
      </View>
      <View style={styles.View_1_421}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af42/d6c0/9d5a38300896715efb925da07ec11055"
          }}
          style={styles.ImageBackground_1_422}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af42/d6c0/9d5a38300896715efb925da07ec11055"
          }}
          style={styles.ImageBackground_1_424}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9d1/09f1/9234e4679c4bde3df4acadaf5b6d0bf8"
          }}
          style={styles.ImageBackground_1_426}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/2802/59ab0f8a31d0e55210cbe7a8cd84d12c"
          }}
          style={styles.ImageBackground_1_427}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/2802/59ab0f8a31d0e55210cbe7a8cd84d12c"
          }}
          style={styles.ImageBackground_1_428}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/2802/59ab0f8a31d0e55210cbe7a8cd84d12c"
          }}
          style={styles.ImageBackground_1_429}
        />
      </View>
      <View style={styles.View_1_430}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/080b/9bb4/de2a9c2ad2666ae88fcd875a49646800"
          }}
          style={styles.ImageBackground_1_431}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6452/3958/9e05144e2aad467d7e9c2bf5f9936024"
          }}
          style={styles.ImageBackground_1_432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4798/30bf/b6d374d4632b002d29fd707cc3169844"
          }}
          style={styles.ImageBackground_1_433}
        />
        <View style={styles.View_1_438}>
          <View style={styles.View_1_439}>
            <View style={styles.View_1_440}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ac/a960/44041cee2e4b41b8e0542587ada33841"
                }}
                style={styles.ImageBackground_1_441}
              />
              <View source={{ uri: "null" }} style={styles.View_1_442} />
            </View>
          </View>
        </View>
        <View style={styles.View_1_444}>
          <View style={styles.View_1_445}>
            <View style={styles.View_1_446}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e9b/ed3a/fe5d1aa229bfb5978e34479ef5c1ea5b"
                }}
                style={styles.ImageBackground_1_447}
              />
              <View source={{ uri: "null" }} style={styles.View_1_448} />
            </View>
          </View>
        </View>
        <View style={styles.View_1_450}>
          <View style={styles.View_1_451}>
            <View style={styles.View_1_452}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ac/a960/44041cee2e4b41b8e0542587ada33841"
                }}
                style={styles.ImageBackground_1_453}
              />
              <View source={{ uri: "null" }} style={styles.View_1_454} />
            </View>
          </View>
        </View>
        <View style={styles.View_1_456}>
          <View style={styles.View_1_457}>
            <View style={styles.View_1_458}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e9b/ed3a/fe5d1aa229bfb5978e34479ef5c1ea5b"
                }}
                style={styles.ImageBackground_1_459}
              />
              <View source={{ uri: "null" }} style={styles.View_1_460} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_462}>
        <Text style={styles.Text_1_462}>Painting Forest</Text>
      </View>
      <View style={styles.View_1_463}>
        <Text style={styles.Text_1_463}>By: Painting with Passion</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c1c/73d7/6d544b63b974ca8c49e14a5e154d1985"
        }}
        style={styles.ImageBackground_1_464}
      />
      <View style={styles.View_1_465}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
          }}
          style={styles.ImageBackground_1_466}
        />
        <View style={styles.View_1_467}>
          <View style={styles.View_1_468}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c38d/4014/322e87a1154f96fb2f9db54c1cf46a49"
              }}
              style={styles.ImageBackground_1_469}
            />
          </View>
          <View style={styles.View_1_471}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf3/3edf/3c8fcafa34f7f9ac50089c1db22fe10c"
              }}
              style={styles.ImageBackground_1_472}
            />
          </View>
          <View style={styles.View_1_474}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf3/3edf/3c8fcafa34f7f9ac50089c1db22fe10c"
              }}
              style={styles.ImageBackground_1_475}
            />
          </View>
          <View style={styles.View_1_477}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6c46/b55cdc3156a37dd4a21ae7287c217e12"
              }}
              style={styles.ImageBackground_1_478}
            />
          </View>
          <View style={styles.View_1_480}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6c46/b55cdc3156a37dd4a21ae7287c217e12"
              }}
              style={styles.ImageBackground_1_481}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_483}
        />
      </View>
      <View style={styles.View_1_486}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_488}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_492}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_412: {
    width: wp("108.2666578559035%"),
    minWidth: wp("108.2666578559035%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.266657855903494%"),
    top: hp("0.000004169068049863388%")
  },
  View_1_413: {
    width: wp("108.2666578559035%"),
    minWidth: wp("108.2666578559035%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 51, 52, 1)"
  },
  View_1_421: {
    width: wp("82.61537413611865%"),
    minWidth: wp("82.61537413611865%"),
    height: hp("6.8306036985637055%"),
    minHeight: hp("6.8306036985637055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800007421874396%"),
    top: hp("76.77595836868703%")
  },
  ImageBackground_1_422: {
    width: wp("13.333332248263977%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_424: {
    width: wp("13.333332248263977%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866665538194537%")
  },
  ImageBackground_1_426: {
    width: wp("13.282049496903525%"),
    height: hp("5.537035686722218%"),
    top: hp("0.5464501719657306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333107638907%")
  },
  ImageBackground_1_427: {
    width: wp("13.282049496903525%"),
    height: hp("5.537035686722218%"),
    top: hp("0.5464501719657306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.5999966145836%")
  },
  ImageBackground_1_428: {
    width: wp("13.282049496903525%"),
    height: hp("5.537035686722218%"),
    top: hp("0.5464501719657306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466662152778156%")
  },
  ImageBackground_1_429: {
    width: wp("13.282049496903525%"),
    height: hp("5.537035686722218%"),
    top: hp("0.5464501719657306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33332769097268%")
  },
  View_1_430: {
    width: wp("80.87272291074846%"),
    minWidth: wp("80.87272291074846%"),
    height: hp("10.245903723878287%"),
    minHeight: hp("10.245903723878287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600007356770234%"),
    top: hp("87.15847202988921%")
  },
  ImageBackground_1_431: {
    width: wp("19.999998372395964%"),
    height: hp("10.245901639344263%"),
    top: hp("0.000002084534031610019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.399997526041865%")
  },
  ImageBackground_1_432: {
    width: wp("4.800004187011378%"),
    height: hp("2.1863536105129886%"),
    top: hp("4.098362740271739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_433: {
    width: wp("3.2727269370339407%"),
    height: hp("2.0491803278688523%"),
    top: hp("3.9617507184138105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.59999368489635%")
  },
  View_1_438: {
    width: wp("2.230769166604072%"),
    minWidth: wp("2.230769166604072%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.99999511718789%"),
    top: hp("4.098362740271739%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_439: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0.017501747673321688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.01326090386874057%")
  },
  View_1_440: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_441: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_442: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_444: {
    width: wp("2.230769166604072%"),
    minWidth: wp("2.230769166604072%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.13329116753815%"),
    top: hp("4.098362740271739%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_445: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0.017501747673321688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.039778642596139946%")
  },
  View_1_446: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_447: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_448: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_450: {
    width: wp("2.230769166604072%"),
    minWidth: wp("2.230769166604072%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133328276910134%"),
    top: hp("4.098362740271739%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_451: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0.017501747673321688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.01326090386874057%")
  },
  View_1_452: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_453: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_454: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_456: {
    width: wp("2.230769166604072%"),
    minWidth: wp("2.230769166604072%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.99995800781592%"),
    top: hp("4.098362740271739%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_457: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0.017501747673321688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03977864259613639%")
  },
  View_1_458: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_459: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_460: {
    width: wp("2.1777336891492767%"),
    height: hp("2.0004619014719145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_462: {
    width: wp("58.6666618923615%"),
    minWidth: wp("58.6666618923615%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.20000624999949%"),
    top: hp("59.153007809581645%"),
    justifyContent: "flex-start"
  },
  Text_1_462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_463: {
    width: wp("64.53332808159765%"),
    minWidth: wp("64.53332808159765%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06667341579806%"),
    top: hp("65.71038459819522%"),
    justifyContent: "flex-start"
  },
  Text_1_463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_464: {
    width: wp("66.66666124131989%"),
    minWidth: wp("66.66666124131989%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.80000677083278%"),
    top: hp("21.17486755704619%"),
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300
  },
  View_1_465: {
    width: wp("60.469762331562315%"),
    minWidth: wp("60.469762331562315%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333986545086%"),
    top: hp("102.73224460622652%")
  },
  ImageBackground_1_466: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_467: {
    width: wp("7.181213811750179%"),
    minWidth: wp("7.181213811750179%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466664431423787%"),
    top: hp("0%")
  },
  View_1_468: {
    width: wp("4.617086416252733%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.564127395497451%")
  },
  ImageBackground_1_469: {
    width: wp("4.617086416252733%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_471: {
    width: wp("3.5897432584844355%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_472: {
    width: wp("3.5897432584844355%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_474: {
    width: wp("3.5897432584844355%"),
    height: hp("0.262715370277238%"),
    top: hp("0.7881623148266783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_475: {
    width: wp("3.5897432584844355%"),
    height: hp("0.262715370277238%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_477: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("1.5763246296533566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_478: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_480: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("2.3644452537995306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_481: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_483: {
    width: wp("4.203099480948936%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.26666208767398%")
  },
  View_1_486: {
    width: wp("86.93332625868113%"),
    minWidth: wp("86.93332625868113%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66667426215216%"),
    top: hp("8.060113458685535%")
  },
  ImageBackground_1_487: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666365017385%")
  },
  ImageBackground_1_488: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_492: {
    width: wp("9.333332573784785%"),
    minWidth: wp("9.333332573784785%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.59999368489635%"),
    top: hp("0.9562841530054644%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
