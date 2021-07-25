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
      <View style={styles.View_1_735}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f29/a30b/e82a0e08330aeaed82c4e62be3f7ca57"
          }}
          style={styles.ImageBackground_1_736}
        />
        <View style={styles.View_1_737} />
      </View>
      <View style={styles.View_1_738}>
        <View style={styles.View_1_739} />
        <View style={styles.View_1_740}>
          <Text style={styles.Text_1_740}>Login With Email</Text>
        </View>
      </View>
      <View style={styles.View_1_741}>
        <Text style={styles.Text_1_741}>Don’t have an account? Sign Up</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e1f/7f38/785e78dd756ec92a0403c8a43f7dd997"
        }}
        style={styles.ImageBackground_1_742}
      />
      <View style={styles.View_1_743}>
        <View style={styles.View_1_744}>
          <Text style={styles.Text_1_744}>
            Do meditation. Stay focused. Live a healthy life.
          </Text>
        </View>
        <View style={styles.View_1_745}>
          <Text style={styles.Text_1_745}>WELCOME</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_735: {
    width: wp("319.46666666666664%"),
    minWidth: wp("319.46666666666664%"),
    height: hp("133.46994535519124%"),
    minHeight: hp("133.46994535519124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-22.540983606557376%")
  },
  ImageBackground_1_736: {
    width: wp("319.46666666666664%"),
    minWidth: wp("319.46666666666664%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_737: {
    width: wp("108.26666666666667%"),
    minWidth: wp("108.26666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.21311475409836%"),
    backgroundColor: "rgba(37, 51, 52, 1)"
  },
  View_1_738: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("85.24590163934425%")
  },
  View_1_739: {
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
  View_1_740: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1_740: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_741: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("96.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_1_741: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_742: {
    width: wp("50.93333333333333%"),
    height: hp("27.18579234972678%"),
    top: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%")
  },
  View_1_743: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("56.14754098360656%")
  },
  View_1_744: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_1_744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_745: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.26666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
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
