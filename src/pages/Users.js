import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {memo, useCallback, useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import UserItem from "../components/UserItem";
import axios from "axios";
import {normalize, SERVER_URL} from "../consts/consts";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {useToast} from "react-native-fast-toast";

const Users = memo(props => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    useEffect(() => {
        fetchUsers().then();
    }, [])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        try {
            const result = (await axios.get(`${SERVER_URL}users`)).data;
            setUsers(result.data);
            setLoading(false)
            toast.show('Successfully Fetched', {
                type: 'success',
                position: 'bottom',
                animationDuration: 300,
                animationType: 'zoom-in'
            });
        } catch (e) {
            setLoading(false);
            toast.show('Failed: Some error happened', {
                type: 'danger',
                position: 'bottom',
                animationDuration: 300,
                animationType: 'zoom-in'
            });
        }
    });
    const goToDetail = (item) => {
        props.navigation.navigate('Detail', {user: item})
    }
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
                <Text style={styles.headerTxt}>Users</Text>
                <TouchableOpacity
                    style={styles.refreshBtn}
                    onPress={fetchUsers}
                >
                    <SimpleLineIcons name={'refresh'} color={'white'} size={normalize(20)} />
                </TouchableOpacity>
            </View>
            {
                isLoading ?
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator color={'white'} size={normalize(40)} animating={isLoading} />
                    </View>
                    :
                    <FlatList
                        style={styles.list}
                        // contentContainerStyle={styles.list}
                        data={users}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (
                            <UserItem
                                user={item}
                                goToDetail={() => goToDetail(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
            }
        </View>
    )
})

export default Users

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        flex: 1,
        width: '100%',
        marginBottom: normalize(15)
    },
    header: {
        width: '100%',
        paddingTop: normalize(20),
        paddingBottom: normalize(10),
        paddingHorizontal: normalize(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    refreshBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
