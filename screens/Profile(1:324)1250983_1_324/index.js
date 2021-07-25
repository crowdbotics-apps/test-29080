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
      <View style={styles.View_1_325}>
        <View style={styles.View_1_326} />
      </View>
      <View style={styles.View_1_335}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7282/e28b/5dba2d042e45691250f35b34c67bf48b"
          }}
          style={styles.ImageBackground_1_336}
        />
        <View style={styles.View_1_337}>
          <View style={styles.View_1_338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
              }}
              style={styles.ImageBackground_1_339}
            />
          </View>
          <View style={styles.View_1_341}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_342}
            />
          </View>
          <View style={styles.View_1_344}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_345}
            />
          </View>
          <View style={styles.View_1_347}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_348}
            />
          </View>
          <View style={styles.View_1_350}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_351}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7052/18eb/93f473446a602b1acb7aee8c9ab89558"
          }}
          style={styles.ImageBackground_1_353}
        />
      </View>
      <View style={styles.View_1_356}>
        <View style={styles.View_1_357}>
          <Text style={styles.Text_1_357}>STATS</Text>
        </View>
        <View style={styles.View_1_358}>
          <Text style={styles.Text_1_358}>ACHIEVEMENTS</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0598/dfda/9e6ddd93687b8cc8f6e982d1902eb40f"
          }}
          style={styles.ImageBackground_1_359}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30de/b854/1a218e7d847e4a5af50ef9e4a5ae9df4"
          }}
          style={styles.ImageBackground_1_360}
        />
      </View>
      <View style={styles.View_1_361}>
        <View style={styles.View_1_362}>
          <View style={styles.View_1_363}>
            <Text style={styles.Text_1_363}>999</Text>
          </View>
          <View style={styles.View_1_364}>
            <Text style={styles.Text_1_364}>0</Text>
          </View>
          <View style={styles.View_1_365}>
            <Text style={styles.Text_1_365}>199</Text>
          </View>
          <View style={styles.View_1_366}>
            <Text style={styles.Text_1_366}>399</Text>
          </View>
          <View style={styles.View_1_367}>
            <Text style={styles.Text_1_367}>599</Text>
          </View>
          <View style={styles.View_1_368}>
            <Text style={styles.Text_1_368}>799</Text>
          </View>
        </View>
        <View style={styles.View_1_369}>
          <View style={styles.View_1_370}>
            <Text style={styles.Text_1_370}>Mon</Text>
          </View>
          <View style={styles.View_1_371}>
            <Text style={styles.Text_1_371}>Tue</Text>
          </View>
          <View style={styles.View_1_372}>
            <Text style={styles.Text_1_372}>Wed</Text>
          </View>
          <View style={styles.View_1_373}>
            <Text style={styles.Text_1_373}>Thu</Text>
          </View>
          <View style={styles.View_1_374}>
            <Text style={styles.Text_1_374}>Fri</Text>
          </View>
          <View style={styles.View_1_375}>
            <Text style={styles.Text_1_375}>Sat</Text>
          </View>
          <View style={styles.View_1_376}>
            <Text style={styles.Text_1_376}>Sat</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/231d/2232/13b1a9d016c3922f0e729bf5ba79131f"
          }}
          style={styles.ImageBackground_1_377}
        />
        <View style={styles.View_1_384}>
          <Text style={styles.Text_1_384}>This Week’s Stats</Text>
        </View>
        <View style={styles.View_1_385}>
          <Text style={styles.Text_1_385}>Show All</Text>
        </View>
        <View style={styles.View_1_386}>
          <View style={styles.View_1_387} />
          <View style={styles.View_1_388} />
          <View style={styles.View_1_389} />
          <View style={styles.View_1_390} />
          <View style={styles.View_1_391} />
          <View style={styles.View_1_392} />
        </View>
        <View style={styles.View_1_393}>
          <View style={styles.View_1_394} />
          <View style={styles.View_1_395} />
          <View style={styles.View_1_396} />
          <View style={styles.View_1_397} />
          <View style={styles.View_1_398} />
          <View style={styles.View_1_399} />
          <View style={styles.View_1_400} />
        </View>
      </View>
      <View style={styles.View_1_401}>
        <Text style={styles.Text_1_401}>Afreen Khan</Text>
      </View>
      <View style={styles.View_1_402}>
        <Text style={styles.Text_1_402}>Lucknow, India</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aba/52f7/1a457237c48c9c94e5ab9ab41854939c"
        }}
        style={styles.ImageBackground_1_403}
      />
      <View style={styles.View_1_404}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_405}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_406}
        />
        <View style={styles.View_1_410}>
          <Text style={styles.Text_1_410}>edit</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_325: {
    width: wp("108.2666578559035%"),
    minWidth: wp("108.2666578559035%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.266649717883324%"),
    top: hp("0.000004169068049863388%")
  },
  View_1_326: {
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
  View_1_335: {
    width: wp("61.52053535802935%"),
    minWidth: wp("61.52053535802935%"),
    height: hp("3.4153018492818528%"),
    minHeight: hp("3.4153018492818528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73334800347103%"),
    top: hp("102.73224460622652%")
  },
  ImageBackground_1_336: {
    width: wp("5.1156459459923544%"),
    height: hp("2.73224043715847%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_337: {
    width: wp("5.744918864345796%"),
    minWidth: wp("5.744918864345796%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466664431423794%"),
    top: hp("0.4098360655737707%")
  },
  View_1_338: {
    width: wp("3.6936690821395604%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0512530882769298%")
  },
  ImageBackground_1_339: {
    width: wp("3.6936690821395604%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_341: {
    width: wp("2.8717946576501743%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_342: {
    width: wp("2.8717946576501743%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_344: {
    width: wp("2.8717946576501743%"),
    height: hp("0.21017229622179043%"),
    top: hp("0.6305215137252418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_345: {
    width: wp("2.8717946576501743%"),
    height: hp("0.21017229622179043%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_347: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.2610471965185326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_348: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_350: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("1.891543695835466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_351: {
    width: wp("1.641025409665901%"),
    height: hp("0.2101723287926346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_353: {
    width: wp("5.2538742876078866%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266662087673986%")
  },
  View_1_356: {
    width: wp("99.99999186197984%"),
    minWidth: wp("99.99999186197984%"),
    height: hp("4.234979712897963%"),
    minHeight: hp("4.234979712897963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7999836588554965%"),
    top: hp("54.91803467599421%")
  },
  View_1_357: {
    width: wp("10.66666579861118%"),
    minWidth: wp("10.66666579861118%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733331727430684%"),
    top: hp("0.0000010748378542757564%"),
    justifyContent: "flex-start"
  },
  Text_1_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_358: {
    width: wp("28.53333101128491%"),
    minWidth: wp("28.53333101128491%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.79999505208373%"),
    top: hp("0.0000020193923333522434%"),
    justifyContent: "flex-start"
  },
  Text_1_358: {
    color: "rgba(58, 80, 81, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_359: {
    width: wp("49.86666260850727%"),
    minWidth: wp("49.86666260850727%"),
    height: hp("0.000002233341522403494%"),
    minHeight: hp("0.000002233341522403494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13332925347255%"),
    top: hp("4.2349744364212185%")
  },
  ImageBackground_1_360: {
    width: wp("50.13332925347256%"),
    minWidth: wp("50.13332925347256%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234977302655501%")
  },
  View_1_361: {
    width: wp("72.26666078559076%"),
    minWidth: wp("72.26666078559076%"),
    height: hp("32.10382722114605%"),
    minHeight: hp("32.10382722114605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06668187933904%"),
    top: hp("65.02732448890562%")
  },
  View_1_362: {
    width: wp("5.33333289930559%"),
    minWidth: wp("5.33333289930559%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371585741720551%")
  },
  View_1_363: {
    width: wp("4.799999609375032%"),
    minWidth: wp("4.799999609375032%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_364: {
    width: wp("1.599999869791677%"),
    minWidth: wp("1.599999869791677%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333029513915%"),
    top: hp("23.224044758114005%"),
    justifyContent: "flex-start"
  },
  Text_1_364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_365: {
    width: wp("3.9999996744791932%"),
    minWidth: wp("3.9999996744791932%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999348958404%"),
    top: hp("18.579236014944613%"),
    justifyContent: "flex-start"
  },
  Text_1_365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_366: {
    width: wp("4.799999609375032%"),
    minWidth: wp("4.799999609375032%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934427271775206%"),
    justifyContent: "flex-start"
  },
  Text_1_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_367: {
    width: wp("4.799999609375032%"),
    minWidth: wp("4.799999609375032%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289618528605814%"),
    justifyContent: "flex-start"
  },
  Text_1_367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_368: {
    width: wp("4.533332964409753%"),
    minWidth: wp("4.533332964409753%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666664496528014%"),
    top: hp("4.644809785436422%"),
    justifyContent: "flex-start"
  },
  Text_1_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_369: {
    width: wp("63.73332814670181%"),
    minWidth: wp("63.73332814670181%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533332638888947%"),
    top: hp("30.60109498070888%")
  },
  View_1_370: {
    width: wp("5.33333289930559%"),
    minWidth: wp("5.33333289930559%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_370: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_371: {
    width: wp("4.2666663194444725%"),
    minWidth: wp("4.2666663194444725%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666665798611184%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_372: {
    width: wp("5.33333289930559%"),
    minWidth: wp("5.33333289930559%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533331662326525%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_373: {
    width: wp("4.799999609375032%"),
    minWidth: wp("4.799999609375032%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.19999746093771%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_374: {
    width: wp("3.4666663845486343%"),
    minWidth: wp("3.4666663845486343%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666332465305%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_375: {
    width: wp("4.2666663194444725%"),
    minWidth: wp("4.2666663194444725%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866662608507276%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_376: {
    width: wp("4.2666663194444725%"),
    minWidth: wp("4.2666663194444725%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666182725733%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_377: {
    width: wp("65.06666137152821%"),
    minWidth: wp("65.06666137152821%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999414062546%"),
    top: hp("5.191257872868093%")
  },
  View_1_384: {
    width: wp("22.133331532118202%"),
    minWidth: wp("22.133331532118202%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0000010422670015941549%"),
    justifyContent: "flex-start"
  },
  Text_1_384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_385: {
    width: wp("11.199999088541741%"),
    minWidth: wp("11.199999088541741%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6666618923615%"),
    top: hp("0.0000020845340173991644%"),
    justifyContent: "flex-start"
  },
  Text_1_385: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_386: {
    width: wp("52.26666241319479%"),
    minWidth: wp("52.26666241319479%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666665473090376%"),
    top: hp("17.076502732240428%")
  },
  View_1_387: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879779336230996%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_388: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999153645897%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_389: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.799998307291798%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_390: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666664171007138%"),
    top: hp("3.6885245901639365%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_391: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733330099826645%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_392: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666267361143%"),
    top: hp("0%"),
    backgroundColor: "rgba(94, 128, 130, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_393: {
    width: wp("62.133328276910134%"),
    minWidth: wp("62.133328276910134%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999218750064%"),
    top: hp("8.469947439725274%")
  },
  View_1_394: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.983606557377044%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_395: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333250868062%"),
    top: hp("12.295081967213108%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_396: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333166232653%"),
    top: hp("12.841530054644807%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_397: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.93333081597243%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_398: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.26666338975721%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_399: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333329318576716%"),
    top: hp("5.191256830601091%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_400: {
    width: wp("3.199999739583354%"),
    minWidth: wp("3.199999739583354%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93332853732679%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 203, 207, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_1_401: {
    width: wp("48.53332938368088%"),
    minWidth: wp("48.53332938368088%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866680837672458%"),
    top: hp("40.43716055447938%"),
    justifyContent: "flex-start"
  },
  Text_1_401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_402: {
    width: wp("30.666664171007145%"),
    minWidth: wp("30.666664171007145%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.0666799262142%"),
    top: hp("46.99453812479321%"),
    justifyContent: "flex-start"
  },
  Text_1_402: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_403: {
    width: wp("39.99999674479193%"),
    minWidth: wp("39.99999674479193%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.13334715711693%"),
    top: hp("18.85246318546149%")
  },
  View_1_404: {
    width: wp("85.59999303385474%"),
    minWidth: wp("85.59999303385474%"),
    height: hp("6.693991155572276%"),
    minHeight: hp("6.693991155572276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666682400172331%"),
    top: hp("8.060113458685535%")
  },
  ImageBackground_1_405: {
    width: wp("11.575999017252684%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.066663650173865%")
  },
  ImageBackground_1_406: {
    width: wp("5.86666618923615%"),
    height: hp("2.459016393442623%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_410: {
    width: wp("6.399999479166708%"),
    minWidth: wp("6.399999479166708%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.19999355468802%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_1_410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
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
