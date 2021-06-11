import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';


export default class App extends React.Component{
   constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressed: [],
      absentPressed: [],
    };
  }


  componentDidMount = async() => {
    var class_ref =await db.ref('/').on('value', data => {
      var all_students =  []
      var class_a = data.val();
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });
  };

  updateAttendence(roll_no, status) {
    var id = '';
    if (roll_no <= 5) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }


  submitAttendance=()=>{
    this.props.navigation.navigate('Screen2');
  }

  render(){
    return(
      <View>
            <View>
              <Text style = {styles.nameStyle}>ARYA</Text>
              <Text style = {styles.nameStyle}>VINEETA</Text>
              <Text style = {styles.nameStyle}>SARA</Text>
              <Text style = {styles.nameStyle}>KATIE</Text>
              <Text style = {styles.nameStyle}>RICHA</Text>
            </View>
      
        <View>

        <TouchableOpacity style={styles.presentButton1Style} 
        onPress={()=>{
            var presentPressed = this.state.presentPressed;
                      presentPressed.push(index);
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'present');
                    
        }}>
        <Text style={styles.presentButtonTextStyle}>PRESENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.presentButton2Style}
        onPress={()=>{
           var presentPressed = this.state.presentPressed;
                      presentPressed.push(index);
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'present');
        }}>
        <Text style={styles.presentButtonTextStyle}>PRESENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.presentButton2Style}
        onPress={()=>{
           var presentPressed = this.state.presentPressed;
                      presentPressed.push(index);
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'present');
        }}>
        <Text style={styles.presentButtonTextStyle}>PRESENT</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.presentButton3Style}
        onPress={()=>{ var presentPressed = this.state.presentPressed;
                      presentPressed.push(index);
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'present');
        }}>
        <Text style={styles.presentButtonTextStyle}>PRESENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.presentButton2Style}
        onPress={()=>{ var presentPressed = this.state.presentPressed;
                      presentPressed.push(index);
                      this.setState({ presentPressed: presentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'present');
        }}>
        <Text style={styles.presentButtonTextStyle}>PRESENT</Text>
        </TouchableOpacity>
        
        <View>
          <TouchableOpacity style={styles.absentButton1Style}
          onPress={()=>{                 
               var absentPressed = this.state.absentPressed;
                      absentPressed.push(index);
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'absent');
  
        }}>
          <Text style={styles.absentButtonTextStyle}>ABSENT</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.absentButton2Style}
          onPress={()=>{
               var absentPressed = this.state.absentPressed;
                      absentPressed.push(index);
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'absent');
  
        }}>
          <Text style={styles.absentButtonTextStyle}>ABSENT</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.absentButton3Style}
          onPress={()=>{
               var absentPressed = this.state.absentPressed;
                      absentPressed.push(index);
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'absent');
  
        }}>
          <Text style={styles.absentButtonTextStyle}>ABSENT</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.absentButton4Style}
          onPress={()=>{
               var absentPressed = this.state.absentPressed;
                      absentPressed.push(index);
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'absent');
  
        }}>
          <Text style={styles.absentButtonTextStyle}>ABSENT</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.absentButton5Style}
          onPress={()=>{
               var absentPressed = this.state.absentPressed;
                      absentPressed.push(index);
                      this.setState({ absentPressed: absentPressed });
                      var roll_no = index + 1;
                      this.updateAttendence(roll_no, 'absent');
  
        }}>
          <Text style={styles.absentButtonTextStyle}>ABSENT</Text>
          </TouchableOpacity> 
        </View>
     
      <TouchableOpacity style={styles.submitButtonStyle}
              onPress={()=>{
          this.submitAttendance
        }}>
      <Text style={styles.submitButtonText}>Submit Attendence</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    nameStyle:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 35,
      marginLeft: 10
    },
    presentButton1Style:{
      marginTop: -270,
      marginLeft: 110,
      backgroundColor: 'green',
      height: 40,
      width: 80
    },
    presentButton2Style:{
      marginTop: 20,
      marginLeft: 110,
      backgroundColor: 'green',
      height: 40,
      width: 80
    },
    presentButton3Style:{
      marginTop: -90,
      marginLeft: 110,
      backgroundColor: 'green',
      height: 40,
      width: 80
    },
    presentButtonTextStyle:{
      color: 'white',
      textAlign: 'center',
      marginTop: 8,
      fontWeight: 'bold'
    },
    absentButtonTextStyle:{
      color: 'white',
      textAlign: 'center',
      marginTop: 8,
      fontWeight: 'bold'
    },
     absentButton1Style:{
      marginTop: -280,
      marginLeft: 220,
      backgroundColor: 'red',
      height: 40,
      width: 80
    },
    absentButton2Style:{
      marginTop: 80,
      marginLeft: 220,
      backgroundColor: 'red',
      height: 40,
      width: 80
    },
    absentButton3Style:{
      marginTop: -100,
      marginLeft: 220,
      backgroundColor: 'red',
      height: 40,
      width: 80
    },
    absentButton4Style:{
      marginTop: 80,
      marginLeft: 220,
      backgroundColor: 'red',
      height: 40,
      width: 80
    },
    absentButton5Style:{
      marginTop: 20,
      marginLeft: 220,
      backgroundColor: 'red',
      height: 40,
      width: 80
    },
    submitButtonStyle:{
      backgroundColor: 'yellow',
      height: 50,
      width: 180,
      marginTop: 30,
      alignSelf: 'center',
      borderColor: 'black',
      borderWidth: 2
    },
    submitButtonText:{
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 13
    }
})