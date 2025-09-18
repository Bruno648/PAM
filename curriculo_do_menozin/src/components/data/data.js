import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: theme.colors.textLight,
    lineHeight: 22,
    marginBottom: 10,
  },
  list: {
    fontSize: 14,
    color: theme.colors.textLight,
    lineHeight: 22,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: theme.colors.textLight,
  },
  link: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});

export const userData = {
  name: 'Bruno Amaro De Souza',
  title: 'Garoto do Ti | Empreendedor',
  profilePic: require('../img/ti.jpg'),
};

export const aboutMe = (
  <Text style={styles.text}>
    Sou uma pessoa comprometida, proativa e em constante busca por aprendizado e desenvolvimento profissional. Tenho facilidade para trabalhar em equipe, boa comunicação e senso de responsabilidade. Busco sempre entregar resultados com qualidade, mantendo uma postura ética e colaborativa no ambiente de trabalho.
  </Text>
);

export const skills = (
  <View>
    <Text style={styles.list}>• Pacote Office (Word, Excel, PowerPoint)</Text>
    <Text style={styles.list}>• Atendimento ao cliente</Text>
    <Text style={styles.list}>• Proatividade</Text>
    <Text style={styles.list}>• Pontual</Text>
    <Text style={styles.list}>• Trabalho em equipe</Text>
  </View>
);

export const experience = (
  <View>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>• Planfeteiro (2025)</Text>
      {'\n'}mil entregues por hora
    </Text>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>• Repositor atacadão</Text>
      {'\n'}Corredos mais organizados de São Paulo.
    </Text>
  </View>
);

export const education = (
  <View>
    <Text style={styles.text}>
      Técnico em Desenvolvimento de Sistemas{'\n'}
      ETEC Cidade Tiradentes - Conclusão: 2026 
      Atendimento ao público (Fundação Bradesco)
    </Text>
  </View>
);

export const contact = (
  <View>
    <View style={styles.contactRow}>
      <FontAwesome name="envelope" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>bruninamaro409@gmail.com</Text>
    </View>
    <View style={styles.contactRow}>
      <FontAwesome name="phone" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>(11) 96717-6116</Text>
    </View>
    
  </View>
);