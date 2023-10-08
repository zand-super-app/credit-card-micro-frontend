import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import theme from './Theme';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Icon name="arrow-back" size={24} color={theme.colors.primary} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e0df',
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
});

export default Header;