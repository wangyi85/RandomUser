import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {memo} from "react";
import {normalize} from "../consts/consts";
import {StatusBar} from "expo-status-bar";

const Home = memo(props => {
    const goToUsers = () => {
        props.navigation.navigate('Users');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeTxt}>
                {`Welcome to Wang Yi's\nTest App`}
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={goToUsers}
            >
                <Text style={styles.btnTxt}>Continue</Text>
            </TouchableOpacity>
            <StatusBar hidden={true} />
        </View>
    )
})

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#181818'
    },
    welcomeTxt: {
        fontSize: normalize(30),
        marginTop: '40%',
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        width: '90%',
        position: 'absolute',
        bottom: normalize(30),
        backgroundColor: 'green',
        paddingVertical: normalize(10),
        borderRadius: normalize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        color: 'white',
        fontSize: normalize(26),
        fontWeight: 'bold'
    }
})
