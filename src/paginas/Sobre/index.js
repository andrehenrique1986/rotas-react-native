import React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import PaginaBase from "../PaginaBase";
import { Link, useRoute } from "@react-navigation/native";
import uuid from 'react-native-uuid';

export default function Sobre() {
    const rotas = useRoute();
    const { nome, imagem, descricao, localidade } = rotas.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Image source={imagem} style={styles.imagem} />
                        <Text style={styles.text}>{nome}</Text>

                        {descricao.informacoes.map((informacao) => 
                            <Text style={styles.textList} key={uuid.v4()}>{informacao}</Text>
                        )}

                        <View style={styles.containerContato}>
                            <Text style={styles.local}>{localidade}</Text>
                            <View style={styles.informacoes}>
                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/chat.png')} />
                                    <Link 
                                        to={{
                                            screen: 'Mensagem',
                                            params: {
                                                nomePet: nome,
                                            },
                                        }} 
                                        style={styles.local}>
                                        Falar com responsável
                                    </Link>
                                </View>

                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/share.png')} />
                                    <Link 
                                        to={{
                                            screen: 'Mensagem',
                                            params: {
                                                nomePet: nome,
                                            },
                                        }} 
                                        style={styles.local}>
                                        Compartilhar
                                    </Link>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.textResumo}>{descricao.resumo}</Text>

                        {descricao.fotos.map((foto) => 
                            <Image source={foto} key={uuid.v4()} style={styles.image} />
                        )}
                    </View>
                </PaginaBase>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
    },
    imagem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    textList: {
        fontSize: 16,
        marginVertical: 5,
    },
    containerContato: {
        marginVertical: 20,
    },
    local: {
        fontSize: 16,
        color: '#007BFF',
        marginVertical: 5,
    },
    informacoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerInteracoes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textResumo: {
        fontSize: 18,
        fontStyle: 'italic',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginVertical: 10,
    },
});
