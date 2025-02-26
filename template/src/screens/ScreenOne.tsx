import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';
import { TextBig, TextBigger, TextNormal, TextSmall, TextSmaller } from '../components/common/Texts';

interface ScreenOneProps {

}

const ScreenOne: React.FC<ScreenOneProps> = (props) => {

    const { } = props;

    return (
        <SafeAreaWrapper clipBottom style={styles.container}>
            <TextBigger>LOGIN</TextBigger>
            <TextBig>Big</TextBig>
            <TextNormal>Normal</TextNormal>
            <TextSmall>Small</TextSmall>
            <TextSmaller>Smaller</TextSmaller>
        </SafeAreaWrapper >
    );
};

export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
