import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const HeroPage = (props) => {
	return (
		<ImageBackground
			source={require('../assets/images/image-background2.jpg')
			// uri:
			//   "https://images.unsplash.com/photo-1589201968286-dfb786c4f846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
			}
			style={styles.image}
		>
			<LinearGradient colors={[ 'rgba(148, 187, 233, 0.7)', 'rgba(238, 174, 202, 0.9)' ]} style={styles.background}>
				<View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent:'center'}}>
        <Text style={styles.textHeader}>Hello World</Text>
        <Text style={styles.textContent}>Let's do what you want to do!</Text>
        </View>
        
			</LinearGradient>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
		width: '100%'
	},
	background: {
    flex: 1
	},
	textHeader: {
    color: 'white',
    
		paddingLeft: 20,
		fontSize: 50,
    fontFamily: 'dancing-script-bold',
    
  },
  textContent:{
    color: 'white',
   
		paddingLeft: 40,
		fontSize: 25,
    fontFamily: 'dancing-script',
    
  }
});

export default HeroPage;
