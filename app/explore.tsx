import React from "react";
import {Text, View} from "react-native";
import { Link } from "expo-router";

const explore = () => {
    return (
        <View>
            <Text style = {{fontSize:30,color:'white'}}>Explore</Text>
            <Link href="/" style={{color:'white'}}>Index</Link>
        </View>
    );
}

export default explore;