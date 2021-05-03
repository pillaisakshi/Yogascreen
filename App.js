import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Slider,TouchableOpacity} from 'react-native';
//import Slider from 'react-native-slider';
import {Card} from 'react-native-shadow-cards';

export default class App extends Component {
 
  constructor(){
  
    super();
  
    this.state = {
  
     SliderValue :  0
  
    }
  }
  
  render() {
  
    return (
  
      <View style={styles.MainContainer}>
        <View style= {{ marginTop:45}}>
  
     <Card style={{padding: 10, margin: 15, height:800}}>
       <Text style={{fontSize:25,marginTop:10,marginLeft:15,fontWeight: 'bold'}}> Yoga </Text>

      <View style={{marginTop:10}}>
       <View style={styles.SectionStyle}>
 
       <TextInput
     style={{flex:1,marginLeft:10}}
     placeholder=" Type of Yoga"
     underlineColorAndroid="transparent"
    />

    </View>
    </View>

   
   <View style={styles.SectionStyle}>
 
    <TextInput
     style={{flex:1,marginLeft:10}}
     placeholder=" Place of Training eg Park, Beach etc"
     underlineColorAndroid="transparent"
    />

    </View>

    <Text style={{marginTop:10, marginLeft:10,fontSize:16,fontWeight: 'bold'}}> Choose Training Type </Text>

    <View style={{flexDirection:'row',marginTop:10}}>
    <TouchableOpacity
          style={styles.GroupButtonStyle}
          activeOpacity = { .5 } >
 
         <Text style={styles.TextStyle}> Group </Text>
            
      </TouchableOpacity>

    <View style={{marginLeft:15}}>
    <TouchableOpacity
          style={styles.PersonalButtonStyle1}
          activeOpacity = { .5 } >
 
         <Text style={styles.TextStyle1}> Personal </Text>
            
      </TouchableOpacity>
    </View>

</View>
 
<View style={{flexDirection:'row',marginTop:15}}>
<Text style={{fontWeight: 'bold',fontSize:16}}> Maximum number of participants </Text>
<Text style={{marginLeft:18,fontSize:16,fontWeight: 'bold',textDecorationLine: 'underline',}}> 20 </Text>
</View>


<View style={{flexDirection:'row',marginTop:20}}>
<Text style={{fontSize:16,fontWeight: 'normal',marginLeft:10}}> Duration of Session </Text>
<Text style={{marginLeft:80,fontSize:16,fontWeight: 'bold'}}> 30 mins</Text>
</View>

<View>
<Slider
          step = { 1 }
          minimumValue = { 0 }
          maximumValue = { 2000 }
          minimumTrackTintColor = "#009688"
          onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
          style = {{ width: '100%'}} 
          />
          <View style= {{flexDirection:'row'}}>
          <Text style={{fontSize:18,marginRight:40}}> 0 </Text>
           <Text style = {{fontSize: 18,marginLeft:200}}>{ this.state.SliderValue }</Text>
 </View>
 </View>

 <View style={{flexDirection:'row',marginTop:15}}>
<Text style={{fontSize:16,fontWeight: 'normal',marginLeft:10}}>Charges per Session </Text>
  <Text style={{marginLeft:100,fontWeight: 'bold', textDecorationLine: 'underline',fontSize:16}}> $30</Text>


</View>

<View>

<Slider
          step = { 1 }
          minimumValue = { 0 }
          maximumValue = { 2000 }
          minimumTrackTintColor = "#009688"
          onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
          style = {{ width: '100%' }} 
          />
          <View style= {{flexDirection:'row'}}>
          <Text style={{fontSize:18,marginRight:40}}> 0 </Text>
           <Text style = {{fontSize: 18,marginLeft:200}}>{ this.state.SliderValue }</Text>
 </View>
 </View>

 <View style={{marginTop:13}}>
 <View style={styles.SectionStyle1}>
 
    <TextInput
     style={{flex:1,marginLeft:10}}
     placeholder=" Describe your expertise"
     underlineColorAndroid="transparent"
    />
</View>
</View>

<View style={{marginLeft:20}}>
<TouchableOpacity
          style={styles.SheduleButtonStyle}
          activeOpacity = { .5 } >
 
         <Text style={styles.TextStyle}> Schedule Session </Text>
            
      </TouchableOpacity>
       </View>
    </Card>
    </View>
        
      </View>
    );
  }
 }
  
 const styles = StyleSheet.create({
  
 MainContainer :{
 flex:1,
 backgroundColor: '#C7CBCA',
  
 },
 SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: .5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5 ,
  margin: 10
},

SectionStyle1: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderWidth: .5,
  borderColor: '#000',
  height: 70,
  borderRadius: 5 ,
  margin: 10
},
GroupButtonStyle: {
 
  backgroundColor:'#008000',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  width:90,
  marginLeft:25,
  height:35
},

TextStyle:{
    color:'#fff',
    textAlign:'center',
    marginTop:8
  
},
PersonalButtonStyle1: {
 
  backgroundColor:'#ffffff',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#000000',
  width:90,
  marginLeft:25,
  height:35
},
TextStyle1:{
  color:'#000000',
  textAlign:'center',
  marginTop:8

},

SheduleButtonStyle: {
 
  backgroundColor:'#008000',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  width:200,
  marginLeft:25,
  height:35
},

  
 });
