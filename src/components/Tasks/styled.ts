import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 20,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    MainContent: {
        flexDirection: 'row'
    },
    hour: {
        color: 'white',
    },
    description: {
        color: 'white',
        marginTop: 20,
    },
    IconContainer: {
        gap: 10
    }

});