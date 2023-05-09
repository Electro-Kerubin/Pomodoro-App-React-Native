import { StyleSheet, Text, View } from "react-native";

type props = {
    timerDate: Date;
}

export const CuentaAtras: React.FC<props> = ({ timerDate }) => {

    return (
        <View>
            <Text style={styles.TimersText}>
                {timerDate.getMinutes().toString().padStart(2, "0")}:
                {timerDate.getSeconds().toString().padStart(2, "0")}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    TimersText: {
        fontSize: 30,
        fontWeight: '700'
    }
});