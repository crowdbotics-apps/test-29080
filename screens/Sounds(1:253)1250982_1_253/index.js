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
      <View style={styles.View_1_254}>
        <View style={styles.View_1_255} />
      </View>
      <View style={styles.View_1_263} />
      <View style={styles.View_1_264}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ec/0189/68bbb144ad897ae01cc66354a8534b1d"
          }}
          style={styles.ImageBackground_1_265}
        />
        <View style={styles.View_1_266}>
          <View style={styles.View_1_267}>
            <Text style={styles.Text_1_267}>
              Sometimes the most productive thing you can do is relax.
            </Text>
          </View>
          <View style={styles.View_1_268}>
            <Text style={styles.Text_1_268}>Relax Sounds </Text>
          </View>
        </View>
        <View style={styles.View_1_269}>
          <View style={styles.View_1_270} />
          <View style={styles.View_1_271}>
            <Text style={styles.Text_1_271}>play now</Text>
          </View>
          <View style={styles.View_1_272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c036/38e5/87f1bc192ece5514e31af4e16eb88d6d"
              }}
              style={styles.ImageBackground_1_273}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_275}>
        <View style={styles.View_1_276}>
          <View style={styles.View_1_277}>
            <Text style={styles.Text_1_277}>Painting Forest</Text>
          </View>
          <View style={styles.View_1_278}>
            <Text style={styles.Text_1_278}>59899 Listening</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e2/7ed7/38488c2f37c954c776a2cce441316718"
            }}
            style={styles.ImageBackground_1_279}
          />
          <View style={styles.View_1_280}>
            <Text style={styles.Text_1_280}>20 Min</Text>
          </View>
        </View>
        <View style={styles.View_1_281}>
          <View style={styles.View_1_282}>
            <Text style={styles.Text_1_282}>Mountaineers</Text>
          </View>
          <View style={styles.View_1_283}>
            <Text style={styles.Text_1_283}>45697 Listening</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bd7/df8e/0fd966a1fa052126a7a01e92d7b23ff5"
            }}
            style={styles.ImageBackground_1_284}
          />
          <View style={styles.View_1_285}>
            <Text style={styles.Text_1_285}>15 Min</Text>
          </View>
        </View>
        <View style={styles.View_1_286}>
          <View style={styles.View_1_287}>
            <Text style={styles.Text_1_287}>Lovely Deserts</Text>
          </View>
          <View style={styles.View_1_288}>
            <Text style={styles.Text_1_288}>9428 Listening</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b08e/de32/b606538c75459e6a2686d16bf580b883"
            }}
            style={styles.ImageBackground_1_289}
          />
          <View style={styles.View_1_290}>
            <Text style={styles.Text_1_290}>39 Min</Text>
          </View>
        </View>
        <View style={styles.View_1_291}>
          <View style={styles.View_1_292}>
            <Text style={styles.Text_1_292}>The Hill Sides</Text>
          </View>
          <View style={styles.View_1_293}>
            <Text style={styles.Text_1_293}>52599 Listening</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6757/0b29/c6c1ab252fab628055c71d139ada7279"
            }}
            style={styles.ImageBackground_1_294}
          />
          <View style={styles.View_1_295}>
            <Text style={styles.Text_1_295}>50 Min</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_296}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
          }}
          style={styles.ImageBackground_1_297}
        />
        <View style={styles.View_1_298}>
          <View style={styles.View_1_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c38d/4014/322e87a1154f96fb2f9db54c1cf46a49"
              }}
              style={styles.ImageBackground_1_300}
            />
          </View>
          <View style={styles.View_1_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf3/3edf/3c8fcafa34f7f9ac50089c1db22fe10c"
              }}
              style={styles.ImageBackground_1_303}
            />
          </View>
          <View style={styles.View_1_305}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf3/3edf/3c8fcafa34f7f9ac50089c1db22fe10c"
              }}
              style={styles.ImageBackground_1_306}
            />
          </View>
          <View style={styles.View_1_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6c46/b55cdc3156a37dd4a21ae7287c217e12"
              }}
              style={styles.ImageBackground_1_309}
            />
          </View>
          <View style={styles.View_1_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6c46/b55cdc3156a37dd4a21ae7287c217e12"
              }}
              style={styles.ImageBackground_1_312}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_314}
        />
      </View>
      <View style={styles.View_1_317}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_318}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_319}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_323}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_254: {
    width: wp("108.2666578559035%"),
    minWidth: wp("108.2666578559035%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.266656838650974%"),
    top: hp("0.000004169068049863388%")
  },
  View_1_255: {
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
  View_1_263: {
    width: wp("18.933331792534847%"),
    minWidth: wp("18.933331792534847%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-35.46665665961453%"),
    top: hp("34.69945772098062%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_264: {
    width: wp("90.39999264322977%"),
    minWidth: wp("90.39999264322977%"),
    height: hp("26.639348431363132%"),
    minHeight: hp("26.639348431363132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800006730142681%"),
    top: hp("19.398911272893187%")
  },
  ImageBackground_1_265: {
    width: wp("90.39999264322977%"),
    minWidth: wp("90.39999264322977%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000020345050435466305%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_266: {
    width: wp("50.39999589843783%"),
    minWidth: wp("50.39999589843783%"),
    height: hp("9.97267968016244%"),
    minHeight: hp("9.97267968016244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866667898220385%"),
    top: hp("4.371582614919525%")
  },
  View_1_267: {
    width: wp("50.39999589843783%"),
    minWidth: wp("50.39999589843783%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054646893277194%"),
    justifyContent: "flex-start"
  },
  Text_1_267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_268: {
    width: wp("39.73333009982665%"),
    minWidth: wp("39.73333009982665%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0000020845340280573055%"),
    justifyContent: "flex-start"
  },
  Text_1_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_269: {
    width: wp("36.79999700520858%"),
    minWidth: wp("36.79999700520858%"),
    height: hp("5.327870936993041%"),
    minHeight: hp("5.327870936993041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866667898220385%"),
    top: hp("17.076502732240435%")
  },
  View_1_270: {
    width: wp("36.79999700520858%"),
    minWidth: wp("36.79999700520858%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_271: {
    width: wp("14.133332183159816%"),
    minWidth: wp("14.133332183159816%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533332638888945%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_1_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_272: {
    width: wp("3.2019688861516205%"),
    height: hp("1.775956153869629%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73333547091996%")
  },
  ImageBackground_1_273: {
    width: wp("3.2019688861516205%"),
    height: hp("1.775956153869629%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_275: {
    width: wp("79.73332684461857%"),
    minWidth: wp("79.73332684461857%"),
    height: hp("44.12568306010929%"),
    minHeight: hp("44.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333759494323%"),
    top: hp("51.502734324971186%")
  },
  View_1_276: {
    width: wp("79.73332684461857%"),
    minWidth: wp("79.73332684461857%"),
    height: hp("8.879783505299052%"),
    minHeight: hp("8.879783505299052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004069010085316904%"),
    top: hp("0%")
  },
  View_1_277: {
    width: wp("31.466664105902986%"),
    minWidth: wp("31.466664105902986%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66666482204876%"),
    top: hp("1.7759571961366376%"),
    justifyContent: "flex-start"
  },
  Text_1_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_278: {
    width: wp("19.199998437500128%"),
    minWidth: wp("19.199998437500128%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933331467014035%"),
    top: hp("5.327869894726028%"),
    justifyContent: "flex-start"
  },
  Text_1_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_279: {
    width: wp("17.33333192274317%"),
    minWidth: wp("17.33333192274317%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.211335079025048e-7%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_280: {
    width: wp("10.933332443576461%"),
    minWidth: wp("10.933332443576461%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.79999440104213%"),
    top: hp("3.278690348557433%"),
    justifyContent: "flex-start"
  },
  Text_1_280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_281: {
    width: wp("78.93332690972275%"),
    minWidth: wp("78.93332690972275%"),
    height: hp("8.879783505299052%"),
    minHeight: hp("8.879783505299052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004069010085316904%"),
    top: hp("11.748633879781416%")
  },
  View_1_282: {
    width: wp("29.59999759114603%"),
    minWidth: wp("29.59999759114603%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933327398003954%"),
    top: hp("1.77595732642002%"),
    justifyContent: "flex-start"
  },
  Text_1_282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_283: {
    width: wp("18.933331792534847%"),
    minWidth: wp("18.933331792534847%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933327398003954%"),
    top: hp("5.1912578728681%"),
    justifyContent: "flex-start"
  },
  Text_1_283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_284: {
    width: wp("17.33333192274317%"),
    minWidth: wp("17.33333192274317%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_285: {
    width: wp("10.133332508680622%"),
    minWidth: wp("10.133332508680622%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.79999440104213%"),
    top: hp("3.2786906091241903%"),
    justifyContent: "flex-start"
  },
  Text_1_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_286: {
    width: wp("79.19999355468802%"),
    minWidth: wp("79.19999355468802%"),
    height: hp("8.879783505299052%"),
    minHeight: hp("8.879783505299052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666707139753637%"),
    top: hp("23.49726775956283%")
  },
  View_1_287: {
    width: wp("30.133330881076585%"),
    minWidth: wp("30.133330881076585%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.399998177083482%"),
    top: hp("1.7759583686870428%"),
    justifyContent: "flex-start"
  },
  Text_1_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_288: {
    width: wp("18.39999850260429%"),
    minWidth: wp("18.39999850260429%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.399998177083482%"),
    top: hp("5.191258915135123%"),
    justifyContent: "flex-start"
  },
  Text_1_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_289: {
    width: wp("17.33333192274317%"),
    minWidth: wp("17.33333192274317%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_290: {
    width: wp("10.66666579861118%"),
    minWidth: wp("10.66666579861118%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53332775607686%"),
    top: hp("3.2786906091241974%"),
    justifyContent: "flex-start"
  },
  Text_1_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_291: {
    width: wp("79.73332684461857%"),
    minWidth: wp("79.73332684461857%"),
    height: hp("8.879783505299052%"),
    minHeight: hp("8.879783505299052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000004069010085316904%"),
    top: hp("35.245901639344254%")
  },
  View_1_292: {
    width: wp("28.53333101128491%"),
    minWidth: wp("28.53333101128491%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66666482204876%"),
    top: hp("1.7759583686870286%"),
    justifyContent: "flex-start"
  },
  Text_1_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_293: {
    width: wp("18.933331792534847%"),
    minWidth: wp("18.933331792534847%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.66666482204876%"),
    top: hp("5.191258915135123%"),
    justifyContent: "flex-start"
  },
  Text_1_293: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_294: {
    width: wp("17.33333192274317%"),
    minWidth: wp("17.33333192274317%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_295: {
    width: wp("10.933332443576461%"),
    minWidth: wp("10.933332443576461%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.79999440104213%"),
    top: hp("3.2786906091241974%"),
    justifyContent: "flex-start"
  },
  Text_1_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_296: {
    width: wp("60.469762331562315%"),
    minWidth: wp("60.469762331562315%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73334088270338%"),
    top: hp("102.73224460622652%")
  },
  ImageBackground_1_297: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_298: {
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
  View_1_299: {
    width: wp("4.617086416252733%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5641273954974437%")
  },
  ImageBackground_1_300: {
    width: wp("4.617086416252733%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_302: {
    width: wp("3.5897432584844355%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_303: {
    width: wp("3.5897432584844355%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_305: {
    width: wp("3.5897432584844355%"),
    height: hp("0.262715370277238%"),
    top: hp("0.7881623148266783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_306: {
    width: wp("3.5897432584844355%"),
    height: hp("0.262715370277238%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_308: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("1.5763246296533566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_309: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_311: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("2.3644452537995306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_312: {
    width: wp("2.051281825660659%"),
    height: hp("0.26271541913350427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_314: {
    width: wp("4.203099480948936%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266662087673986%")
  },
  View_1_317: {
    width: wp("86.93332625868113%"),
    minWidth: wp("86.93332625868113%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666675279404681%"),
    top: hp("8.060113458685535%")
  },
  ImageBackground_1_318: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666365017386%")
  },
  ImageBackground_1_319: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_323: {
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
