import { Colors } from "@/constants/Colors";
import {StyleSheet} from 'react-native';

export const styles_globales = StyleSheet.create({
    fondo:{
        backgroundColor:Colors.fondo,
        flex:1,
    },
    contenedor_textos:{
        flex:0.5,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:35,
    },
    resultado:{
        fontSize:20,
        fontFamily:'SpaceMono',
        color:Colors.textoSecundario,
    },
    cuenta:{
        fontSize:50,
        fontFamily:'SpaceMono',
        color:Colors.textoPrimario,
    },
    contenedor_btn:{
        flex:0.6,
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,
    },
    btn:{
        backgroundColor:Colors.btnNum,
        borderRadius:100,
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    btn_texto:{
        fontSize:35,
        fontFamily:'SpaceMono',
        color:Colors.textoPrimario,
    },
})
