import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native';


const TimetableScreen = () => {
    const [inputValue, setInputValue] = useState('123123')
    const onHanleTextChange = (e) => {
        setInputValue(e)
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EAEAEA'}}>
            <View style={s.container}>
                <ScrollView style={s.scrollWiew}>
                    <View style={s.input__container}>
                        <TextInput style={s.input__item}/>
                    </View>
                    <View style={s.timetable}>
                        <View style={s.timetable__item}>
                            <View style={s.timebable__date}>
                                <Text style={{fontSize: 11, fontWeight: 'bold'}}>TUE</Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>25</Text>
                            </View>
                            <View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                            </View>

                        </View>
                        <View style={s.timetable__item}>
                            <View style={s.timebable__date}>
                                <Text style={{fontSize: 11, fontWeight: 'bold'}}>WEN</Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>26</Text>
                            </View>
                            <View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                            </View>

                        </View>
                        <View style={s.timetable__item}>
                            <View style={s.timebable__date}>
                                <Text style={{fontSize: 11, fontWeight: 'bold'}}>TUE</Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>27</Text>
                            </View>
                            <View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                            </View>
                        </View>
                        <View style={s.timetable__item}>
                            <View style={s.timebable__date}>
                                <Text style={{fontSize: 11, fontWeight: 'bold'}}>TUE</Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>28</Text>
                            </View>
                            <View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                                <View style={s.timebable__lessons}>
                                    <Text style={s.timebable__header}>Обработка отраслевой информации (Практ.)</Text>
                                    <Text style={s.timetable__text}>Латина Ольга Александровна</Text>
                                    <Text style={s.timetable__text}>8:00 - 9:30 </Text>
                                    <Text style={s.timetable__text}>СО 201</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        width: Dimensions.get('window').width
    },
    scrollWiew: {
        width: '100%',
    },
    input__container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    input__item: {
        marginTop: 100,
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        width: '85%',
        paddingVertical: 11,
        fontSize: 35,
        color: '#9B9493',
        fontWeight: 'bold'
    },
    timetable: {
        marginTop: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    timetable__item: {
        width: '85%',
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timebable__date: {
        display: 'flex',
        alignItems: 'center'
    },
    timebable__header: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 6
    },
    timetable__text: {
        fontSize: 10,
        color: '#AFA9A9',
        fontWeight: 'bold'
    },
    timebable__lessons: {
        paddingVertical: 11,
        paddingHorizontal: 6,
        backgroundColor: '#fff',
        borderRadius: 14,
        marginBottom: 5
    }


})


export default TimetableScreen
