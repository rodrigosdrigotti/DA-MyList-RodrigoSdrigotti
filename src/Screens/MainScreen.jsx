import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import ModalTask from '../Components/Modal'
import TaskList from '../Components/TaskList'

const MainScreen = ({ taskList }) => {

    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({});

    const onAddTask = () => {
        if(input !== ""){
            setMessage("")
            setList([
                ...list,
                {
                    id: Math.floor(Math.random() * 100) + 1,
                    task: input,
                    completed: false
                }
            ])
            setInput("");
        }
        else {
            setMessage("* Por favor escriba la tarea *")
        }
    }

    const onPressTask = (task) => {
        setTaskActive(task);
        setModalVisible(!modalVisible);
        setMessage("");
    }

    const handleDeleteTask = (task) => {
        const updatedTasks = list.filter(item => item.id !== task.id);
        setList(updatedTasks);
        setModalVisible(!modalVisible);
    }

    const handleCompletedTask = (task) => {
        setList(list.map(obj => {
            if (obj.id === task.id) {
                setModalVisible(!modalVisible);
                return { ...obj, completed: true };
            } else {
                return obj;
        }
    }))};

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Mi Lista de Tareas</Text>
            </View>

            <TopBar
                input={input}
                onAddTask={onAddTask}
                setInput={setInput}          
            />
            
            <View style={styles.containerMessage}>
                <Text style={styles.textMessage}>{message}</Text>
            </View>

            <TaskList
                list={list}
                onPressTask={onPressTask}
            />

            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
                handleDeleteTask={handleDeleteTask}
                handleCompletedTask={handleCompletedTask}
            />

        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
    },
    titleBox: {
        alignItems: 'center',
        paddingTop: 80,
        marginBottom: 50,
    },
    containerMessage: {
        width: '80%',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    textMessage: {
        fontSize: 14,
        color: 'red',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    }
})

//@import url("https://fonts.googleapis.com/css?family=Sofia+Sans+Extra+Condensed");
