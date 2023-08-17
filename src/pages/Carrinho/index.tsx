import React from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';
import topo from '../../../assets/imagens/topo.png'


const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return<>
        <Image source={ topo } style={estilos.topo} />
        <Text style= {estilos.titulo}>Detalhes do Carrinho</Text>
        <View>
            <Text>
                Carrinho de Compras 
            </Text>

            <Text>
                Fazenda Etec Cidade do Livro 
            </Text>

            <Text>
                Uma cesta de produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.
            </Text>

            <Text>
                R$40.00
            </Text>
        </View>
    </>
}

//css da imagem topo
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },

    titulo: {
        width: "100%",
        position: 'absolute',
        color:"white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
    }

})
