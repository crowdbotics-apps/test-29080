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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
        }}
        style={styles.ImageBackground_1_581}
      />
      <View style={styles.View_1_582}>
        <View style={styles.View_1_583}>
          <Text style={styles.Text_1_583}>Sign Up</Text>
        </View>
        <View style={styles.View_1_584}>
          <Text style={styles.Text_1_584}>
            Sign up now for free and start meditating, and explore Medic.
          </Text>
        </View>
      </View>
      <View style={styles.View_1_585}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11d/625b/05ea557f760bb3361d12ca1b6923d7cf"
          }}
          style={styles.ImageBackground_1_586}
        />
        <View style={styles.View_1_587}>
          <Text style={styles.Text_1_587}>Name</Text>
        </View>
      </View>
      <View style={styles.View_1_588}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11d/625b/05ea557f760bb3361d12ca1b6923d7cf"
          }}
          style={styles.ImageBackground_1_589}
        />
        <View style={styles.View_1_590}>
          <Text style={styles.Text_1_590}>Email Address</Text>
        </View>
      </View>
      <View style={styles.View_1_591}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11d/625b/05ea557f760bb3361d12ca1b6923d7cf"
          }}
          style={styles.ImageBackground_1_592}
        />
        <View style={styles.View_1_593}>
          <Text style={styles.Text_1_593}>Password</Text>
        </View>
      </View>
      <View style={styles.View_1_594}>
        <View style={styles.View_1_595} />
        <View style={styles.View_1_596}>
          <Text style={styles.Text_1_596}>SIGNUP</Text>
        </View>
      </View>
      <View style={styles.View_1_597}>
        <Text style={styles.Text_1_597}>Already have an account? Sign In</Text>
      </View>
      <View style={styles.View_1_598}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/504c/ebbd/4dfe3d0e1db7b46625ff49e4f38073d5"
          }}
          style={styles.ImageBackground_1_599}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1254/f5cf/a168a5b75d496979e2e1e6d9f8356a35"
          }}
          style={styles.ImageBackground_1_601}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec60/7e79/6b7903b3c7f02330ec0b5e7aa5793e7d"
          }}
          style={styles.ImageBackground_1_603}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e89/b9e0/95e76a94856f926cd6716becde24d017"
          }}
          style={styles.ImageBackground_1_605}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7a/155a/60fdf56ea4a08e8a7cc41dcc626e6b3d"
          }}
          style={styles.ImageBackground_1_607}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7625/f059/c03e1dc6afd715f1901777c7596bd138"
          }}
          style={styles.ImageBackground_1_609}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/155a/6dbe/22834cac40fedff78cd9185cd7529a9b"
          }}
          style={styles.ImageBackground_1_611}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ec/815b/f424174c7581c6424dcbc2d42925c1e9"
          }}
          style={styles.ImageBackground_1_613}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bf/653f/b989442b70c57ae17c64c178f6f21c99"
          }}
          style={styles.ImageBackground_1_615}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed3/139d/788211bf30e8c27db02c1e5c6a71dd46"
          }}
          style={styles.ImageBackground_1_617}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baf1/f89f/4c8038c596799e6eb5fe6fdec043526f"
          }}
          style={styles.ImageBackground_1_619}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bdc/923b/1510ab1d780b1f0bad3800c44f7f1779"
          }}
          style={styles.ImageBackground_1_621}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcd1/f5d6/d087059ffdb53cb13d1753cf720f0c29"
          }}
          style={styles.ImageBackground_1_623}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db30/0fba/16ffff6c2ac303c7b5cc1f3e201b5b8d"
          }}
          style={styles.ImageBackground_1_625}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b91/d083/fd3b766ef2b6ecaeb2dcdca615e847a1"
          }}
          style={styles.ImageBackground_1_627}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/588e/8fc7/2d4c83da37f22b22f1db96a6d4de100e"
          }}
          style={styles.ImageBackground_1_629}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1fc/ecb7/88dc0936da3a9e4f1d5e99188dae4f37"
          }}
          style={styles.ImageBackground_1_631}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b4a/fd03/b4b26a2d6f03872dd23a0060f4efe39d"
          }}
          style={styles.ImageBackground_1_633}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a48f/2922/28b2ebc4c4cde16f3c1d206adafebc49"
          }}
          style={styles.ImageBackground_1_635}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbbd/432d/b960363f00dcd5d7ad178a0ac1e0a254"
          }}
          style={styles.ImageBackground_1_637}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d5/9bec/83c1e33c97bd12ff2c90fb114440b523"
          }}
          style={styles.ImageBackground_1_639}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bc/494c/3729d0e91f8e97b42b8e7044cff257e3"
          }}
          style={styles.ImageBackground_1_641}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc4/810e/726e89362e29172024f17a31fc6bfb5f"
          }}
          style={styles.ImageBackground_1_643}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/963b/d1df/06e9a0eaa00eb287be2fb95a6fc6f46d"
          }}
          style={styles.ImageBackground_1_645}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b18/bd3a/8abdfaeeaa188d51e684c5da23805bb9"
          }}
          style={styles.ImageBackground_1_647}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ce/35ea/04e4879f5c30550615c66266c5210694"
          }}
          style={styles.ImageBackground_1_649}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fda5/6501/47d14aaf179b16d37c6d96a440d303fc"
          }}
          style={styles.ImageBackground_1_651}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd6b/a7d4/b31c0657c179c2352143057cf0180a10"
          }}
          style={styles.ImageBackground_1_653}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4608/4999/a9c3396e70c4b8a853daa4e7d2afef3e"
          }}
          style={styles.ImageBackground_1_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d16/07e1/8e904924a620e812563a72aa0f9a8d75"
          }}
          style={styles.ImageBackground_1_657}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 51, 52, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_1_581: {
    width: wp("11.575999959309897%"),
    height: hp("6.693989071038252%"),
    top: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%")
  },
  View_1_582: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("24.726775956284154%")
  },
  View_1_583: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_584: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606557%"),
    justifyContent: "flex-start"
  },
  Text_1_584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_585: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("45.49180327868852%")
  },
  ImageBackground_1_586: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  View_1_587: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_587: {
    color: "rgba(190, 194, 194, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_588: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("55.32786885245902%")
  },
  ImageBackground_1_589: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453557%")
  },
  View_1_590: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_590: {
    color: "rgba(190, 194, 194, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_591: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("65.1639344262295%")
  },
  ImageBackground_1_592: {
    width: wp("81.46666666666667%"),
    minWidth: wp("81.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453564%")
  },
  View_1_593: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_593: {
    color: "rgba(190, 194, 194, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_594: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("73.63387978142076%")
  },
  View_1_595: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
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
  View_1_596: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666668%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1_596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_1_597: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("84.42622950819673%"),
    justifyContent: "flex-start"
  },
  Text_1_597: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_598: {
    width: wp("112.26669108072917%"),
    minWidth: wp("112.26669108072917%"),
    height: hp("44.63524740250384%"),
    minHeight: hp("44.63524740250384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.34732172397968%")
  },
  ImageBackground_1_599: {
    width: wp("40.86869710286458%"),
    height: hp("10.91041460714705%"),
    top: hp("1.1219295647626382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.38833007812501%")
  },
  ImageBackground_1_601: {
    width: wp("42.74589436848959%"),
    height: hp("11.874851372724022%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.52080078125%")
  },
  ImageBackground_1_603: {
    width: wp("51.40979817708333%"),
    height: hp("3.730937040568701%"),
    top: hp("17.97717985559683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.95047200520833%")
  },
  ImageBackground_1_605: {
    width: wp("28.003198242187498%"),
    height: hp("1.5098549629169735%"),
    top: hp("18.90341336609889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.95994466145833%")
  },
  ImageBackground_1_607: {
    width: wp("17.82533976236979%"),
    height: hp("8.579899834804849%"),
    top: hp("20.889574061325987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.41634114583334%")
  },
  ImageBackground_1_609: {
    width: wp("17.354909261067707%"),
    height: hp("8.192272915866205%"),
    top: hp("21.28092447916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.42197265624999%")
  },
  ImageBackground_1_611: {
    width: wp("16.435177612304688%"),
    height: hp("7.739623127087869%"),
    top: hp("12.740763679879606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.662939453125%")
  },
  ImageBackground_1_613: {
    width: wp("15.838694254557293%"),
    height: hp("7.534074001624937%"),
    top: hp("12.954820309831803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.23463541666666%")
  },
  ImageBackground_1_615: {
    width: wp("10.617784627278645%"),
    height: hp("8.001232147216797%"),
    top: hp("12.617259207970463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.76197916666666%")
  },
  ImageBackground_1_617: {
    width: wp("10.576661173502604%"),
    height: hp("7.97552411022082%"),
    top: hp("12.63216779531676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.81139322916667%")
  },
  ImageBackground_1_619: {
    width: wp("21.422047932942707%"),
    height: hp("7.084823566707757%"),
    top: hp("20.35658372555926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.07701822916667%")
  },
  ImageBackground_1_621: {
    width: wp("21.366438802083334%"),
    height: hp("7.04308754759408%"),
    top: hp("20.36564727949967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.14083658854166%")
  },
  ImageBackground_1_623: {
    width: wp("33.444342041015624%"),
    height: hp("17.67611894451204%"),
    top: hp("26.95912845799181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.50048828125%")
  },
  ImageBackground_1_625: {
    width: wp("25.376261393229164%"),
    height: hp("6.598899403556449%"),
    top: hp("25.45402818690232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_627: {
    width: wp("18.090616861979168%"),
    height: hp("10.62900147151426%"),
    top: hp("16.162868145385076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07659505208333334%")
  },
  ImageBackground_1_629: {
    width: wp("30.116351318359374%"),
    height: hp("7.7124788461487155%"),
    top: hp("30.270068893015704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7714680989583336%")
  },
  ImageBackground_1_631: {
    width: wp("10.113602701822916%"),
    height: hp("6.810284182022178%"),
    top: hp("15.739732752732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8891438802083333%")
  },
  ImageBackground_1_633: {
    width: wp("18.786582438151044%"),
    height: hp("16.327520276679365%"),
    top: hp("23.83181879429219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.18115234375%")
  },
  ImageBackground_1_635: {
    width: wp("44.007625325520834%"),
    height: hp("6.566423926848532%"),
    top: hp("34.72230838296193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.178938802083334%")
  },
  ImageBackground_1_637: {
    width: wp("18.779730224609377%"),
    height: hp("15.438539473736872%"),
    top: hp("19.057543811902335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.873893229166665%")
  },
  ImageBackground_1_639: {
    width: wp("15.0421142578125%"),
    height: hp("15.652460608977437%"),
    top: hp("15.818328023608274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.416731770833334%")
  },
  ImageBackground_1_641: {
    width: wp("16.738824462890626%"),
    height: hp("12.997274972050569%"),
    top: hp("15.325577532658812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.861458333333333%")
  },
  ImageBackground_1_643: {
    width: wp("20.80687459309896%"),
    height: hp("12.673221650670785%"),
    top: hp("28.73902034238388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.08212890625%")
  },
  ImageBackground_1_645: {
    width: wp("9.09630126953125%"),
    height: hp("5.623504763743917%"),
    top: hp("35.452295522220794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.65712890625001%")
  },
  ImageBackground_1_647: {
    width: wp("4.7482447306315105%"),
    height: hp("9.565803652904073%"),
    top: hp("30.80086629898821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.63219401041667%")
  },
  ImageBackground_1_649: {
    width: wp("3.1372398376464843%"),
    height: hp("9.212617926258858%"),
    top: hp("31.14632361573601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.721923828125%")
  },
  ImageBackground_1_651: {
    width: wp("13.709684244791667%"),
    height: hp("1.8855371110426271%"),
    top: hp("33.09628012401811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.30426432291667%")
  },
  ImageBackground_1_653: {
    width: wp("13.280557250976562%"),
    height: hp("1.6678202999094145%"),
    top: hp("33.19100968824711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.71975911458334%")
  },
  ImageBackground_1_655: {
    width: wp("16.227641805013022%"),
    height: hp("1.9512360213232822%"),
    top: hp("29.370692518890877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83720703124999%")
  },
  ImageBackground_1_657: {
    width: wp("16.125482177734373%"),
    height: hp("0.5710369250813468%"),
    top: hp("30.269760381980035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.92122395833334%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
