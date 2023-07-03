import { StyleSheet, TextInput, TouchableOpacity , Text, View } from 'react-native'
import React from 'react'

const TopBar = ({ input, setInput, onAddTask }) => {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Ingresar Tarea'
                placeholderTextColor='grey'
                style={[styles.input, styles.shadowProp]}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity
                style={[styles.button, styles.shadowProp]}
                onPress={onAddTask}
            >
                <Text style={styles.buttonAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFFF',
        borderRadius: 10,
        width: 250,
        borderColor: '#A7A7A7',
        borderWidth: 3,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#A7A7A7',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#95949A',
        borderWidth: 3,
    },
    buttonAdd: {
        color: '#5B5B5B',
        fontSize: 24,
        fontWeight: 'bold',
    },
    shadowProp: {  
        shadowOffset: {width: 0, height: 5},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 10,  
    }, 
})