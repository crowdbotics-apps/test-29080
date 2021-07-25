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
      <View style={styles.View_1_93}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
          }}
          style={styles.ImageBackground_1_94}
        />
        <View style={styles.View_1_95}>
          <View style={styles.View_1_96}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
              }}
              style={styles.ImageBackground_1_97}
            />
          </View>
          <View style={styles.View_1_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_100}
            />
          </View>
          <View style={styles.View_1_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_103}
            />
          </View>
          <View style={styles.View_1_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_106}
            />
          </View>
          <View style={styles.View_1_108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_109}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_111}
        />
      </View>
      <View style={styles.View_1_114}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_120}
        />
      </View>
      <View style={styles.View_1_121}>
        <Text style={styles.Text_1_121}>Tools</Text>
      </View>
      <View style={styles.View_1_122}>
        <View style={styles.View_1_123} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df6/3c11/1e55c33fe452ea88ac0ebcef5586f19c"
          }}
          style={styles.ImageBackground_1_124}
        />
        <View style={styles.View_1_125}>
          <Text style={styles.Text_1_125}>Trigger Plan</Text>
        </View>
        <View style={styles.View_1_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06cd/9767/e398220089b2d0e8332ead6c5725df09"
            }}
            style={styles.ImageBackground_1_127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b7a/3176/e47c6af72a7736881ead7e028c2ecaaf"
            }}
            style={styles.ImageBackground_1_128}
          />
        </View>
      </View>
      <View style={styles.View_1_131}>
        <View style={styles.View_1_132} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de83/38fb/6a78a4137bc88bf76ec4e244ebbfa1aa"
          }}
          style={styles.ImageBackground_1_133}
        />
        <View style={styles.View_1_134}>
          <Text style={styles.Text_1_134}>Mood Booster</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9e/d103/0d204f4da6355509116eef39462fa5f7"
          }}
          style={styles.ImageBackground_1_135}
        />
      </View>
      <View style={styles.View_1_144}>
        <View style={styles.View_1_145} />
        <View style={styles.View_1_146}>
          <Text style={styles.Text_1_146}>Mood Journal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7782/669a/6745defd63de952450fbd0507d9d7892"
          }}
          style={styles.ImageBackground_1_147}
        />
        <View style={styles.View_1_148}>
          <Text style={styles.Text_1_148}>Mood Journal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc2/275f/fab4cdfc1ffaf69e7e5a12224c7e4881"
          }}
          style={styles.ImageBackground_1_149}
        />
      </View>
      <View style={styles.View_1_153}>
        <View style={styles.View_1_154} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2d3/9c74/e4c42826bfd753caebeb76e4c5dabda6"
          }}
          style={styles.ImageBackground_1_155}
        />
        <View style={styles.View_1_156}>
          <Text style={styles.Text_1_156}>Positive Notes</Text>
        </View>
        <View style={styles.View_1_157}>
          <View style={styles.View_1_158}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55ee/7301/11712ecff670dd1f43abfecf3d44ec1e"
              }}
              style={styles.ImageBackground_1_159}
            />
          </View>
          <View style={styles.View_1_161}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc30/51e7/a0aab1d17f3a426dfc9e3e15a6e00d4c"
              }}
              style={styles.ImageBackground_1_162}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_164}>
        <View style={styles.View_1_165} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbfb/36e9/83ade8fef360566283121c259429b20d"
          }}
          style={styles.ImageBackground_1_166}
        />
        <View style={styles.View_1_167}>
          <Text style={styles.Text_1_167}>Goal Trainer</Text>
        </View>
        <View style={styles.View_1_168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/6ca3/0c3565f8288dd54c30188fe713110df6"
            }}
            style={styles.ImageBackground_1_169}
          />
        </View>
        <View style={styles.View_1_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a18b/5102/dd1ff111d02259e972d43d29585008dc"
            }}
            style={styles.ImageBackground_1_172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d4/b6e9/51382d14bcd1ee1bc8364009302f46c1"
            }}
            style={styles.ImageBackground_1_175}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f8/9a54/8e8b9959990aa256562f570b8728652b"
            }}
            style={styles.ImageBackground_1_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba5e/327c/5f80f384ee37357fc41af7e38355cb25"
            }}
            style={styles.ImageBackground_1_188}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 51, 52, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_93: {
    width: wp("60.469762331562315%"),
    minWidth: wp("60.469762331562315%"),
    height: hp("2.732241739992235%"),
    minHeight: hp("2.732241739992235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333986545086%"),
    top: hp("103.14207650273224%")
  },
  ImageBackground_1_94: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_95: {
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
  View_1_96: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.051090327873517%")
  },
  ImageBackground_1_97: {
    width: wp("3.693669336452691%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_99: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_100: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_102: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0.63054652813355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_103: {
    width: wp("2.871794403337044%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_105: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.2610430274504694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_106: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_108: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.891506174223025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_109: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_111: {
    width: wp("4.203099480948936%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.26666208767398%")
  },
  View_1_114: {
    width: wp("86.93332625868113%"),
    minWidth: wp("86.93332625868113%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66667426215216%"),
    top: hp("8.060109289617486%")
  },
  ImageBackground_1_115: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666365017385%")
  },
  ImageBackground_1_116: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_120: {
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
  View_1_121: {
    width: wp("20.533331662326525%"),
    minWidth: wp("20.533331662326525%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66667426215216%"),
    top: hp("21.584699453551913%"),
    justifyContent: "flex-start"
  },
  Text_1_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_122: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710384598195226%"),
    minHeight: hp("15.710384598195226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.80000384114552%"),
    top: hp("49.31693989071038%")
  },
  View_1_123: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(169, 213, 113, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_124: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  View_1_125: {
    width: wp("22.93333146701404%"),
    minWidth: wp("22.93333146701404%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_1_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_126: {
    width: wp("4.799999609375032%"),
    minWidth: wp("4.799999609375032%"),
    height: hp("2.3605156465957724%"),
    minHeight: hp("2.3605156465957724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("7.1038251366120235%")
  },
  ImageBackground_1_127: {
    width: wp("4.403504076863276%"),
    height: hp("2.156962462461711%"),
    top: hp("0.10162520278347387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19836831067966898%")
  },
  ImageBackground_1_128: {
    width: wp("4.799999609375032%"),
    height: hp("2.3605156465957724%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_131: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710384598195226%"),
    minHeight: hp("15.710384598195226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.80000384114552%"),
    top: hp("30.87431693989071%")
  },
  View_1_132: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
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
  ImageBackground_1_133: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688465%")
  },
  View_1_134: {
    width: wp("26.399997851562674%"),
    minWidth: wp("26.399997851562674%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_1_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_135: {
    width: wp("4.53335280083392%"),
    height: hp("2.3224043715846996%"),
    top: hp("7.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333029513915%")
  },
  View_1_144: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710384598195226%"),
    minHeight: hp("15.710384598195226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.6666661241319884%"),
    top: hp("30.87431693989071%")
  },
  View_1_145: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(62, 132, 105, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_146: {
    width: wp("28.53333101128491%"),
    minWidth: wp("28.53333101128491%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333332899305591%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_1_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_147: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688465%")
  },
  View_1_148: {
    width: wp("25.599997916666833%"),
    minWidth: wp("25.599997916666833%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833555%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_1_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_149: {
    width: wp("4.84132294992489%"),
    height: hp("2.3224043715846996%"),
    top: hp("7.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333029513914%")
  },
  View_1_153: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710384598195226%"),
    minHeight: hp("15.710384598195226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66667426215216%"),
    top: hp("49.31693989071038%")
  },
  View_1_154: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(106, 174, 114, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_155: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  View_1_156: {
    width: wp("26.666664496527954%"),
    minWidth: wp("26.666664496527954%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_1_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_157: {
    width: wp("4.391445056848546%"),
    minWidth: wp("4.391445056848546%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("7.1038251366120235%")
  },
  View_1_158: {
    width: wp("4.391445056848546%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_159: {
    width: wp("4.391445056848546%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_161: {
    width: wp("1.859460679365179%"),
    height: hp("0.952592573530687%"),
    top: hp("0.5442218050930734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0626057077957594%")
  },
  ImageBackground_1_162: {
    width: wp("1.859460679365179%"),
    height: hp("0.952592573530687%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_164: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710386682729252%"),
    minHeight: hp("15.710386682729252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66667426215216%"),
    top: hp("67.75956284153006%")
  },
  View_1_165: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(177, 177, 177, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_166: {
    width: wp("40.79999667968777%"),
    minWidth: wp("40.79999667968777%"),
    height: hp("13.057327270507812%"),
    minHeight: hp("13.057327270507812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6530614967554698%")
  },
  View_1_167: {
    width: wp("22.93333146701404%"),
    minWidth: wp("22.93333146701404%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999997395833546%"),
    top: hp("9.972677595628411%"),
    justifyContent: "flex-start"
  },
  Text_1_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_168: {
    width: wp("3.4000594868929452%"),
    height: hp("2.3224043715846996%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666384548633%")
  },
  ImageBackground_1_169: {
    width: wp("3.4000594868929452%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_171: {
    width: wp("5.199521468137902%"),
    minWidth: wp("5.199521468137902%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.99999739583355%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_1_172: {
    width: wp("5.0532848060477855%"),
    height: hp("2.247488042695926%"),
    top: hp("0.03745490735998658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07306314509576595%")
  },
  ImageBackground_1_175: {
    width: wp("5.199521468137902%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_181: {
    width: wp("2.161051002111735%"),
    height: hp("1.9394989222125278%"),
    top: hp("0.19146028112193392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5192056055333936%")
  },
  ImageBackground_1_188: {
    width: wp("3.8906142565418085%"),
    height: hp("0.3015148509395579%"),
    top: hp("1.0095148138661187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6498778768003035%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
