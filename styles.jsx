import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#05445E",
        height: 800,
        alignItems: 'center',
    },
    buttonContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 250,
        borderRadius: 10,
        backgroundColor: "#D4F1F4",
        alignItems: 'center',
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
    highlight: {
        fontWeight: '700',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        paddingTop: 40,
        paddingLeft: 20,
    },
    sectionContainer: {
        marginTop: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        color: "white",
        fontWeight: '600',
        backgroundColor: "#05445E",
    },
    switch: {
        alignItems: 'flex-end',
    },

    switchContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 30,
        justifyContent: 'space-between',
        color: '#05445E', 
    }
});

export default styles;