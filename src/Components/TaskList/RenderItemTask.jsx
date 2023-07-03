import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={[styles.task, styles.shadowProp]} key={item.id}>
                <View style={styles.circulo}></View>
                <Text style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFFF',
        opacity: '0.7',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    shadowProp: {  
        shadowOffset: {width: 0, height: 5},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 10,  
    }, 
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#95949A',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 10,
    }
})