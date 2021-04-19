import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button'

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">" /> 

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1, //Tela toda
        alignItems: 'center',
        justifyContent: 'space-between' //Distribuir todos os elementos por igual na vertical 
                                        //tela.
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: colors.heading, //Quando adiciono o color aqui ele automaticamente importa
        marginTop: 50           //, verificar se está correto e também interessante que usou 
                                //o mesmo padrão de nome no styles, no código que estav ano figma 
                                //(bacana essa padronização)
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: 56    
    },

    image: {
        width: 292,   //Também importou o tamanho fornecido no figma
        height: 284  
    },

    buttonText: {
        color: colors.white,
        fontSize: 24
    }

});