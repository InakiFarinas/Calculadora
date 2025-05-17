import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { styles_globales } from '@/styles/styles_globales';

interface Props {
  label: string;
  color?: 'btnNum' | 'btnOp' | 'btnSec';
  press?: () => void; 
  longPress?: () => void;
}

export default function Button({ label, press, longPress,color = 'btnNum' }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles_globales.btn, color === 'btnOp' ? styles.btn_op: null, color === 'btnSec' ? styles.btn_sec: null, pressed ? { opacity: 0.7 } : null]} onPress={press} onLongPress={longPress}>
      <Text style={styles_globales.btn_texto}>{label}</Text>
    </Pressable>
  );                                                                                       
}

const styles = StyleSheet.create({
  btn_op: {
    backgroundColor: Colors.btnOp,
  },
  btn_sec: {
    backgroundColor: Colors.btnSec,
  },
});
