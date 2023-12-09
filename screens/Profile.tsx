import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Title from './Title';

const Profile = ()=>{
    return(
        <View style={styles.container}>
            <Title/>
            <Text style={{fontSize:40,color:'white'}}>Welcome to Setting Page</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Visit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     backgroundColor: '#00798c',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop:25,
     marginLeft:10,
     marginRight:10,
     borderRadius:10,
     height:'100%'
     
    },
    
    button:{
        width:300,
        backgroundColor:'#00b4d8',
        padding:10,
        borderRadius:25,
        marginBottom:40
    },
    buttonText:{
        color:'#fff',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:75
        
    }
})
export default Profile;