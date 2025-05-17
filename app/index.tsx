import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import Texto from '@/components/Texto';
import { styles_globales } from '@/styles/styles_globales';
import Btn from '@/components/Btn';
import { useCalculator } from '@/Hooks/useCalculator';

const Calculator = () => {
  const { resultado, cuenta, borrarTodo, borrarUno, agregarNumero, agregarOperador, calcularResultado } = useCalculator();

  return (
    <View style={styles_globales.fondo}>
      <View style={styles_globales.contenedor_textos}>
        <Texto variant="textoSecundario" numberOfLines={1} adjustsFontSizeToFit>
          {resultado}
        </Texto>
        <Texto variant="textoPrimario" numberOfLines={1}>{cuenta}</Texto>
      </View>
      <View style={styles_globales.contenedor_btn}>
        <Btn label="AC" color="btnSec" press={borrarTodo} />
        <Btn label="+/-" color="btnSec" press={() => agregarNumero('-')} />
        <Btn label="%" color="btnSec" press={() => agregarOperador('%')} />
        <Btn label="÷" color="btnOp" press={() => agregarOperador('÷')} />
        <Btn label="7" color="btnNum"  press={() => agregarNumero('7')} />
        <Btn label="8" color="btnNum"  press={() => agregarNumero('8')} />
        <Btn label="9" color="btnNum"  press={() => agregarNumero('9')} />
        <Btn label="x" color="btnOp" press={() => agregarOperador('x')} />
        <Btn label="4" color="btnNum"  press={() => agregarNumero('4')} />
        <Btn label="5" color="btnNum"  press={() => agregarNumero('5')} />
        <Btn label="6" color="btnNum"  press={() => agregarNumero('6')} />
        <Btn label="-" color="btnOp" press={() => agregarOperador('-')} />
        <Btn label="1" color="btnNum" press={() => agregarNumero('1')} />
        <Btn label="2" color="btnNum" press={() => agregarNumero('2')} />
        <Btn label="3" color="btnNum" press={() => agregarNumero('3')} />
        <Btn label="+" color="btnOp" press={() => agregarOperador('+')} />
        <Btn label="<-" color="btnSec" press={borrarUno} />
        <Btn label="0" color="btnNum" press={() => agregarNumero('0')} />
        <Btn label="," color="btnNum" press={() => agregarNumero(',')} />
        <Btn label="=" color="btnOp" press={() => calcularResultado()} />
      </View>
    </View>
  );
};

export default Calculator;
