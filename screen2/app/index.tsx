import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Box from "@/src/components/Box";
import DownloadInfo from "@/src/components/DownloadInfo";

const index = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.headerMenuButton}>
					<Image source={require("../assets/images/menu.png")} />
				</TouchableOpacity>
				<Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
					Download
				</Text>
				<TouchableOpacity style={styles.headerMenuButton}>
					<Image source={require("../assets/images/search.png")} />
				</TouchableOpacity>
			</View>
			<View style={styles.bodyContainer}>
				<View style={styles.downloadCard}>
					<Box />
					<DownloadInfo title="EPS 5 | The Lovely" status="Finish" duration="20 Mins" date="Mar 2, 2024" />
				</View>
				<View style={styles.downloadCard}>
					<Box />
					<DownloadInfo title="EPS 5 | The Lovely" status="Failed" duration="20 Mins" date="Mar 2, 2024" />
				</View>
				<View style={styles.downloadCard}>
					<Box />
					<DownloadInfo title="EPS 5 | The Lovely" status="Finish" duration="20 Mins" date="Mar 2, 2024" />
				</View>
				<View style={styles.downloadCard}>
					<Box />
					<DownloadInfo title="EPS 5 | The Lovely" status="Finish" duration="20 Mins" date="Mar 2, 2024" />
				</View>
				<View style={styles.downloadCard}>
					<Box />
					<DownloadInfo title="EPS 5 | The Lovely" status="Failed" duration="20 Mins" date="Mar 2, 2024" />
				</View>
			</View>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	headerContainer: {
		backgroundColor: "#000",
		height: 60,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 15,
	},
	headerMenuButton: {
		width: 42,
		height: 38,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#272727",
		borderRadius: 10,
	},
	bodyContainer: {
		paddingHorizontal: 15,
	},
	downloadCard: { 
		flexDirection: 'row', 
		justifyContent: 'space-between',
		 borderBottomWidth: 1, 
		 borderBottomColor: '#5A5A5A', 
		 gap: 10, 
		 paddingTop: 20,
		 paddingBottom: 20 
	}
});
