import * as React from "react";
import { Text,Box,Heading,Input,Button,Flex,ScrollView,Center,KeyboardAvoidingView,Icon,IconButton} from "native-base";
import {StyleSheet,FlatList} from "react-native"
import {vh,vw} from "react-native-units"

import { Entypo,Feather} from "@expo/vector-icons"

export default function Todo(){
    return(    
                <Box bg="primary.500" flex={1}>
                    <Heading style={styles.content} color="primary.50" fontSize="5xl">
                        Todo List
                    </Heading>
                    <Box style={styles.front} bg="primary.600" >
                        
                            <FlatList 
                            data={[
                                {
                                id:1,
                                todo: "Sholat Shubuh",
                                isDone:"done",
                            },
                            {
                                id:2,
                                todo: "sarapan",
                                isDone:"done",
                            },
                            {
                                id:3,
                                todo: "Sholat Shubuh",
                                isDone:"done",
                            },
                            {
                                id:4,
                                todo: "sarapan",
                                isDone:"done",
                            },
                            {
                                id:5,
                                todo: "Sholat Shubuh",
                                isDone:"done",
                            },
                            {
                                id:6,
                                todo: "sarapan",
                                isDone:"done",
                            },
                            {
                                id:7,
                                todo: "Sholat Shubuh",
                                isDone:"done",
                            },
                            {
                                id:8,
                                todo: "sarapan",
                                isDone:"done",
                            },
                        ]}
                            renderItem={({item})=>
                            <ScrollView>
                                <Box style={styles.containerTodo}>
                                
                                    <Flex direction="row">
                                        <Center>
                                            <Text style={styles.titleTodo} fontSize="2xl" color="white">{item.todo}</Text>
                                        </Center>
                                        <Center>
                                            {/* <Button padding={1} style={styles.button} ><Text fontSize="xs">done</Text></Button> */}
                                            <IconButton 
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
                                        </Center>
                                        <Center>
                                            {/* <Button padding={1} style={styles.button}><Text fontSize="xs">edit</Text></Button> */}
                                            <IconButton
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
                                        </Center>
                                        <Center>
                                            {/* <Button padding={1} bg="danger.300" style={styles.button}><Text fontSize="xs">delete</Text></Button> */}
                                            <IconButton 
                                            bg="white"
                                            icon={
                                                <Icon
                                                as={Feather}
                                                name="trash-2"
                                                color="danger.300"
                                                size="sm"
                                                />
                                            } />
                                        </Center>
                                    </Flex>
                                </Box>
                            </ScrollView>
                            }
                            keyExtractor={(item) => item.id}
                            />
                    </Box>
                    <KeyboardAvoidingView>
                        <Flex direction="row" px="3"bg="primary.600" height="125px" py="5">
                            <Input placeholder="input add todo here" bg="primary.100" height="40px" width="81%" me="2" />
                            <IconButton
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
        height: vh(70),
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
        width: vw(60),
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