import { useState } from 'react';

export const useCalculator = () => {
  // Variables de estado
  const [resultado, setResultado] = useState('');
  const [cuenta, setCuenta] = useState('0');
  // Borra todo
  const borrarTodo = () => {
    setResultado('');
    setCuenta('0');
  };
  const borrarUno = () => {
    // Borrar el último carácter de la cuenta
    if (cuenta.length > 1) {
      setCuenta(cuenta.slice(0, -1));
    } else {
      setCuenta('0');
    }
  };
  const agregarNumero = (numero: string) => {
    // Cambiar signo
    if (numero === '-') {
      setCuenta(cuenta.startsWith('-') ? cuenta.slice(1) : '-' + cuenta);
      return;
    }

    // Evitar doble coma
    if (numero === ',' && cuenta.includes(',')) return;

    // Reemplazar 0 inicial
    if (cuenta === '0' && numero !== ',') {
      setCuenta(numero);
      return;
    }

    // Reemplazar -0 por -numero
    if (cuenta === '-0' && numero !== ',') {
      setCuenta('-' + numero);
      return;
    }

    // Reemplazar 0 después de operador por número
    if ((cuenta.endsWith('x0') || cuenta.endsWith('÷0') || cuenta.endsWith('-0') || cuenta.endsWith('+0')) && numero !== ',') {
      setCuenta(cuenta.replace(/0$/, numero));
      return;
    }

    // Concatenar normalmente
    setCuenta(cuenta + numero);
  };
  const agregarOperador = (operador: string) => {
    // Agregar operador
    setCuenta(cuenta + operador);
    // Reemplazar 0 por operador si es '-'
    if (cuenta === '0' && operador === '-') {
      setCuenta(cuenta.replace('0', operador));
    }
    // Eliminar último carácter si es operador y agregar nuevo operador
    else if (cuenta.endsWith('+') || cuenta.endsWith('-') || cuenta.endsWith('x') || cuenta.endsWith('÷')) {
      setCuenta(cuenta.slice(0, -1) + operador);
    }
  };
  const calcularResultado = () => {
    const operacion = cuenta.replace(/x/g, '*').replace(/,/g,'.').replace(/÷/g, '/').replace(/(\d+(\.\d+)?)%/g, '($1/100)');;
    try {
      const evalResultado = eval(operacion);
      setResultado(cuenta);
      setCuenta(evalResultado.toString());
    } catch (error) {
      setCuenta('Error');
    }
  };
  return {
    resultado,
    cuenta,
    borrarTodo,
    borrarUno,
    agregarNumero,
    agregarOperador,
    calcularResultado,
  };
};
