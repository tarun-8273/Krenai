import React from "react";
import { View, Text, TextInput, StyleSheet ,Image,TouchableOpacity} from "react-native"

const CustomTextInput = (props) => {
    const {
        value,
        label,
        editable,
        maxLength,
        autoFocus,
        placeholder,
        keyboardType,
        onChangeText,
        labelExtraStyle,
        placeholderTextColor,
        imageFisrt,
        imageSecond,
        imageSource,
        secureTextEntry,
    
    } = props;

    return (
       
           

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                borderBottomWidth: 1,
                borderBottomColor:'#CEB0A9',
                alignItems:'center'
            }}>

           { imageFisrt?<Image source={imageSource} style={styles.image} />:null}
            <TextInput
                    style={[
                        styles.textInputStyle
                    ]}
                    secureTextEntry={secureTextEntry}
                    editable={editable}
                    autoCapitalize="none"
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    placeholderTextColor={placeholderTextColor}

                />
               { imageSecond?
               <TouchableOpacity
               >
                <Image
                style={[styles.image]}
                //source={require("../assets/eyehide.png")}
                />
                </TouchableOpacity>:null}
                

            </View>
                
            


       
    )
}
const styles = StyleSheet.create({
    contanier: {
        // marginHorizontal: 10
    },
    labelStyle: {
        color: '#000000',
        opacity: 0.5
    },
    textInputStyle: {
       height:40,
       width:"90%"
    },
    image:{
        width:20,
        height:20,
        
        // marginRight:10
    }
})
export default CustomTextInput