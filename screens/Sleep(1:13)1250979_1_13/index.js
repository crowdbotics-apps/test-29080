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
      <View style={styles.View_1_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
          }}
          style={styles.ImageBackground_1_15}
        />
        <View style={styles.View_1_16}>
          <View style={styles.View_1_17}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
              }}
              style={styles.ImageBackground_1_18}
            />
          </View>
          <View style={styles.View_1_20}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_21}
            />
          </View>
          <View style={styles.View_1_23}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_24}
            />
          </View>
          <View style={styles.View_1_26}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_27}
            />
          </View>
          <View style={styles.View_1_29}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_30}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_32}
        />
      </View>
      <View style={styles.View_1_35}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_41}
        />
      </View>
      <View style={styles.View_1_42}>
        <Text style={styles.Text_1_42}>Sleep Session</Text>
      </View>
      <View style={styles.View_1_43}>
        <Text style={styles.Text_1_43}>Bedtime</Text>
      </View>
      <View style={styles.View_1_44}>
        <View style={styles.View_1_45} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8705/0ab3/371af7d4a40e6ec9879350f6259cf689"
          }}
          style={styles.ImageBackground_1_46}
        />
        <View style={styles.View_1_48}>
          <Text style={styles.Text_1_48}>Sleep</Text>
        </View>
        <View style={styles.View_1_49}>
          <Text style={styles.Text_1_49}>5h 30m</Text>
        </View>
      </View>
      <View style={styles.View_1_50}>
        <View style={styles.View_1_51} />
        <View style={styles.View_1_52}>
          <Text style={styles.Text_1_52}>Deep</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18a3/0946/ee084c081a38a789d7307713c96c8aca"
          }}
          style={styles.ImageBackground_1_53}
        />
        <View style={styles.View_1_55}>
          <Text style={styles.Text_1_55}>1h 10m</Text>
        </View>
      </View>
      <View style={styles.View_1_56}>
        <View style={styles.View_1_57} />
        <View style={styles.View_1_58}>
          <Text style={styles.Text_1_58}>Quality</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/306d/5414/43be788b7d2938df90c96554d4296cbd"
          }}
          style={styles.ImageBackground_1_59}
        />
        <View style={styles.View_1_62}>
          <Text style={styles.Text_1_62}>3h 30m</Text>
        </View>
      </View>
      <View style={styles.View_1_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d81/9b8b/b874a288e67cb68c3ac3d9c206b7a284"
          }}
          style={styles.ImageBackground_1_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00e7/b986/2e14da33149b117fef741cc157e49611"
          }}
          style={styles.ImageBackground_1_70}
        />
        <View style={styles.View_1_73}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bec7/5a68/8a2f89824bcc579d149fbcdfcea62ee7"
            }}
            style={styles.ImageBackground_1_74}
          />
          <View style={styles.View_1_75} />
        </View>
        <View style={styles.View_1_76}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d155/00de/25ac33dd53c64eb2241d2162fbecf8f7"
            }}
            style={styles.ImageBackground_1_77}
          />
          <View style={styles.View_1_78}>
            <Text style={styles.Text_1_78}>May</Text>
          </View>
          <View style={styles.View_1_79}>
            <Text style={styles.Text_1_79}>$27,632</Text>
          </View>
        </View>
        <View style={styles.View_1_80}>
          <Text style={styles.Text_1_80}>May</Text>
        </View>
        <View style={styles.View_1_81}>
          <Text style={styles.Text_1_81}>Apr</Text>
        </View>
        <View style={styles.View_1_82}>
          <Text style={styles.Text_1_82}>Mar</Text>
        </View>
        <View style={styles.View_1_83}>
          <Text style={styles.Text_1_83}>Feb</Text>
        </View>
        <View style={styles.View_1_84}>
          <Text style={styles.Text_1_84}>Jun</Text>
        </View>
        <View style={styles.View_1_85}>
          <Text style={styles.Text_1_85}>Jan</Text>
        </View>
        <View style={styles.View_1_86}>
          <View style={styles.View_1_87}>
            <Text style={styles.Text_1_87}>0</Text>
          </View>
          <View style={styles.View_1_88}>
            <Text style={styles.Text_1_88}>200</Text>
          </View>
          <View style={styles.View_1_89}>
            <Text style={styles.Text_1_89}>400</Text>
          </View>
          <View style={styles.View_1_90}>
            <Text style={styles.Text_1_90}>600</Text>
          </View>
          <View style={styles.View_1_91}>
            <Text style={styles.Text_1_91}>800</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 51, 52, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_14: {
    width: wp("60.469762331562315%"),
    minWidth: wp("60.469762331562315%"),
    height: hp("2.732241739992235%"),
    minHeight: hp("2.732241739992235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73334088270338%"),
    top: hp("103.14207650273224%")
  },
  ImageBackground_1_15: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_16: {
    width: wp("5.744760681578721%"),
    minWidth: wp("5.744760681578721%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466664431423787%"),
    top: hp("0%")
  },
  View_1_17: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.05109032787351%")
  },
  ImageBackground_1_18: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_20: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_21: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_23: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0.63054652813355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_24: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_26: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.2610430274504694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_27: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_29: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.891506174223025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_30: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_32: {
    width: wp("4.203099480948936%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266662087673986%")
  },
  View_1_35: {
    width: wp("86.93332625868113%"),
    minWidth: wp("86.93332625868113%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666675279404681%"),
    top: hp("8.060109289617486%")
  },
  ImageBackground_1_36: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666365017386%")
  },
  ImageBackground_1_37: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_41: {
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
  View_1_42: {
    width: wp("51.73332912326423%"),
    minWidth: wp("51.73332912326423%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666673244899639%"),
    top: hp("21.584699453551913%"),
    justifyContent: "flex-start"
  },
  Text_1_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_43: {
    width: wp("32.79999733072938%"),
    minWidth: wp("32.79999733072938%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666679348414767%"),
    top: hp("57.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_1_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_44: {
    width: wp("26.66666856553804%"),
    minWidth: wp("26.66666856553804%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66666714138451%"),
    top: hp("31.284153005464482%")
  },
  View_1_45: {
    width: wp("26.666664496527954%"),
    minWidth: wp("26.666664496527954%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000020345050435466305%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 176, 156, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_46: {
    width: wp("3.1640159575182327%"),
    height: hp("1.639344262295082%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733334412977344%")
  },
  View_1_48: {
    width: wp("6.933332769097269%"),
    minWidth: wp("6.933332769097269%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866665863715346%"),
    top: hp("13.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_49: {
    width: wp("13.866665538194537%"),
    minWidth: wp("13.866665538194537%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400001513671754%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_1_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_50: {
    width: wp("26.66666856553804%"),
    minWidth: wp("26.66666856553804%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.800002091471185%"),
    top: hp("31.284153005464482%")
  },
  View_1_51: {
    width: wp("26.666664496527954%"),
    minWidth: wp("26.666664496527954%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 138, 120, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_52: {
    width: wp("6.6666661241319884%"),
    minWidth: wp("6.6666661241319884%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86666586371534%"),
    top: hp("13.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_1_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_53: {
    width: wp("3.199999739583354%"),
    height: hp("1.639344262295082%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733332378472298%")
  },
  View_1_55: {
    width: wp("13.066665603298697%"),
    minWidth: wp("13.066665603298697%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933332769097262%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_1_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_56: {
    width: wp("26.66666856553804%"),
    minWidth: wp("26.66666856553804%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333704155786%"),
    top: hp("31.284153005464482%")
  },
  View_1_57: {
    width: wp("26.666664496527954%"),
    minWidth: wp("26.666664496527954%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 176, 156, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_58: {
    width: wp("9.333332573784785%"),
    minWidth: wp("9.333332573784785%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.53333263888895%"),
    top: hp("13.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_1_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_59: {
    width: wp("3.334668460313439%"),
    height: hp("1.639344262295082%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733332378472298%")
  },
  View_1_62: {
    width: wp("13.866665538194537%"),
    minWidth: wp("13.866665538194537%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999479166709%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_1_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_63: {
    width: wp("81.86661117621979%"),
    minWidth: wp("81.86661117621979%"),
    height: hp("25.37061972696273%"),
    minHeight: hp("25.37061972696273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666705796980323%"),
    top: hp("68.98907103825137%")
  },
  ImageBackground_1_64: {
    width: wp("72.5925884934417%"),
    height: hp("21.051283872844092%"),
    top: hp("0.30350815403005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.192729964784345%")
  },
  ImageBackground_1_70: {
    width: wp("68.71177012436766%"),
    height: hp("7.748973825590206%"),
    top: hp("8.615679297942279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.154849189872298%")
  },
  View_1_73: {
    width: wp("3.752629292592017%"),
    height: hp("8.971646835243767%"),
    top: hp("11.971045322105539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.23184902084562%")
  },
  ImageBackground_1_74: {
    width: wp("0.3484217042300045%"),
    height: hp("8.280013037509605%"),
    top: hp("0.6868456230788951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6985106039623616%")
  },
  View_1_75: {
    width: wp("3.678433436813685%"),
    height: hp("1.9201042873611869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0741943298995551%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_1_76: {
    width: wp("21.9298138891753%"),
    height: hp("8.519190386996243%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.1999161621162%")
  },
  ImageBackground_1_77: {
    width: wp("21.9298138891753%"),
    height: hp("8.519190386996243%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_78: {
    width: wp("6.425300583878533%"),
    top: hp("4.523822388362362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.594489941854654%"),
    justifyContent: "flex-start"
  },
  Text_1_78: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_79: {
    width: wp("17.792570573521274%"),
    top: hp("1.3698890560963264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0845620048370748%"),
    justifyContent: "flex-start"
  },
  Text_1_79: {
    color: "rgba(37, 51, 52, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_80: {
    width: wp("5.767473387249887%"),
    top: hp("23.438450547515373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.64355170544012%"),
    justifyContent: "flex-start"
  },
  Text_1_80: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_81: {
    width: wp("4.983549602575716%"),
    top: hp("23.475938807419737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.91021932696783%"),
    justifyContent: "flex-start"
  },
  Text_1_81: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_82: {
    width: wp("7.030831337009169%"),
    top: hp("23.511225799393785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.043549719763206%"),
    justifyContent: "flex-start"
  },
  Text_1_82: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_83: {
    width: wp("5.244855835379571%"),
    top: hp("23.547229871072403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.043550696325624%"),
    justifyContent: "flex-start"
  },
  Text_1_83: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_84: {
    width: wp("6.874434865361747%"),
    top: hp("23.403163555541326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.17687588078809%"),
    justifyContent: "flex-start"
  },
  Text_1_84: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_85: {
    width: wp("4.9835465508181525%"),
    top: hp("23.583250619023218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.145637032418861%"),
    justifyContent: "flex-start"
  },
  Text_1_85: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_86: {
    width: wp("6.720455385705128%"),
    height: hp("21.981075682926697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000006103515127975356%")
  },
  View_1_87: {
    width: wp("2.1817808283055964%"),
    top: hp("20.18941243489583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.326120660309191%"),
    justifyContent: "flex-start"
  },
  Text_1_87: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_88: {
    width: wp("6.508024067543615%"),
    top: hp("15.142055157103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.053108719636335344%"),
    justifyContent: "flex-start"
  },
  Text_1_88: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_89: {
    width: wp("6.508023050291093%"),
    top: hp("10.09471455558402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1062174392726698%"),
    justifyContent: "flex-start"
  },
  Text_1_89: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_90: {
    width: wp("6.508023050291093%"),
    top: hp("5.047357277792017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1593241244039616%"),
    justifyContent: "flex-start"
  },
  Text_1_90: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_91: {
    width: wp("6.508024067543615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2124308095352534%"),
    justifyContent: "flex-start"
  },
  Text_1_91: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
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
