import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import RenderItemTask from "./RenderItemTask";

const TaskList = ({
    list,
    onPressTask,
    isCompleted,
}) => {
    return (
        <View style={styles.items}>
            <FlatList
                data={list}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => RenderItemTask({ item, onPressTask })}
            />
        </View>
    );
};

export default TaskList;

const styles = StyleSheet.create({
    items: {
        width: '80%'
    },
});