import React from "react";
import { View, Text } from "react-native-web";

export default function ResultImc(props){
    return(
        <view>
            <Text>{props.ResultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </view>
    );
}