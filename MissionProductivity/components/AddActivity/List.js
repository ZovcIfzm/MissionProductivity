import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    Pressable,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Item = ({ name, category, navigation }) => (
    <Pressable 
    onPress={() => navigation.navigate("Log Activity", {name: name, category: category})}
    style={({ pressed }) => ({
        opacity: pressed ? 0.3 : 1,
    })}
    >
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.cat}>{category}</Text>
        </View>
    </Pressable>
);

const List = (props) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        if (props.searchPhrase === "") {
            return <Item name={item.name} category={item.category} navigation={navigation}/>;
        }
        if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} category={item.category} navigation={navigation}/>;
        }
        if (item.category.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} category={item.category} navigation={navigation}/>;
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    props.setClicked(false);
                }}
            >
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 5,
        height: "85%",
        width: "100%",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cat: {
        paddingTop: 5,
        fontSize: 15,
        paddingBottom: 10
    }
});