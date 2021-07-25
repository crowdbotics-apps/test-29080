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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
        }}
        style={styles.ImageBackground_1_197}
      />
      <View style={styles.View_1_198}>
        <View style={styles.View_1_199}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
            }}
            style={styles.ImageBackground_1_200}
          />
        </View>
        <View style={styles.View_1_202}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
            }}
            style={styles.ImageBackground_1_203}
          />
        </View>
        <View style={styles.View_1_205}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
            }}
            style={styles.ImageBackground_1_206}
          />
        </View>
        <View style={styles.View_1_208}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
            }}
            style={styles.ImageBackground_1_209}
          />
        </View>
        <View style={styles.View_1_211}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
            }}
            style={styles.ImageBackground_1_212}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
        }}
        style={styles.ImageBackground_1_214}
      />
      <View style={styles.View_1_217}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_223}
        />
      </View>
      <View style={styles.View_1_224}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ce/0ca4/fbb235707113a042da08d4f16516f27d"
          }}
          style={styles.ImageBackground_1_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e224/8b64/a985f17431bdbf723a25ee087d794b58"
          }}
          style={styles.ImageBackground_1_226}
        />
      </View>
      <View style={styles.View_1_246}>
        <Text style={styles.Text_1_246}>45:00</Text>
      </View>
      <View style={styles.View_1_247}>
        <View style={styles.View_1_248} />
        <View style={styles.View_1_249}>
          <Text style={styles.Text_1_249}> Start Now</Text>
        </View>
      </View>
      <View style={styles.View_1_250}>
        <View style={styles.View_1_251}>
          <Text style={styles.Text_1_251}>Meditation</Text>
        </View>
        <View style={styles.View_1_252}>
          <Text style={styles.Text_1_252}>
            Guided by a short introductory course, start trying meditation.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 51, 52, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_1_197: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("103.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73334800347103%")
  },
  View_1_198: {
    width: wp("5.744760681578721%"),
    minWidth: wp("5.744760681578721%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.20001243489482%"),
    top: hp("103.14207650273224%")
  },
  View_1_199: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.051090327873503%")
  },
  ImageBackground_1_200: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_202: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_203: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_205: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0.63054652813355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_206: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_208: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.2610430274504694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_209: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_211: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.891506174223025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_212: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_214: {
    width: wp("4.203099480948936%"),
    height: hp("2.73224043715847%"),
    top: hp("103.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.00001009114501%")
  },
  View_1_217: {
    width: wp("86.93332625868113%"),
    minWidth: wp("86.93332625868113%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666682400172331%"),
    top: hp("8.060109289617486%")
  },
  ImageBackground_1_218: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.066663650173865%")
  },
  ImageBackground_1_219: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_223: {
    width: wp("9.333332573784785%"),
    minWidth: wp("9.333332573784785%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.59999368489635%"),
    top: hp("0.9562841530054644%")
  },
  View_1_224: {
    width: wp("75.4666605251741%"),
    height: hp("29.70635252572148%"),
    top: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266681944443201%")
  },
  ImageBackground_1_225: {
    width: wp("31.309856664236925%"),
    height: hp("10.887409689647903%"),
    top: hp("10.485381246264517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.52616996043539%")
  },
  ImageBackground_1_226: {
    width: wp("75.4666605251741%"),
    height: hp("29.70635252572148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_246: {
    width: wp("22.399998177083482%"),
    minWidth: wp("22.399998177083482%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93334644097116%"),
    top: hp("71.44808743169399%"),
    justifyContent: "flex-start"
  },
  Text_1_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_247: {
    width: wp("49.59999596354199%"),
    minWidth: wp("49.59999596354199%"),
    height: hp("8.333335417867358%"),
    minHeight: hp("8.333335417867358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333347547741898%"),
    top: hp("79.09836065573771%")
  },
  View_1_248: {
    width: wp("49.59999596354199%"),
    minWidth: wp("49.59999596354199%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(124, 154, 146, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_249: {
    width: wp("27.466664431423794%"),
    minWidth: wp("27.466664431423794%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999088541741%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_250: {
    width: wp("78.13332697482691%"),
    minWidth: wp("78.13332697482691%"),
    height: hp("13.114757225161695%"),
    minHeight: hp("13.114757225161695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933348719616804%"),
    top: hp("21.584699453551913%")
  },
  View_1_251: {
    width: wp("42.93332983941001%"),
    minWidth: wp("42.93332983941001%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599998567708454%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_252: {
    width: wp("78.13332697482691%"),
    minWidth: wp("78.13332697482691%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_1_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
