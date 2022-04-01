import React,{useState,useEffect} from "react";
import { Text,
        Box,
        Heading,
        Input,
        Button,
        Flex,
        ScrollView,
        Center,
        KeyboardAvoidingView,
        Icon,
        IconButton,
        Modal,
        HStack,
        Alert} from "native-base";
import {StyleSheet,FlatList} from "react-native"
import {vh,vw} from "react-native-units"

import { Entypo,Feather} from "@expo/vector-icons"

import axios from "axios";

export default function Todo(){

    const [showModal, setShowModal] = useState(false);
    const [todo,setTodo] = useState({});
    const [newTodo,setNewTodo] = useState({
        todoName:"",
        statusTodo:"",
    })
    const [update,setUpdate] =useState({
        todoName:"",
    })
    const [updateStatus,setUpdateStatus] = useState({
        statusTodo:""
    })

    const [idUpdate,setIdUpdate] =useState(null)
    

    const path = "https://api.kontenbase.com/query/api/v1/a05fac93-063a-4217-9fb6-e822d1e790d2/todo"


    useEffect(()=>{
        getTodo()
    },[])

    const handleMOdalEdit = async(id)=>{
        try {
            setShowModal(true)
            setIdUpdate(id)
            console.log(idUpdate);
        } catch (error) {
            console.log(error);
        }
    }

    const getTodo = async ()=>{
        try {
            const response = await axios.get(path)
            setTodo(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleTodo = async ()=>{
        try {
            const response = await axios.post(path,newTodo)
            console.log(response.data);
            getTodo()
        } catch (error) {
            console.log(error);
            <Alert status={"error"}/>
        }
    }

    const handleDelete = async(id)=>{
        try {
            const data = id
            await axios.delete(`https://api.kontenbase.com/query/api/v1/a05fac93-063a-4217-9fb6-e822d1e790d2/todo/${data}`)
            getTodo()
        } catch (error) {
            // console.log(error);
        }
    }

    const handleUpdate = async()=>{
        try {
            const response = await axios.patch(`https://api.kontenbase.com/query/api/v1/a05fac93-063a-4217-9fb6-e822d1e790d2/todo/${idUpdate}`,update)
            setShowModal(false)
            getTodo()
        } catch (error) {
            console.log(error);
        }
    }

    const handleChecklist = async(id)=>{
        try {
            console.log(id);
            const response = await axios.patch(`https://api.kontenbase.com/query/api/v1/a05fac93-063a-4217-9fb6-e822d1e790d2/todo/${id}`,{statusTodo:"true"})
            
            getTodo()
        } catch (error) {
            console.log(error);
        }
    }

    return(    
                <Box bg="primary.500" flex={1}>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Body bg="primary.50" borderRadius="10px" width="300px" mt="200px">
                    <Text bold mb="5px" color="primary.700"  fontSize="2xl" > Edit Todo </Text>
                    <Input bg="muted.100"  mb="20px"
                    onChangeText={(Text)=> setUpdate({todoName:Text}) }
                    value={update}
                    />
                    <HStack space={2} justifyContent="flex-end">
                        <Button bg="danger.300" onPress={() => setShowModal(false)}>
                            <Text >Cancel</Text>
                        </Button>
                        <Button
                        onPress={()=> handleUpdate()}
                        >
                            <Text>Edit</Text>
                        </Button>
                    </HStack>
                </Modal.Body>
            </Modal>

                    <Heading style={styles.content} color="primary.50" fontSize="5xl">
                        Todo List
                    </Heading>
                    <Box height="550px" style={styles.front} bg="primary.600" >
                        
                            <FlatList 
                            data= {todo}
                            renderItem={({item})=>
                            <ScrollView>
                                <Box style={styles.containerTodo}>
                                
                                    <HStack space={2} justifyContent="space-between" >
                                        <Center>
                                            {item.statusTodo == "true"?<Text style={styles.titleTodo} fontSize="2xl"  color="tertiary.400">{item.todoName}</Text>:
                                            <Text style={styles.titleTodo} fontSize="2xl"  color="white">{item.todoName}</Text>
                                            }
                                            
                                        </Center>

                                        <HStack>
                                        
                                            {item.statusTodo == "true"?
                                            <IconButton 
                                            bg="tertiary.400"
                                            style={{marginRight:5}}
                                            icon={
                                                <Icon
                                                as={Feather}
                                                name="check"
                                                color="white"
                                                size="sm"
                                                />
                                            } />:
                                            <IconButton 
                                            onPress={()=>handleChecklist(item._id)}
                                            bg="white"
                                            style={{marginRight:5}}
                                            icon={
                                                <Icon
                                                as={Feather}
                                                name="check"
                                                color="tertiary.400"
                                                size="sm"
                                                />
                                            } />
                                            }
                                            
                                            {item.statusTodo == "true"?null:
                                            <IconButton
                                            onPress={() => handleMOdalEdit(item._id)}
                                            bg="white" 
                                            style={{marginRight:5}}
                                            icon={
                                                <Icon
                                                as={Feather}
                                                name="edit"
                                                color="muted.500"
                                                size="sm"
                                                />
                                            } />
                                            }
                                            
                                            <IconButton
                                            onPress={()=> handleDelete(item._id)}
                                            bg="white"
                                            icon={
                                                <Icon
                                                as={Feather}
                                                name="trash-2"
                                                color="danger.300"
                                                size="sm"
                                                />
                                            } />
                                        </HStack>
                                        
                                    </HStack>
                                </Box>
                            </ScrollView>
                            }
                            keyExtractor={(item) => item._id}
                            />
                    </Box>
                    <KeyboardAvoidingView>
                        <Flex direction="row" px="3"bg="primary.600" height="125px" py="5">
                            <Input placeholder="input add todo here" bg="primary.100" height="40px" width="81%" me="2"
                            onChangeText={(Text)=> setNewTodo({todoName:Text,statusTodo:"false"}) }
                            value={newTodo}
                            />
                            <IconButton
                                onPress={handleTodo}
                                bg="rose.700" 
                                height="40px"
                                width="60px"
                                alignItems="center"
                                style={{marginLeft:10}}
                                icon={
                                <Icon
                                as={Feather}
                                name="file-plus"
                                color="white"
                                size="sm"
                                />
                                } />                      
                        </Flex>
                    </KeyboardAvoidingView>
                    
                </Box>
    )
}

const styles= StyleSheet.create({
    content: {
        textAlign:"center",
        marginTop:50,
    },
    front:{
        // height: vh(70),
        borderTopLeftRadius : 60,
        borderTopRightRadius : 60,
        
        // justifyContent:"space-between",
    },
    containerTodo:{
        marginTop:30,
        display:"flex",
        flexDirection:"column",
        marginHorizontal:10,
    },
    titleTodo:{
        height:40,
        // width: vw(60),
        textAlign:"justify",
    },
    flexTitle:{
        // height: 50,
        marginTop: 70,
    },
    buttonGroup:{
        marginTop:10,
    },
    button:{
        height:30,
        width:55,
        // padding: 0,
        marginRight: 5,
    },
    inputTodo:{
        marginTop:200,
    },
    buttonAdd:{
        display:"flex",
        marginLeft:10,
        width: 60,
    }
})