import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {memo, useEffect, useState} from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {normalize} from "../consts/consts";

const Detail = memo(props => {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.route.params.user);
    }, [])
    const goBack = () => {
        props.navigation.goBack(null);
        return true;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={goBack}
                >
                    <SimpleLineIcons name={'arrow-left'} color={'white'} size={normalize(20)} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>User Information</Text>
            </View>
            {
                user.avatar === undefined ?
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator color={'white'} size={normalize(40)} animating={user.avatar === undefined} />
                    </View>
                    :
                    <View style={styles.infoPanel}>
                        <Image source={{uri: user.avatar}} style={styles.avatar} resizeMode={'contain'} />
                        <View style={styles.infoGroup}>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>ID: </Text>
                                <Text style={styles.info}>{user.id}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>First Name: </Text>
                                <Text style={styles.info}>{user.first_name}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>Last Name: </Text>
                                <Text style={styles.info}>{user.last_name}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>Email: </Text>
                                <Text style={styles.info}>{user.email}</Text>
                            </View>
                        </View>
                    </View>
            }
        </View>
    )
})

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingTop: normalize(20),
        paddingBottom: normalize(10),
        paddingHorizontal: normalize(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: normalize(10)
    },
    backBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTxt: {
        color: 'white',
        fontSize: normalize(26),
        marginLeft: normalize(30)
    },
    infoPanel: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: normalize(30),
        paddingHorizontal: normalize(30)
    },
    avatar: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(15)
    },
    infoGroup: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: normalize(20)
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: normalize(10)
    },
    label: {
        fontSize: normalize(16),
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: 'grey'
    },
    info: {
        flex: 1,
        fontStyle: 'normal',
        fontSize: normalize(18),
        color: 'white',
        fontWeight: '400',
        marginLeft: normalize(20)
    }
})
