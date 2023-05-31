import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
    container_app:{
      flex: 1,
      backgroundColor: "white"
    },
    user_box:{
      marginTop: 70,
      marginLeft: 60,
      flexDirection: "row",
    },
    user_icon:{
      backgroundColor: "darkgray",
      height: 70,
      width:70,
      borderRadius: 50
    },
    setup_box:{
      marginLeft: 20,
    },
    today_box:{
      flexDirection: 'row',
      textAlign: 'left',
      backgroundColor:"darkgray",
      marginTop: 30,
      borderRadius: 10,
      marginLeft: 50,
      marginRight: 50,
      padding: 10
    },
    calender_s:{
      elevation: 4,
      margin: 40,
    },
    today_text:{
      fontSize: 18,
      backgroundColor: "pink",
      borderRadius: 20,
      paddingLeft: 10
    },

    ai_icon:{
      alignItems: "center",  
      marginLeft: 15, 
      marginRight: 15, 
      borderRadius: 50, 
      borderWidth: 1, 
      width: 80, 
      height: 70
    },

    ai_box:{
      backgroundColor: 'aqua',
      borderRadius: 50, 
      color: 'white',
      width: 400,
      alignItems: 'center',
      marginLeft: 50,
      marginTop: 40
    },

    input: {
      color: "white",
      backgroundColor: "pink",
      height: 60,
      width: "90%",
      borderRadius: 50,
      marginVertical: 20,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "pink",
      padding: 10,
      marginBottom: 10,
      borderRadius: 50,
      paddingHorizontal: 30,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginBottom: 20,
    },
    buttonText: {
      color: "white",
    },
    separator: {
      marginHorizontal: 30,
      padding: 5,
      borderRadius: 60,
      marginVertical: 20,
      backgroundColor: "pink",
      color: "white",
    },
    otherMethods: {
      marginHorizontal: 50,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    icon: {
      paddingHorizontal: 50,
    },
  });

  export default styles;