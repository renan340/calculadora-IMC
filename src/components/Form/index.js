import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native-web";
import ResultImc from "./ResultImc/";

export default function Form(){

const [height, setHeigth]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMassageImc]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeigth(null)
        setWeight(null)
        setMesssageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMesssageImc("Preencha o peso e a altura")
}

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeigth}
                value={height}
                placeholder="EX. 1.75"
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="EX. 75.365"
                keyboardType="numeric"/>
                <Button 
                onPress={() => validationImc}
                title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}