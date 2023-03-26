import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    IconContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#EDEAEA',
        borderColor: '#5F33E1',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        width: '100%',
        minHeight: 70,

        padding: 30,
        paddingTop: 0,
        paddingBottom: 0,
    },

    MenuContainer: {
        flex: 1,
        minHeight: 70,
        alignItems: "center",
        position: 'relative',
    },
})