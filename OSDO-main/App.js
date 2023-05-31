import { StatusBar } from 'expo-status-bar';
import {Camera, CameraType } from 'expo-camera'
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { 
  FontAwesome, 
  MaterialIcons, 
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { Calendar } from 'react-native-calendars';
import moment from 'moment/moment';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './component/style';
import Closet from './component/Homescreen/closet';
const Stack = createStackNavigator();
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity>
          <Text>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>New User?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <Text style={styles.buttonText}>Or</Text>
      </View>
      <View style={styles.otherMethods}>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="facebook"
            size={30}
            color="#3B5998"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="twitter"
            size={30}
            color="#55ACEE"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="google"
            size={30}
            color="#dd4b39"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeSrceen = ({navigation}) =>{
  const [currentDate, setcurrentDate] = useState('');

  useEffect(()=>{
    var date = new Date().getDate();
    var date = moment().format('dddd');
    setcurrentDate(date);
  },[]);

  return (
    <View style={styles.container_app}>
      <ScrollView>
        <View style={styles.user_box}>
          <View style={styles.user_icon}>
            <FontAwesome
              name="user"
              size={50}
              color="white"
              marginLeft={15}
              marginTop={5}
            />
          </View>
          <View style={styles.setup_box}>
              <Text style={{fontSize: 30}}>Admin</Text>
              <Text style={{textDecorationLine: 'underline'}}>See profile</Text>
          </View>
        </View>
        <View style={styles.today_box}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 18}}>
              {currentDate}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="location-on" size={23} color="black" />
              <Text style={{marginLeft: 5, fontSize: 18}}>Ho Chi Minh City</Text>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={styles.today_text}>Today</Text>
            <View style={{flexDirection: 'row'}}>
              <Text  style={{fontSize: 18}}>27 ℃</Text>
              <FontAwesome5 name="cloud-sun" size={23} color="white" marginLeft={5}/>
            </View>
          </View>
        </View>
        <View>
          <Calendar style={styles.calender_s}
          theme={{
            todayTextColor: 'white',
            todayBackgroundColor: 'pink',
            arrowHeight: 100,
          }}
          markedDates={{
            'Sun': {color: 'pink'},
          }}
          />
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', borderTopWidth: 1,  borderTopColor: 'gray', paddingTop: 10}}>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Home")} >
          <Entypo name="home" size={30} color="pink" />
          <Text style={{fontSize: 20}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Closet")}>
          <MaterialCommunityIcons name="wardrobe-outline" size={30} color="black" />
          <Text style={{fontSize: 20}}>Closet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ai_icon} onPress={() => navigation.navigate("AI")}>
          <MaterialCommunityIcons name="robot-outline" size={30} color="black"/>
          <Text style={{fontSize: 20}}>AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Ionicons name="ios-chatbubble-ellipses-outline" size={30} color="black" />
          <Text style={{fontSize: 20}}>Stylist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Entypo name="news" size={30} color="black" />
          <Text style={{fontSize: 20}}>News</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ClosetSrceen = ({navigation}) =>{
  return(
    <View style={styles.container_app}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image style={{resizeMode: "contain", height: 310, width: '100%'}} source={require('./assets/Closet.png')} />
          <Text style={{fontSize: 35}}>Caterogy</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
            <TouchableOpacity>
              <AntDesign name="search1" size={30} color="black" marginRight={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="pen" size={30} color="black" marginRight={20}/>
            </TouchableOpacity>
          </View>
          <Closet thing="Clothing"/>
          <Closet thing="Shoes"/>
          <Closet thing="Bags"/>
          <Closet thing="Accessories"/>
          <Closet thing="Outerwear"/>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', borderTopWidth: 1,  borderTopColor: 'gray', paddingTop: 10}}>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Home")} >
          <Entypo name="home" size={30} color="black" />
          <Text style={{fontSize: 20}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Closet")}>
          <MaterialCommunityIcons name="wardrobe-outline" size={30} color="pink" />
          <Text style={{fontSize: 20}}>Closet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ai_icon} onPress={() => navigation.navigate("AI")}>
          <MaterialCommunityIcons name="robot-outline" size={30} color="black"/>
          <Text style={{fontSize: 20}}>AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Ionicons name="ios-chatbubble-ellipses-outline" size={30} color="black" />
          <Text style={{fontSize: 20}}>Stylist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Entypo name="news" size={30} color="black" />
          <Text style={{fontSize: 20}}>News</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const AISrceen = ({navigation}) =>{
  return(
    <View style={styles.container_app}>
      <ScrollView style={{flexDirection: 'column-reverse'}}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 35, color: 'aqua', opacity: 0.5}}>Score Outfit</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <ImageBackground source={require('./assets/chat.png')} style={{resizeMode: 'cover', width: 500, height: 450}}>
              <TouchableOpacity>
                <View style={styles.ai_box}>
                  <Text style={{fontSize: 30, color: 'white', padding: 10}}>Select from web</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Picture")}>
                <View style={styles.ai_box}>
                  <Text style={{fontSize: 30, color: 'white', padding: 10}}>Take a photo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.ai_box}>
                  <Text style={{fontSize: 30, color: 'white', padding: 10}}>Select from Photo Library</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image style={{resizeMode: "contain", marginBottom: 20, height: 200}} source={require('./assets/Robot.png')} />
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', borderTopWidth: 1,  borderTopColor: 'gray', paddingTop: 10}}>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Home")} >
          <Entypo name="home" size={30} color="black" />
          <Text style={{fontSize: 20}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}} onPress={() => navigation.navigate("Closet")}>
          <MaterialCommunityIcons name="wardrobe-outline" size={30} color="black" />
          <Text style={{fontSize: 20}}>Closet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ai_icon} onPress={() => navigation.navigate("AI")}>
          <MaterialCommunityIcons name="robot-outline" size={30} color="pink"/>
          <Text style={{fontSize: 20}}>AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Ionicons name="ios-chatbubble-ellipses-outline" size={30} color="black" />
          <Text style={{fontSize: 20}}>Stylist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", marginLeft: 5, marginRight: 5}}>
          <Entypo name="news" size={30} color="black" />
          <Text style={{fontSize: 20}}>News</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PictureScreen =() =>{
  const [startCamera, setStartCamera] = React.useState(false)
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState<any>(null)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = React.useState('off')

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    console.log(status)
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  const __takePicture = async () => {
    const photo = any = await Camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    //setStartCamera(false)
    setCapturedImage(photo)
  }
  const __savePhoto = () => {}
  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }
  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }
  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }
  return (
    <View style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{flex: 1}}
              ref={(r) => {
                Camera = r
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '10%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    onPress={__handleFlashMode}
                    style={{
                      backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                      borderRadius: '50%',
                      height: 25,
                      width: 25
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20
                      }}
                    >
                      ⚡️
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={__switchCamera}
                    style={{
                      marginTop: 20,
                      borderRadius: '50%',
                      height: 25,
                      width: 25
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20
                      }}
                    >
                      {cameraType === 'front' ? '🤳' : '📷'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff'
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeSrceen} />
        <Stack.Screen name="Closet" component={ClosetSrceen} />
        <Stack.Screen name="AI" component={AISrceen} />
        <Stack.Screen name="Picture" component={PictureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
