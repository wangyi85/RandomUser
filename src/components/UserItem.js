import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {memo} from "react";
import {normalize} from "../consts/consts";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const UserItem = memo(props => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.goToDetail}
        >
            <Image source={{uri: props.user.avatar}} style={styles.avatar} resizeMode={'contain'} />
            <Text style={styles.name}>{props.user.first_name} {props.user.last_name}</Text>
            <SimpleLineIcons name={'arrow-right'} color={'grey'} size={normalize(10)} />
        </TouchableOpacity>
    )
})

export default UserItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: normalize(15),
        marginVertical: normalize(10),
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(20),
        borderWidth: normalize(2),
        borderColor: 'grey',
        borderRadius: normalize(10),
        elevation: 5
    },
    avatar: {
        width: normalize(60),
        height: normalize(60),
        borderRadius: normalize(10)
    },
    name: {
        flex: 1,
        fontSize: normalize(22),
        fontWeight: "400",
        color: 'white',
        marginLeft: normalize(20),
    }
})
