import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from './styles/theme';

export default function Card({ title, icon, children }) {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Ionicons name={icon} size={22} color={theme.colors.primary} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
  backgroundColor: theme.colors.surface, // mais clean, segue o design system
  borderRadius: 16, // cantos mais arredondados, tendência moderna
  padding: 20,
  marginBottom: 28,
  width: '100%',
  shadowColor: theme.colors.shadow,
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.12,
  shadowRadius: 12,
  elevation: 8,
},

titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 18,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.borderLight, // mais suave
  paddingBottom: 14,
},

sectionTitle: {
  fontSize: 22,
  fontWeight: '700', // mais presença
  marginLeft: 12,
  color: theme.colors.textPrimary,
  letterSpacing: 0.5, // mais elegante
  textTransform: 'capitalize', // títulos mais sofisticados
},

contentContainer: {
  marginTop: 14,
  gap: 12, // espaçamento consistente entre elementos internos
},

});
