import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

type props = {
    temporizadorEncendido: boolean;
    startTimer: () => void;
    stopTimer: () => void;
}

export const TemporizadorToggleButton: React.FC<props> = ({ temporizadorEncendido, startTimer, stopTimer }) => {

    return (
        <Pressable onPress={temporizadorEncendido ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome 
                    style={styles.icon}
                    name={temporizadorEncendido ? 'pause' : 'play'} 
                    size={125} 
                    color='orange' />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
    },
    container: {
        borderWidth: 5,
        width: 250,
        height:250,
        borderRadius: 250/2,
        justifyContent: "center",
        borderColor: "#fff",
        marginVertical: 50
    }   
});