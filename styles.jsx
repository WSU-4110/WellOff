import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#05445E",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 22,
        color: "white",
        fontWeight: '600',
    },
    h2: {
        fontSize: 16,
        color: "white",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#05445E",
        height: 800,
        alignItems: 'center',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: "#05445E",
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
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});

export default styles;