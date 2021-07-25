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
      <View style={styles.View_1_501}>
        <Text style={styles.Text_1_501}>Welcome back, Afreen!</Text>
      </View>
      <View style={styles.View_1_502}>
        <Text style={styles.Text_1_502}>How are you feeling today ?</Text>
      </View>
      <View style={styles.View_1_503}>
        <View style={styles.View_1_504} />
        <View style={styles.View_1_505}>
          <View style={styles.View_1_506} />
          <View style={styles.View_1_507}>
            <Text style={styles.Text_1_507}>watch now</Text>
          </View>
          <View style={styles.View_1_508}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b391/3e86/b8d1cfb6d68a766f9c1e81762cc9143b"
              }}
              style={styles.ImageBackground_1_509}
            />
          </View>
        </View>
        <View style={styles.View_1_511}>
          <View style={styles.View_1_512} />
        </View>
        <View style={styles.View_1_513}>
          <Text style={styles.Text_1_513}>Meditation 101</Text>
        </View>
        <View style={styles.View_1_514}>
          <Text style={styles.Text_1_514}>
            Techniques, Benefits, and a Beginner’s How-To
          </Text>
        </View>
      </View>
      <View style={styles.View_1_515}>
        <View style={styles.View_1_516} />
        <View style={styles.View_1_517}>
          <Text style={styles.Text_1_517}>
            Basics of Yoga for Beginners or Experienced Professionals
          </Text>
        </View>
        <View style={styles.View_1_518}>
          <View style={styles.View_1_519} />
          <View style={styles.View_1_520}>
            <Text style={styles.Text_1_520}>watch now</Text>
          </View>
          <View style={styles.View_1_521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b391/3e86/b8d1cfb6d68a766f9c1e81762cc9143b"
              }}
              style={styles.ImageBackground_1_522}
            />
          </View>
        </View>
        <View style={styles.View_1_524}>
          <Text style={styles.Text_1_524}>Cardio Meditation</Text>
        </View>
        <View style={styles.View_1_525} />
        <View style={styles.View_1_526} />
      </View>
      <View style={styles.View_1_527}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ca5/73c7/a5cbb4a95ebccd96caf0d405f56119d6"
          }}
          style={styles.ImageBackground_1_528}
        />
        <View style={styles.View_1_529}>
          <View style={styles.View_1_530}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
              }}
              style={styles.ImageBackground_1_531}
            />
          </View>
          <View style={styles.View_1_533}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_534}
            />
          </View>
          <View style={styles.View_1_536}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_537}
            />
          </View>
          <View style={styles.View_1_539}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_540}
            />
          </View>
          <View style={styles.View_1_542}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_543}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_545}
        />
      </View>
      <View style={styles.View_1_548}>
        <View style={styles.View_1_549}>
          <View style={styles.View_1_550} />
          <View style={styles.View_1_551}>
            <Text style={styles.Text_1_551}>Calm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6080/70d0/b5502d76f0328c6142198714e98e4fd1"
            }}
            style={styles.ImageBackground_1_552}
          />
        </View>
        <View style={styles.View_1_555}>
          <View style={styles.View_1_556} />
          <View style={styles.View_1_557}>
            <Text style={styles.Text_1_557}>Relax</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe73/825d/9f700cff4e1ad3af5348571b2f36fe49"
            }}
            style={styles.ImageBackground_1_558}
          />
        </View>
        <View style={styles.View_1_559}>
          <View style={styles.View_1_560} />
          <View style={styles.View_1_561}>
            <Text style={styles.Text_1_561}>Focus</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8427/52fd/82f2bfa7fdd4d2a816d58cd1c3fd1c35"
            }}
            style={styles.ImageBackground_1_562}
          />
        </View>
        <View style={styles.View_1_565}>
          <View style={styles.View_1_566} />
          <View style={styles.View_1_567}>
            <Text style={styles.Text_1_567}>Anxious</Text>
          </View>
          <View style={styles.View_1_568}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed2/778a/cf5420d82c897e516bda805ad8585063"
              }}
              style={styles.ImageBackground_1_569}
            />
            <View style={styles.View_1_570} />
          </View>
        </View>
      </View>
      <View style={styles.View_1_571}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_572}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_573}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_577}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f48f/1bf1/dfff369d0afa3a5f0b7f61376d8cda5f"
        }}
        style={styles.ImageBackground_1_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e6/23eb/9cfa3ed20abb96884aa804bcad315cb7"
        }}
        style={styles.ImageBackground_1_579}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 51, 52, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_501: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("18.989071038251364%"),
    justifyContent: "flex-start"
  },
  Text_1_501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_502: {
    width: wp("61.86666666666667%"),
    minWidth: wp("61.86666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("24.863387978142075%"),
    justifyContent: "flex-start"
  },
  Text_1_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_503: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("46.72131147540984%")
  },
  View_1_504: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 243, 240, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_505: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.754098360655732%")
  },
  View_1_506: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 51, 52, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_507: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_1_507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_508: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%")
  },
  ImageBackground_1_509: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_511: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.266666666666666%"),
    top: hp("18.306010928961733%")
  },
  View_1_512: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 243, 240, 1)"
  },
  View_1_513: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_1_513: {
    color: "rgba(37, 51, 52, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_514: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_1_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_515: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("73.49726775956285%")
  },
  View_1_516: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 243, 240, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_517: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_1_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_518: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.754098360655732%")
  },
  View_1_519: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 51, 52, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_520: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_1_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_521: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%")
  },
  ImageBackground_1_522: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_524: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_1_524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_525: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    top: hp("20.21857923497268%")
  },
  View_1_526: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    top: hp("19.945355191256837%"),
    backgroundColor: "rgba(247, 243, 240, 1)"
  },
  View_1_527: {
    width: wp("60.469767252604164%"),
    minWidth: wp("60.469767252604164%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("102.45901639344261%")
  },
  ImageBackground_1_528: {
    width: wp("7.673469543457031%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_529: {
    width: wp("5.745008850097657%"),
    minWidth: wp("5.745008850097657%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666666%"),
    top: hp("0.8196721311475557%")
  },
  View_1_530: {
    width: wp("3.69366938273112%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.051334635416673%")
  },
  ImageBackground_1_531: {
    width: wp("3.69366938273112%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_533: {
    width: wp("2.871794891357422%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_534: {
    width: wp("2.871794891357422%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_536: {
    width: wp("2.871794891357422%"),
    height: hp("0.21017229622179043%"),
    top: hp("0.6305215137252418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_537: {
    width: wp("2.871794891357422%"),
    height: hp("0.21017229622179043%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_539: {
    width: wp("1.6410255432128908%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.2610430274504694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_540: {
    width: wp("1.6410255432128908%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_542: {
    width: wp("1.6410255432128908%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.8915645411757112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_543: {
    width: wp("1.6410255432128908%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_545: {
    width: wp("4.203099822998047%"),
    height: hp("2.73224043715847%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%")
  },
  View_1_548: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("32.10382513661202%")
  },
  View_1_549: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_550: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_551: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("9.562841530054648%"),
    justifyContent: "flex-start"
  },
  Text_1_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_552: {
    width: wp("9.343073527018229%"),
    height: hp("4.781420765027322%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666677%")
  },
  View_1_555: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.2%"),
    top: hp("0%")
  },
  View_1_556: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_557: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("9.562841530054648%"),
    justifyContent: "flex-start"
  },
  Text_1_557: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_558: {
    width: wp("9.333333333333334%"),
    height: hp("4.444034764024078%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%")
  },
  View_1_559: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("0%")
  },
  View_1_560: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_561: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("9.562841530054648%"),
    justifyContent: "flex-start"
  },
  Text_1_561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_562: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%")
  },
  View_1_565: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("0%")
  },
  View_1_566: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_567: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("9.562841530054648%"),
    justifyContent: "flex-start"
  },
  Text_1_567: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_568: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_1_569: {
    width: wp("10.133333333333333%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_570: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 51, 52, 1)"
  },
  View_1_571: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("8.060109289617486%")
  },
  ImageBackground_1_572: {
    width: wp("11.575999959309897%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666667%")
  },
  ImageBackground_1_573: {
    width: wp("5.866666666666666%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_577: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    top: hp("0.9562841530054644%")
  },
  ImageBackground_1_578: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("50.54644808743169%"),
    resizeMode: "cover"
  },
  ImageBackground_1_579: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("76.36612021857924%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
