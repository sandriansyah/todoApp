import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { useState } from "react"

export default function Kalkulator(){

    const [display,setDisplay] = useState(0)

    const handleButton = (angka)=>{
        if(display === 0){
            setDisplay(angka)
        }else{
            setDisplay(display + '' + angka)
            console.log(display);
        }       
    }

    const handlePersen = ()=>{
        setDisplay(display / 100)
    }

    const hasil = ()=>{
        setDisplay(eval(display))
    }

    const handleClear = ()=>{
       setDisplay(0)       
    }

    return(
        <View style={styles.container} >
            <View>
                <Text style={styles.title}>
                    CALCULATOR
                </Text>
                <Text style={styles.display}>
                    {display}
                </Text>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(1)}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(2)}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{handleButton('-')}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{handleButton('+')}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(3)}}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(4)}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{handleButton('*')}}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{handleButton('/')}}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(5)}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(6)}}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{handlePersen()}}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.operator} onPress={()=>{hasil()}}>=</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(7)}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(8)}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(9)}}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonNumber}>
                    <Text style={styles.number} onPress={()=>{handleButton(0)}}>0</Text>
                </TouchableOpacity>
            </View>
                <TouchableOpacity style={styles.ButtonClear}>
                    <Text style={styles.clear} onPress={()=>{handleClear()}}>CLEAR</Text>
                </TouchableOpacity>
                <Text style={styles.author}>created by Sandriansyah</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 30,
    },
    title:{
        fontSize: 30,
        color:"#1572A1",
        fontWeight:"bold",
    },
    display:{
        backgroundColor: "#F0ECE3",
        fontSize:30,
        height: 180,
        borderRadius: 10,
        color:"#1572A1",
        fontWeight:"bold",
        marginTop: 15,
        marginBottom: 30,
        textAlign:"center",
        textAlignVertical:"center",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },
    number:{
        backgroundColor:"#FFC600",
        height: 75,
        borderRadius: 10,
        textAlign:"center",
        textAlignVertical:"center",
        color:"#1572A1",
        fontSize:35,
        fontWeight:"bold",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
        
    },
    operator:{
        backgroundColor:"#1572A1",
        height: 75,
        borderRadius: 10,
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        fontSize:35,
        fontWeight:"bold",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
    },
    groupButton:{
        display:"flex",
        marginTop: 10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    ButtonNumber:{
        width: "23%",
    },
    ButtonClear:{
        width:"100%",
    },
    clear:{
        marginTop: 20,
        backgroundColor:"red",
        height: 60,
        borderRadius: 10,
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },
    author:{
        color: "gray",
        textAlign:"center",
        marginTop:8,
    }
})