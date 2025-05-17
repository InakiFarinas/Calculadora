import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles_globales } from '@/styles/styles_globales';

interface Props extends TextProps {
  variant?: 'textoPrimario' | 'textoSecundario'
}

const Texto = ({ children,variant = 'textoPrimario', ...rest }: Props) => {
  return (
    <Text style={[variant === 'textoPrimario' ? styles_globales.cuenta : styles_globales.resultado]} {...rest}>
      {children}
    </Text>
  );
};

export default Texto;
