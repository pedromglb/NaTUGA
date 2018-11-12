import React from 'react';
import {
    Animated,
    View,
    Image,
    Easing,
} from 'react-native';


export default class Dice extends React.Component {

    spins;
    spinValue;

    constructor(props) {
        super(props);
    }

    spin() {

        this.spinValue = new Animated.Value(0)

        // First set up animation 
        Animated.timing(
            this.spinValue,
        {
            toValue: 1,
            duration: 3000,
        }
        ).start()

        // Second interpolate beginning and end values (in this case 0 and 1)
        spins = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        
    }

    componentWillMount() {
        this.spin();
        
    }

    render() {

        return (
            <View style={styles.container}>
                <Animated.View 
                    style={{...styles.dice, transform: [{rotate: this.spins}]}}
                    source={{uri: ''}}
                >
                    <View style={[styles.side, styles.one]}>
                    <Image source ="https://openclipart.org/download/29527/die1.svg" alt="side one"/>
                    </View>
                    <View style={[styles.side, styles.two]}>
                    <Image source ="https://openclipart.org/download/29533/die2.svg" alt="side two"/>
                    </View>
                    <View style={[styles.side, styles.three]}>
                    <Image source ="https://openclipart.org/download/29539/die3.svg" alt="side three"/>
                    </View>
                    <View style={[styles.side, styles.four]}>
                    <Image source ="https://openclipart.org/download/29545/die4.svg" alt="side four"/>
                    </View>
                    <View style={[styles.side, styles.five]}>
                    <Image source = "https://openclipart.org/download/29551/die5.svg" alt="side five"/>
                    </View>
                    <View style={[styles.side, styles.six]}>
                    <Image source ="https://openclipart.org/download/29557/die6.svg" alt="side six"/>
                    </View>
                </Animated.View>
            </View>
        );
    }

}

const styles = {
    container: {
        height: '100%',
		marginTop: 30,
    },
    dice: {
        position: 'relative',
		margin: '0 auto',
		height: 50,
		width: 50,
		transformStyle: 'preserve-3d',
    },
    side: {
        position: 'absolute',
		height: 50,
		width: 50,
        transition: '.5s',
		opacity: 1,
    } ,

    one: {
		transform: 'rotateX(90deg) translateZ(25px)',
		background: '#ff00ff',
	},
	
	two: {
		transform: 'translateZ(25px)',
		background: '#00ffff',
	},
	
	three: {
		transform: 'rotateY(90deg) translateZ(25px)',
		background: '#00ff00',
	},
	
	four: {
		transform: 'rotateY(180deg) translateZ(25px)',
		background: '#ffff00',
	},
	
	five: {
		transform: 'rotateY(-90deg) translateZ(25px)',
		background: '#0000ff',
	},
	
	six: {
		transform: 'rotateX(-90deg) translateZ(25px)',
		background: '#ff0000',
    },
}
